'use client';

import React from 'react';
import { useAirdrop } from '@/hooks/useAirdrop';
import { useTranslation } from '@/hooks/useTranslation';

export default function ClaimButton() {
  const { airdrop, claim, isLoading } = useAirdrop();
  const { t } = useTranslation();

  const blockExplorer = process.env.NEXT_PUBLIC_BLOCK_EXPLORER || 'https://etherscan.io';

  if (!airdrop.isEligible) {
    return null;
  }

  return (
    <div className="w-full max-w-full mx-auto px-4 md:px-6 lg:px-10 xl:px-16">
      <div className="max-w-3xl mx-auto text-center py-3 md:py-4">
        {airdrop.isClaimed ? (
          <div>
            <button
              disabled
              className="px-4 md:px-6 py-1.5 md:py-2 bg-[#c0c0c0] text-white rounded text-sm md:text-base font-medium"
            >
              {t('common.claimed')}
            </button>
            {airdrop.transactionHash && (
              <div className="mt-2 md:mt-4">
                <a
                  href={`${blockExplorer}/tx/${airdrop.transactionHash}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm md:text-base text-[#ffaac3] hover:underline"
                >
                  交易详情
                </a>
              </div>
            )}
          </div>
        ) : (
          <button
            onClick={claim}
            disabled={isLoading}
            className="px-4 md:px-6 py-1.5 md:py-2 bg-[#ffaac3] text-sm md:text-base text-white rounded font-medium hover:bg-[#ff8aa9] disabled:bg-[#c0c0c0] transition-colors"
          >
            {isLoading ? (
              <span className="flex items-center justify-center">
                <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                处理中...
              </span>
            ) : (
              t('common.claim')
            )}
          </button>
        )}
      </div>
    </div>
  );
} 