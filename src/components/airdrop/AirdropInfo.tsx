'use client';

import React from 'react';
import { useTranslation } from '@/hooks/useTranslation';

export default function AirdropInfo() {
  const { t } = useTranslation();
  
  return (
    <div className="w-full max-w-full mx-auto py-16 md:py-20 px-4 md:px-6 lg:px-10 xl:px-16">
      <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center text-[#ffaac3] mb-8 md:mb-12 lg:mb-16">
        {t('airdrop.title')}
      </h2>
      <div className="max-w-3xl mx-auto p-4 md:p-6 bg-[#2a2e35] rounded-lg shadow-lg">
        <p className="text-sm md:text-base text-white mb-3 md:mb-4">
          {t('airdrop.description')}
        </p>
        <p className="text-sm md:text-base text-white mb-2 md:mb-4 font-medium">
          {t('airdrop.requirements')}
        </p>
        <ul className="list-disc list-inside text-sm md:text-base text-white mb-3 md:mb-4 space-y-2">
          <li className="mb-1 md:mb-2">{t('airdrop.requirement1')}</li>
          <li className="mb-1 md:mb-2">{t('airdrop.requirement2')}</li>
          <li className="mb-1 md:mb-2">{t('airdrop.requirement3')}</li>
          <li>{t('airdrop.requirement4')}</li>
        </ul>
      </div>
    </div>
  );
} 