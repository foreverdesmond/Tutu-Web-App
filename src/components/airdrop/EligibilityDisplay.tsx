'use client';

import React from 'react';
import { useAirdrop } from '@/hooks/useAirdrop';
import { formatAmount } from '@/utils/web3Utils';

export default function EligibilityDisplay() {
  const { airdrop, isLoading, error } = useAirdrop();

  if (true) {
    return (
      <div className="text-center py-6 md:py-8">
        <p className="text-2xl md:text-3xl font-bold text-[#ffaac3]">???? Tutu</p>
        <p className="text-sm md:text-base text-white mt-3 md:mt-4">请连接您的钱包查询空投资格</p>
      </div>
    );
  }

  if (isLoading) {
    return (
      <div className="text-center py-6 md:py-8">
        <div className="flex justify-center items-center mb-4">
          <svg className="animate-spin h-8 w-8 text-[#ffaac3]" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
          </svg>
        </div>
        <p className="text-sm md:text-base text-white">查询中...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center py-6 md:py-8">
        <p className="text-sm md:text-base text-red-500">{error}</p>
      </div>
    );
  }

  if (!airdrop.isEligible) {
    return (
      <div className="text-center py-6 md:py-8">
        <p className="text-2xl md:text-3xl font-bold text-[#ffaac3]">0 Tutu</p>
        <p className="text-sm md:text-base text-white mt-3 md:mt-4">很遗憾，您不符合空投资格</p>
      </div>
    );
  }

  return (
    <div className="text-center py-6 md:py-8">
      <p className="text-2xl md:text-3xl font-bold text-[#ffaac3]">{formatAmount(airdrop.amount)} Tutu</p>
      <p className="text-sm md:text-base text-white mt-3 md:mt-4">恭喜您，您可以领取Tutu代币</p>
    </div>
  );
} 