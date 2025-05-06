'use client';

import React, { useEffect, useState } from 'react';
import { useAirdrop } from '@/hooks/useAirdrop';
import { formatAmount } from '@/utils/web3Utils';
import { useWallet } from '@/context/WalletContext';
import { Account } from '@ant-design/web3';
import { useTranslation } from '@/hooks/useTranslation';
import ClaimButton from './ClaimButton';

export default function EligibilityDisplay() {
  const { airdrop, isLoading, error } = useAirdrop();
  const { account } = useWallet();
  const { t } = useTranslation();
  const [localAccount, setLocalAccount] = useState<Account | null>(null);

  // 在组件加载时从 localStorage 获取钱包信息
  useEffect(() => {
    if (typeof window !== 'undefined') {
      try {
        const storedAccount = localStorage.getItem('accountInfo');
        if (storedAccount) {
          const parsedAccount = JSON.parse(storedAccount);
          if (parsedAccount.status === 'connected' && parsedAccount.address) {
            setLocalAccount(parsedAccount);
          } else {
            setLocalAccount(null);
          }
        } else {
          setLocalAccount(null);
        }
      } catch (error) {
        console.error('解析钱包信息失败:', error);
        setLocalAccount(null);
      }
    }
  }, [account]); // 当 account 变化时重新获取

  // 未连接钱包状态
  if (!localAccount) {
    return (
      <div className="text-center py-6 md:py-8">
        <p className="text-xl md:text-2xl text-white mb-6 md:mb-8">{t('airdrop.connect_wallet_check')}</p>
        <p className="text-6xl md:text-8xl lg:text-10xl font-bold text-[#ffaac3] mb-2 md:mb-3">???? Tutu</p>
      </div>
    );
  }

  // 加载状态
  if (isLoading) {
    return (
      <div className="text-center py-6 md:py-8">
        <div className="flex justify-center items-center mb-4">
          <svg className="animate-spin h-10 w-10 text-[#ffaac3]" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
          </svg>
        </div>
        <p className="text-xl md:text-2xl text-white">{t('claim.loading')}</p>
      </div>
    );
  }

  // 错误状态
  if (error) {
    return (
      <div className="text-center py-6 md:py-8">
        <p className="text-xl md:text-2xl text-red-500">{error}</p>
      </div>
    );
  }

  // 根据不同状态显示不同内容
  switch (airdrop.status) {
    case 'not_eligible':
      return (
        <div className="text-center py-6 md:py-8">
          <p className="text-xl md:text-2xl text-white mb-6 md:mb-8">{t('airdrop.not_eligible')}</p>
          <p className="text-6xl md:text-8xl lg:text-10xl font-bold text-[#ffaac3] mb-2 md:mb-3">0 Tutu</p>
        </div>
      );

    case 'claimed':
      return (
        <div className="text-center py-6 md:py-8">
          <p className="text-xl md:text-2xl text-white mb-6 md:mb-8">{t('airdrop.already_claimed')}</p>
          <p className="text-6xl md:text-8xl lg:text-10xl font-bold text-[#ffaac3] mb-2 md:mb-3">{airdrop.claimedAmountInteger} Tutu</p>
        </div>
      );

    case 'can_claim':
      return (
        <div className="text-center py-6 md:py-8">
          <p className="text-xl md:text-2xl text-white mb-6 md:mb-8">{t('airdrop.can_claim')}</p>
          <p className="text-6xl md:text-8xl lg:text-10xl font-bold text-[#ffaac3] mb-2 md:mb-3 animate-pulse">{airdrop.amountInteger} Tutu</p>
          <div className="mt-6 md:mt-8">
            <ClaimButton />
          </div>
        </div>
      );

    default:
      return null;
  }
} 