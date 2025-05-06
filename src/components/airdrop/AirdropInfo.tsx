'use client';

import React from 'react';
import { useTranslation } from '@/hooks/useTranslation';

export default function AirdropInfo() {
  const { t } = useTranslation();
  
  return (
    <div className="w-full max-w-full mx-auto py-0 px-4 md:px-6 lg:px-10 xl:px-16">
      <h2 className="text-xl md:text-2xl font-bold text-center text-[#ffaac3] mb-4">
        {t('airdrop.title')}
      </h2>
      <div className="max-w-3xl mx-auto p-3 bg-[#2a2e35] rounded-lg shadow-lg">
        <p className="text-xs md:text-sm text-white mb-2 font-medium pl-4">
          {t('airdrop.requirements')}
        </p>
        <ul className="list-disc list-inside text-xs md:text-sm text-white space-y-1.5 pl-6">
          <li>{t('airdrop.requirement1')}</li>
          <li>{t('airdrop.requirement2')}</li>
          <li>{t('airdrop.requirement3')}</li>
          <li>{t('airdrop.requirement4')}</li>
          <li>{t('airdrop.requirement5')}</li>
        </ul>
      </div>
    </div>
  );
} 