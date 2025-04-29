'use client';

import React from 'react';
import Link from 'next/link';
import SocialLinks from './SocialLinks';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#0c1014] py-6 md:py-10 mt-auto">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h3 className="text-base md:text-xl font-semibold text-white">Tutu</h3>
            <p className="text-xs md:text-sm text-gray-400 mt-1">© {new Date().getFullYear()} Tutu. 保留所有权利。</p>
          </div>
          <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-8">
            <div className="space-x-4 text-sm">
              <Link href="/terms" className="text-gray-400 hover:text-white transition-colors">
                使用条款
              </Link>
              <Link href="/privacy" className="text-gray-400 hover:text-white transition-colors">
                隐私政策
              </Link>
            </div>
            <SocialLinks variant="footer" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 