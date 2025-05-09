'use client';

import React from 'react';
import SocialLinks from './SocialLinks';
import { useTranslation } from '@/hooks/useTranslation';

const Footer: React.FC = () => {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0c1014] py-6 md:py-10 mt-auto">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h3 className="text-base md:text-xl font-semibold text-white">Tutu</h3>
            <p className="text-xs md:text-sm text-gray-400 mt-1">
              © {currentYear} Tutu. {t('footer.all_rights_reserved')}
            </p>
            <div className="hidden">
              <p className="text-xs text-gray-500 mt-1">{t('footer.terms_of_use')}</p>
              <p className="text-xs text-gray-500 mt-1">{t('footer.privacy_policy')}</p>
            </div>
          </div>
          <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-8">
            <SocialLinks variant="footer" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 