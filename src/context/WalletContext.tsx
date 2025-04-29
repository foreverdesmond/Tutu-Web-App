'use client';

import React, { createContext, useState, useContext, useEffect, useCallback } from 'react';
import { Account } from '@ant-design/web3';

// 本地存储键
const ACCOUNT_INFO_KEY = 'accountInfo';

// 定义钱包上下文的类型
interface WalletContextType {
  // 钱包状态
  account: Account | null;
  isConnected: boolean;
  
  // 状态管理函数
  connect: (account: Account) => void;
  disconnect: () => void;
  
  // 辅助属性
  refreshKey: number;
  refreshWalletState: () => void;
}

// 创建上下文
const WalletContext = createContext<WalletContextType>({
  account: null,
  isConnected: false,
  connect: () => {},
  disconnect: () => {},
  refreshKey: 0,
  refreshWalletState: () => {},
});

// 自定义钩子，用于在组件中访问钱包上下文
export const useWallet = () => useContext(WalletContext);

// 钱包上下文提供者组件
export const WalletProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  // 钱包账户状态
  const [account, setAccount] = useState<Account | null>(null);
  // 连接状态
  const [isConnected, setIsConnected] = useState(false);
  // 用于强制组件刷新的key
  const [refreshKey, setRefreshKey] = useState(0);
  
  // 日志函数
  const logInfo = useCallback((message: string) => {
    if (process.env.NODE_ENV !== 'production') {
      console.log(`[WalletContext] ${message}`);
    }
  }, []);

  // 连接钱包
  const connect = useCallback((newAccount: Account) => {
    logInfo(`连接钱包: ${newAccount.address}`);
    setAccount(newAccount);
    setIsConnected(true);
    
    try {
      localStorage.setItem(ACCOUNT_INFO_KEY, JSON.stringify(newAccount));
      // 触发自定义事件，通知其他组件钱包状态已更新
      const event = new CustomEvent('walletStateChanged', { 
        detail: { account: newAccount, isConnected: true } 
      });
      window.dispatchEvent(event);
    } catch (error) {
      logInfo(`保存账户信息失败: ${error}`);
    }
  }, [logInfo]);

  // 断开钱包连接
  const disconnect = useCallback(() => {
    logInfo('断开钱包连接');
    setAccount(null);
    setIsConnected(false);
    
    try {
      localStorage.removeItem(ACCOUNT_INFO_KEY);
      // 触发自定义事件，通知其他组件钱包状态已更新
      const event = new CustomEvent('walletStateChanged', { 
        detail: { account: null, isConnected: false } 
      });
      window.dispatchEvent(event);
    } catch (error) {
      logInfo(`清除账户信息失败: ${error}`);
    }
  }, [logInfo]);
  
  // 刷新钱包状态
  const refreshWalletState = useCallback(() => {
    setRefreshKey(prev => prev + 1);
  }, []);

  // 初始化钱包状态
  useEffect(() => {
    logInfo(`初始化钱包状态 (refreshKey: ${refreshKey})`);
    if (typeof window === 'undefined') return;
    
    try {
      const storedInfo = localStorage.getItem(ACCOUNT_INFO_KEY);
      if (storedInfo) {
        const parsedInfo = JSON.parse(storedInfo);
        if (parsedInfo && parsedInfo.address && parsedInfo.status === 'connected') {
          logInfo(`从本地存储恢复账户: ${parsedInfo.address}`);
          setAccount(parsedInfo);
          setIsConnected(true);
        } else {
          logInfo('本地存储中账户信息无效');
          setAccount(null);
          setIsConnected(false);
        }
      } else {
        logInfo('本地存储中不存在账户信息');
        setAccount(null);
        setIsConnected(false);
      }
    } catch (error) {
      logInfo(`读取账户信息失败: ${error}`);
      setAccount(null);
      setIsConnected(false);
    }
  }, [refreshKey, logInfo]);

  // 监听自定义事件
  useEffect(() => {
    if (typeof window === 'undefined') return;
    
    const handleWalletStateChanged = (e: CustomEvent) => {
      logInfo('接收到钱包状态变更事件');
      const { account: newAccount, isConnected: newIsConnected } = e.detail;
      setAccount(newAccount);
      setIsConnected(newIsConnected);
    };
    
    window.addEventListener('walletStateChanged', handleWalletStateChanged as EventListener);
    
    return () => {
      window.removeEventListener('walletStateChanged', handleWalletStateChanged as EventListener);
    };
  }, [logInfo]);

  // 上下文值
  const contextValue: WalletContextType = {
    account,
    isConnected,
    connect,
    disconnect,
    refreshKey,
    refreshWalletState
  };

  return (
    <WalletContext.Provider value={contextValue}>
      {children}
    </WalletContext.Provider>
  );
}; 