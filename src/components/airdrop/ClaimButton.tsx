'use client';

import React, { useState } from 'react';
import { useAirdrop } from '@/hooks/useAirdrop';
import { useTranslation } from '@/hooks/useTranslation';
import { formatAmount } from '@/utils/web3Utils';

export default function ClaimButton() {
  const { airdrop, isLoading, error } = useAirdrop();
  const { t } = useTranslation();
  const [isClaiming, setIsClaiming] = useState(false);
  const [txHash, setTxHash] = useState<string | null>(null);

  const blockExplorer = process.env.NEXT_PUBLIC_BLOCK_EXPLORER || 'https://explorer.linea.build';

  // 如果不符合资格或没有可领取的代币，不显示按钮
  if (!airdrop.isEligible || airdrop.status !== 'can_claim') {
    return null;
  }

  // 模拟领取操作
  const handleClaim = async () => {
    setIsClaiming(true);
    try {
      // 这里应该调用实际的合约领取方法
      // 暂时使用延时模拟
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // 模拟交易哈希
      const mockTxHash = '0x' + Math.random().toString(16).substring(2, 62);
      setTxHash(mockTxHash);
    } catch (err) {
      console.error('领取失败:', err);
    } finally {
      setIsClaiming(false);
    }
  };

  // 已经完成领取
  if (txHash) {
    return (
      <div className="w-full max-w-full mx-auto px-4 md:px-6 lg:px-10 xl:px-16">
        <div className="max-w-3xl mx-auto text-center py-3 md:py-4">
          <div>
            <button
              disabled
              className="px-4 md:px-6 py-1.5 md:py-2 bg-[#c0c0c0] text-white rounded text-sm md:text-base font-medium"
            >
              {t('claim.complete')}
            </button>
            <div className="mt-2 md:mt-4">
              <a
                href={`${blockExplorer}/tx/${txHash}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm md:text-base text-[#ffaac3] hover:underline"
              >
                {t('airdrop.view_transaction')}
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // 可领取状态
  return (
    <div className="w-full max-w-full mx-auto px-4 md:px-6 lg:px-10 xl:px-16">
      <div className="max-w-3xl mx-auto text-center py-3 md:py-4">
        <button
          onClick={handleClaim}
          disabled={isClaiming}
          className="px-4 md:px-6 py-1.5 md:py-2 bg-[#ffaac3] text-sm md:text-base text-white rounded font-medium hover:bg-[#ff8aa9] disabled:bg-[#c0c0c0] transition-colors"
        >
          {isClaiming ? (
            <span className="flex items-center justify-center">
              <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              {t('claim.loading')}
            </span>
          ) : (
            `${t('claim.action')} ${formatAmount(airdrop.amount)} Tutu`
          )}
        </button>
      </div>
    </div>
  );
} 