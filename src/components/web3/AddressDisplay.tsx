"use client";

import { useCallback } from 'react';
import ConnectorBtn from './ConnectorBtn';
import { useWallet } from '@/context/WalletContext';
import { truncateAddress } from '@/utils/web3Utils';

interface AddressDisplayProps {
  onConnect?: () => void;
  onDisconnect?: () => void;
  name?: string;
  className?: string;
  hideAfterConnect?: boolean;
}

export default function AddressDisplay({ 
  onConnect, 
  onDisconnect, 
  name = 'addressDisplay',
  className = '',
  hideAfterConnect = false
}: AddressDisplayProps) {
  // 使用全局钱包上下文
  const { account, isConnected, refreshKey } = useWallet();

  // 日志函数
  const logInfo = useCallback((message: string) => {
    if (process.env.NODE_ENV !== 'production') {
      console.log(`[AddressDisplay:${name}] ${message}`);
    }
  }, [name]);

  // 处理钱包断开连接
  const handleDisconnect = useCallback(() => {
    logInfo('钱包断开连接，触发回调');
    if (onDisconnect) {
      onDisconnect();
    }
  }, [onDisconnect, logInfo]);

  // 处理钱包连接成功
  const handleConnect = useCallback(() => {
    logInfo('钱包连接成功，触发回调');
    if (onConnect) {
      onConnect();
    }
  }, [onConnect, logInfo]);

  // 如果用户选择连接后隐藏且已连接，则返回null
  if (hideAfterConnect && isConnected && account) {
    return null;
  }

  // 如果有账户信息，显示地址；否则显示连接按钮
  return (
    <div className={`address-display-wrapper ${className}`}>
      {isConnected && account && account.address ? (
        <div className="text-center py-2">
          <span className="block text-base md:text-lg font-mono bg-[#1c2026] text-white px-3 py-1.5 rounded-lg break-all">
            {account.address}
          </span>
        </div>
      ) : (
        <ConnectorBtn 
          onDisconnectCallback={handleDisconnect}
          onConnectCallback={handleConnect}
          forceInitKey={refreshKey}
          name={`${name}-connector`}
        />
      )}
    </div>
  );
} 