'use client';

import Link from 'next/link';
import React, { useState, useCallback, useEffect, useRef } from 'react';
import { useTranslation } from '@/hooks/useTranslation';
import { ROUTES } from '@/constants/routes';
import LanguageSwitch from './LanguageSwitch';
import SocialLinks from './SocialLinks';
import TutuLogo from '../logo/TutuLogo';
import ConnectorBtn from '../web3/ConnectorBtn';
import { useWallet } from '@/context/WalletContext';

export default function Titlebar() {
  const { t } = useTranslation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { refreshWalletState, refreshKey } = useWallet();
  const prevScreenSizeRef = useRef({
    width: typeof window !== 'undefined' ? window.innerWidth : 0,
    height: typeof window !== 'undefined' ? window.innerHeight : 0
  });
  
  const logInfo = useCallback((message: string) => {
    if (process.env.NODE_ENV !== 'production') {
      console.log(`[Titlebar] ${message}`);
    }
  }, []);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    
    let debounceTimer: NodeJS.Timeout;
    
    const handleResize = () => {
      clearTimeout(debounceTimer);
      debounceTimer = setTimeout(() => {
        const newWidth = window.innerWidth;
        const newHeight = window.innerHeight;
        const prevWidth = prevScreenSizeRef.current.width;
        
        const isMobileNow = newWidth < 1024;
        const wasMobileBefore = prevWidth < 1024;
        
        if (isMobileNow !== wasMobileBefore) {
          logInfo(`屏幕尺寸跨越边界: ${prevWidth}px -> ${newWidth}px (刷新组件)`);
          prevScreenSizeRef.current = { width: newWidth, height: newHeight };
          refreshWalletState();
        }
      }, 200);
    };
    
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
      clearTimeout(debounceTimer);
    };
  }, [logInfo, refreshWalletState]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleWalletStateChange = useCallback(() => {
    logInfo('钱包状态变化，刷新组件');
    refreshWalletState();
  }, [logInfo, refreshWalletState]);

  return (
    <header key={refreshKey} className="relative flex flex-wrap items-center justify-between h-[100px] md:h-[100px] px-4 md:px-6 lg:px-8 bg-[#101418] text-white">
      <div className="flex items-center z-10">
        <Link href={ROUTES.HOME} className="flex items-center">
          <TutuLogo width={48} height={48} className="mr-3" />
          <span className="text-2xl md:text-3xl font-bold text-[#ffaac3]">
            Tutu
          </span>
        </Link>
      </div>

      {/* 移动端和中等屏幕工具栏 */}
      <div className="flex items-center lg:hidden">
        {/* 钱包按钮 */}
        <div className="mr-4">
          <ConnectorBtn 
            onDisconnectCallback={handleWalletStateChange}
            onConnectCallback={handleWalletStateChange}
            forceInitKey={refreshKey}
            name="mobile"
          />
        </div>
        
        {/* 菜单按钮 */}
        <button 
          className="p-2 text-white focus:outline-none"
          onClick={toggleMenu}
          aria-label="菜单"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
          </svg>
        </button>
      </div>

      {/* 移动端和中等屏幕菜单和导航 - 绝对定位 */}
      <div 
        className={`${
          isMenuOpen ? 'block' : 'hidden'
        } lg:hidden absolute top-[100px] left-0 right-0 bg-[#101418] z-50 border-t border-gray-800 py-4 px-4 shadow-lg`}
      >
        <nav className="flex flex-col w-full">
          <Link 
            href={ROUTES.HOME} 
            className="py-3 text-lg hover:text-[#ffaac3] font-medium border-b border-gray-700 transition-colors duration-200"
            onClick={() => setIsMenuOpen(false)}
          >
            {t('common.home')}
          </Link>
          <Link 
            href={ROUTES.AIRDROP} 
            className="py-3 text-lg hover:text-[#ffaac3] font-medium border-b border-gray-700 transition-colors duration-200"
            onClick={() => setIsMenuOpen(false)}
          >
            {t('common.airdrop')}
          </Link>
        </nav>
        
        <div className="flex flex-col space-y-4 mt-4">
          <div className="py-2">
            <SocialLinks />
          </div>
          <div className="py-2">
            <LanguageSwitch />
          </div>
        </div>
      </div>

      {/* 大屏幕导航菜单 */}
      <nav className="hidden lg:flex lg:flex-row lg:ml-12 xl:ml-16">
        <Link 
          href={ROUTES.HOME} 
          className="mx-3 lg:mx-4 xl:mx-6 text-lg lg:text-xl xl:text-2xl hover:text-[#ffaac3] font-medium transition-colors duration-200"
        >
          {t('common.home')}
        </Link>
        <Link 
          href={ROUTES.AIRDROP} 
          className="mx-3 lg:mx-4 xl:mx-6 text-lg lg:text-xl xl:text-2xl hover:text-[#ffaac3] font-medium transition-colors duration-200"
        >
          {t('common.airdrop')}
        </Link>
      </nav>

      {/* 大屏幕社交媒体链接、语言切换和钱包连接按钮 */}
      <div className="hidden lg:flex lg:flex-row lg:items-center">
        <div className="lg:py-0">
          <SocialLinks />
        </div>
        <div className="lg:py-0">
          <LanguageSwitch />
        </div>
        <div>
          <ConnectorBtn 
            onDisconnectCallback={handleWalletStateChange}
            onConnectCallback={handleWalletStateChange}
            forceInitKey={refreshKey}
            name="desktop"
          />
        </div>
      </div>
    </header>
  );
} 