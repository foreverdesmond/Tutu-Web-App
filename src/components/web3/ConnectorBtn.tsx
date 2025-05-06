"use client";

import { ConnectButton, Connector, en_US, zh_CN, Account, ConnectStatus } from '@ant-design/web3';
import { EthWeb3jsConfigProvider } from '@ant-design/web3-eth-web3js';
import { ConfigProvider } from 'antd';
import { MetaMask, OkxWallet, TokenPocket, WagmiWeb3ConfigProvider } from "@ant-design/web3-wagmi";
import { darkTheme } from '../../themes/darktheme';
import { linea } from 'wagmi/chains';
import { useTranslation } from '@/hooks/useTranslation';
import { useState, useEffect, useCallback } from 'react';
import { useWallet } from '@/context/WalletContext';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

// 创建查询客户端实例
const queryClient = new QueryClient();

// 用于检测屏幕尺寸变化的防抖函数
const debounce = <T extends (...args: any[]) => any>(fn: T, ms = 300): ((...args: Parameters<T>) => void) => {
  let timeoutId: ReturnType<typeof setTimeout>;
  return function(this: any, ...args: Parameters<T>) {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => fn.apply(this, args), ms);
  };
};

// 定义统一的本地存储键
const ACCOUNT_INFO_KEY = 'accountInfo';

// 添加自定义控制台错误拦截
if (typeof window !== 'undefined') {
  // 保存原始的console.error方法
  const originalConsoleError = console.error;
  
  // 覆盖console.error方法
  console.error = function(...args: any[]) {
    // 检查是否是要屏蔽的特定错误
    const errorMessage = args.join(' ');
    if (errorMessage.includes('Can not find wallet factory for Injected')) {
      // 忽略这个特定的错误
      return;
    }
    
    // 对其他错误使用原始的console.error方法
    originalConsoleError.apply(console, args);
  };
}

export default function ConnectorBtn({ 
  onDisconnectCallback, 
  onConnectCallback,
  forceInitKey,
  name = 'default' // 添加name参数用于区分不同实例
}: { 
  onDisconnectCallback?: () => void;
  onConnectCallback?: () => void;
  forceInitKey?: number;
  name?: string; // 实例名称，用于日志标识
}) {
  const { language } = useTranslation();
  const { connect, disconnect } = useWallet(); // 使用全局钱包上下文

  // 添加屏幕尺寸状态
  const [screenSize, setScreenSize] = useState({
    width: typeof window !== 'undefined' ? window.innerWidth : 0,
    height: typeof window !== 'undefined' ? window.innerHeight : 0
  });

  // 添加Account状态
  const [accountInfo, setAccountInfo] = useState<Account | undefined>(undefined);
  
  // 添加日志的辅助函数 - 只在控制台输出日志
  const addLog = useCallback((message: string | any) => {
    // 只在开发环境下输出日志
    if (process.env.NODE_ENV !== 'production') {
      console.log(`[Wallet:${name}] ${message}`);
    }
  }, [name]);

  // 统一清除所有与钱包相关的本地存储
  const clearWalletLocalStorage = useCallback(() => {
    if (typeof window === 'undefined') return;
    
    addLog('清除钱包相关存储');
    localStorage.removeItem(ACCOUNT_INFO_KEY);
    // 清除Account状态
    addLog('清除Account状态');
    setAccountInfo(undefined);

  }, [addLog]);

  // 保存账户信息到本地存储
  const saveAccountInfoToLocalStorage = useCallback((account: Account) => {
    if (typeof window === 'undefined') return;
    
    try {
      addLog(`保存Account信息至LocalStorage: ${account.address}`);
      localStorage.setItem(ACCOUNT_INFO_KEY, JSON.stringify(account));
    } catch (error) {
      addLog(`保存Account信息失败: ${error}`);
    }
  }, [addLog]);

  // 统一设置钱包连接状态
  const setWalletConnectionState = useCallback((state: {
    isConnected: boolean;
    address: string | null;
    ensName?: string;
  }) => {
    // 确保状态对象始终包含ensName字段（未连接时为undefined）
    const completeState = {
      ...state,
      ensName: state.isConnected ? state.ensName : undefined
    };
    
    
    // 如果已连接且有地址，则创建Account对象并保存
    if (completeState.isConnected && completeState.address) {
      try {
        // 创建完整的Account对象
        const account: Account = {
          address: completeState.address,
          name: completeState.ensName,
          status: 'connected' as ConnectStatus,
        };
        
        // 设置Account状态
        setAccountInfo(account);
        
        // 保存到localStorage
        saveAccountInfoToLocalStorage(account);
      } catch (error: any) {
        addLog('创建Account对象失败');
        addLog(error.toString());
      }
    } else {
      // 如果断开连接，清除所有本地存储
      clearWalletLocalStorage();
    }
  }, [clearWalletLocalStorage, saveAccountInfoToLocalStorage, addLog]);

  // 替换掉之前的两个useEffect，只使用一个合并的useEffect
  useEffect(() => {
    // 仅在forceInitKey变化或组件首次挂载时执行
    addLog(`初始化钱包状态, forceInitKey: ${forceInitKey}`);
    
    if (typeof window === 'undefined') return;
    
    // 从localStorage获取Account信息
    let storedAccount: Account | null = null;
    try {
      const accountInfoStr = localStorage.getItem(ACCOUNT_INFO_KEY);
      if (accountInfoStr) {
        addLog('发现存储的账户信息');
        storedAccount = JSON.parse(accountInfoStr);
      } else {
        addLog('未找到存储的账户信息，设置为未连接状态');
        setAccountInfo(undefined);
        return;
      }
    } catch (error: any) {
      addLog(`解析Account信息失败: ${error}`);
      setAccountInfo(undefined);
      return;
    }
    
    // 如果找到存储的Account信息，尝试恢复
    if (storedAccount && storedAccount.address && storedAccount.status === 'connected') {
      addLog(`找到有效的Account信息: ${storedAccount.address}`);
      setAccountInfo(storedAccount);
    } else {
      addLog('找到的Account信息无效，设置为未连接状态');
      setAccountInfo(undefined);
    }
  }, [forceInitKey, addLog]); // 仅依赖于forceInitKey和addLog

  // 恢复钱包连接状态并进行验证
  useEffect(() => {
    if (typeof window === 'undefined') return;
    
    // 设置以太坊提供者的最大监听器数量，防止内存泄漏警告
    if (window.ethereum) {
      window.ethereum.setMaxListeners(200);
    }
    
    const checkAndRestoreWalletState = async () => {
      // 从localStorage获取Account信息
      let storedAccount: Account | null = null;
      
      try {
        const accountInfoStr = localStorage.getItem(ACCOUNT_INFO_KEY);
        if (accountInfoStr) {
          addLog('accountInfoStr');
          storedAccount = JSON.parse(accountInfoStr);
        }
      } catch (error: any) {
        addLog(`解析Account信息失败: ${error}`);
      }
      
      // 如果找到存储的Account信息
      if (storedAccount && storedAccount.address && storedAccount.status === 'connected') {
        addLog('找到存储的Account信息，尝试恢复连接状态');
                
        // 验证钱包是否真的连接
        try {
          // 检查是否有以太坊提供者
          if (window.ethereum) {
            let accounts;
            try {
              // 尝试使用eth_requestAccounts主动请求连接，这在钱包已经授权的情况下不会显示弹窗
              accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
              addLog('使用eth_requestAccounts成功获取账户');
            } catch (requestError) {
              // 如果requestAccounts失败，回退到eth_accounts检查
              addLog('eth_requestAccounts失败，回退到eth_accounts');
              accounts = await window.ethereum.request({ method: 'eth_accounts' });
            }
            
            if (accounts && accounts.length > 0) {
              addLog('验证成功：钱包已连接');
              
              // 地址可能发生变化
              if (accounts[0].toLowerCase() !== storedAccount.address.toLowerCase()) {
                addLog('钱包地址已变更，更新状态');
                
                // 更新状态并保存
                setWalletConnectionState({
                  isConnected: true,
                  address: accounts[0],
                  ensName: undefined
                });
              } 
              
              else {
                // 验证成功，直接恢复Account状态
                setAccountInfo(storedAccount);
              }
            } else {
              addLog('验证失败：钱包未连接，清除状态');
              // 没有找到账户，清除存储的状态
              setWalletConnectionState({
                isConnected: false,
                address: null,
                ensName: undefined
              });
            }
          } else {
            // 没有以太坊提供者，清除状态
            addLog('无以太坊提供者，清除状态');
            setWalletConnectionState({
              isConnected: false,
              address: null,
              ensName: undefined
            });
          }
        } catch (error: any) {
          addLog('验证钱包连接状态时出错');
          addLog(error.toString());
          setWalletConnectionState({
            isConnected: false,
            address: null,
            ensName: undefined
          });
        }
      }
    };
    
    // 执行检查和恢复
    checkAndRestoreWalletState();
    
    // 监听账户变化事件
    const handleAccountsChanged = async (accounts: string[]) => {
      addLog('账户变化');
      addLog(`accounts: ${accounts}`);
      if (accounts.length > 0) {
        setWalletConnectionState({
        isConnected: true,
          address: accounts[0],
          ensName: undefined
        });
      } else {
        setWalletConnectionState({
          isConnected: false,
          address: null,
          ensName: undefined
        });
      }
    };
    
    // 监听链变化事件
    const handleChainChanged = () => {
      addLog('链变化，刷新状态');
      // 链变化时重新获取账户状态
      window.ethereum.request({ method: 'eth_accounts' })
        .then(handleAccountsChanged)
        .catch(console.error);
    };
    
    // 监听断开连接事件
    const handleDisconnect = () => {
      addLog('检测到断开连接事件');
      setWalletConnectionState({
        isConnected: false,
        address: null,
        ensName: undefined
      });
    };
    
    // 添加各种事件监听器
    if (window.ethereum) {
      window.ethereum.on('accountsChanged', handleAccountsChanged);
      window.ethereum.on('chainChanged', handleChainChanged);
      window.ethereum.on('disconnect', handleDisconnect);
    }
    
    // 清理函数
    return () => {
      if (window.ethereum) {
        window.ethereum.removeListener('accountsChanged', handleAccountsChanged);
        window.ethereum.removeListener('chainChanged', handleChainChanged);
        window.ethereum.removeListener('disconnect', handleDisconnect);
    }
    };
  }, [setWalletConnectionState, saveAccountInfoToLocalStorage, addLog]);

  // 处理屏幕尺寸变化
  useEffect(() => {
    if (typeof window === 'undefined') return;
    
    // 设置以太坊提供者的最大监听器数量，防止内存泄漏警告
    if (window.ethereum) {
      window.ethereum.setMaxListeners(200);
    }
    
    // 使用上一次尺寸的引用来避免不必要的更新
    const prevSize = {
      width: screenSize.width,
      height: screenSize.height
    };
    
    // 更新屏幕尺寸状态并触发钱包状态重新验证
    const handleResize = debounce(() => {
      const newWidth = window.innerWidth;
      const newHeight = window.innerHeight;
      
      // 检查是否跨越了移动/桌面边界
      const isMobileNow = newWidth < 1024;
      const wasMobileBefore = prevSize.width < 1024;
      const crossedSizeBoundary = isMobileNow !== wasMobileBefore;
      
      if (crossedSizeBoundary) {
        addLog(`屏幕尺寸跨越边界: ${prevSize.width}px -> ${newWidth}px`);
        
        // 更新屏幕尺寸状态
        setScreenSize({
          width: newWidth,
          height: newHeight
        });
        
        // 保存当前尺寸作为下次比较基准
        prevSize.width = newWidth;
        prevSize.height = newHeight;
        
        // 只在尺寸跨越边界时才通知父组件刷新
        if (onDisconnectCallback) {
          addLog('屏幕尺寸变化跨越边界，触发父组件刷新');
          onDisconnectCallback();
        }
        
        // 强制重新验证钱包状态
        // 从localStorage读取最新状态
        const accountInfoStr = localStorage.getItem(ACCOUNT_INFO_KEY);
        
        if (!accountInfoStr) {
          addLog('本地存储中无钱包信息，设置为未连接状态');
          setAccountInfo(undefined);
        } else {
          try {
            const storedAccount = JSON.parse(accountInfoStr);
            if (storedAccount && storedAccount.address && storedAccount.status === 'connected') {
              addLog(`从本地存储恢复账户: ${storedAccount.address}`);
              setAccountInfo(storedAccount);
            } else {
              addLog('本地存储中的账户信息无效');
              setAccountInfo(undefined);
            }
          } catch (error: any) {
            addLog(`解析本地存储账户信息出错: ${error}`);
            setAccountInfo(undefined);
          }
        }
      }
    }, 300);
    
    window.addEventListener('resize', handleResize);
    
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [setAccountInfo, onDisconnectCallback, addLog, screenSize.width, screenSize.height]);

    // 获取本地化设置
  const getLocale = () => {
    switch (language) {
      case 'zh-CN':
        return zh_CN;
      case 'ko':
        return en_US; // 由于没有韩文支持，暂时使用英文
      default:
        return en_US;
    }
  };

  // 处理钱包连接成功
  const handleConnected = async (data: any) => {
    addLog('钱包已连接');
    addLog(data);
    
    // 如果有提供钱包连接回调函数，则调用
    if (onConnectCallback) {
      onConnectCallback();
    }
    
    // 创建完整的Account对象
    const account: Account = {
      address: data.address,
      name: data.name,
      status: 'connected' as ConnectStatus,
    };
    
    // 更新全局钱包状态
    connect(account);
    
    // 本地状态更新
    setAccountInfo(account);
  };
  
  // 处理钱包断开连接
  const handleDisconnected = () => {
    addLog('钱包断开连接事件触发');
    
    // 更新全局钱包状态
    disconnect();
    
    // 清除本地状态
    setAccountInfo(undefined);
    
    // 如果有断开连接回调函数，则调用
    if (onDisconnectCallback) {
      setTimeout(() => {
        addLog('通知父组件刷新');
        onDisconnectCallback();
      }, 50);
    }
  };

  // 手动实现disconnect方法
  const manualDisconnect = useCallback(async () => {
    addLog('手动断开钱包连接');
    
    try {
      // 更新全局钱包状态
      disconnect();
      
      // 清除本地状态
      setAccountInfo(undefined);
      
      // 如果有断开连接回调函数，则调用
      if (onDisconnectCallback) {
        setTimeout(() => {
          addLog('通知父组件刷新');
          onDisconnectCallback();
        }, 50);
      }
      
      // 返回成功的Promise
      return Promise.resolve();
    } catch (error: any) {
      addLog(`断开连接时发生错误: ${error}`);
      return Promise.reject(error);
    }
  }, [onDisconnectCallback, addLog, disconnect]);

  // 错误处理包装组件
  const ErrorBoundary = ({ children }: { children: React.ReactNode }) => {
    // 这是一个函数组件包装器，它只是返回传入的子组件
    // 实际的错误拦截已经通过修改console.error实现
    return <>{children}</>;
  };

  return (
    <div className="wallet-connect-wrapper">
      <ConfigProvider theme={darkTheme}>
        <QueryClientProvider client={queryClient}>
          <ErrorBoundary>
          <EthWeb3jsConfigProvider
            locale={getLocale()}
            eip6963={{
              autoAddInjectedWallets: true,
            }} 
            chains={[linea]}
            wallets={[MetaMask(), OkxWallet(), TokenPocket()]}
          >
            <Connector
              modalProps={{
                emptyProps: {
                  description: language === 'zh-CN' ? '未检测到钱包' : 'No wallet detected'
                },
              }}
              onConnected={handleConnected}
              onDisconnected={handleDisconnected}
              account={accountInfo}
              disconnect={manualDisconnect}
            >
              <ConnectButton 
                size="middle"
                className="custom-connect-btn"
                block={false}
              />
            </Connector>
          </EthWeb3jsConfigProvider>
          </ErrorBoundary>
        </QueryClientProvider>
      </ConfigProvider>
    </div>
  );
} 