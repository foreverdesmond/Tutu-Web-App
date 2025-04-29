'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ROUTES } from '@/constants/routes';
import { useTranslation } from '@/hooks/useTranslation';

export default function Banner() {
  const { t } = useTranslation();
  const [isMobile, setIsMobile] = useState(false);
  
  // 检测设备类型
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    // 初始化
    handleResize();
    
    // 添加窗口大小变化监听
    window.addEventListener('resize', handleResize);
    
    // 清理监听器
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className="w-full h-[450px] md:h-[600px] lg:h-[85vh] bg-[#101418] flex items-center justify-center relative overflow-hidden">
      {/* 背景图片 - 移动端和桌面端分别加载不同图片 */}
      <div className="absolute inset-0 w-full h-full">
        {isMobile ? (
          <Image
            src="/images/img/banner-mobile.png"
            alt="Tutu Banner"
            fill
            priority
            className="object-cover"
          />
        ) : (
          <Image
            src="/images/img/banner.jpeg"
            alt="Tutu Banner"
            fill
            priority
            className="object-cover"
          />
        )}
      </div>
      
      {/* 渐变遮罩 - 增强透明度以提高文字可见度 */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#101418]/85 to-[#101418]/40 z-10"></div>
      
      {/* 内容 */}
      <div className="z-20 text-center px-4 max-h-[90%] overflow-y-auto custom-scrollbar">
        <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold text-[#ffaac3] mb-2 md:mb-4 drop-shadow-md">
          {t('welcome_to_tutu')}
        </h1>
        <p className="text-sm md:text-base lg:text-lg text-white font-semibold mb-4 md:mb-6 max-w-3xl mx-auto leading-relaxed drop-shadow-lg">
          {t('tutu_description')}
        </p>
        <Link
          href={ROUTES.AIRDROP}
          className="inline-block px-6 md:px-8 py-2 md:py-3 bg-[#ffaac3] text-white text-sm md:text-base rounded-full font-medium hover:bg-[#ff8aa9] transition-colors mt-2 md:mt-4"
        >
          {t('get_airdrop')}
        </Link>
      </div>
    </div>
  );
} 