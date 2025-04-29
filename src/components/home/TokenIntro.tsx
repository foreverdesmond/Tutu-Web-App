'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { useTranslation } from '@/hooks/useTranslation';

interface IntroItemProps {
  bgImage: string;
  titleKey: string;
  subtitleKey: string;
  contentKey: string;
  index: number;
}

const IntroItem: React.FC<IntroItemProps> = ({ bgImage, titleKey, subtitleKey, contentKey, index }) => {
  const [isHovered, setIsHovered] = useState(false);
  const { t } = useTranslation();

  return (
    <div 
      className="relative rounded-lg overflow-hidden shadow-xl aspect-[4/3] transition-all duration-300 hover:shadow-2xl h-full"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* 背景图片 */}
      <div className="absolute inset-0 w-full h-full z-0">
        <Image 
          src={bgImage} 
          alt={t(titleKey)}
          fill
          priority
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          quality={90}
          className="object-cover transition-transform duration-500 ease-in-out"
          style={{ transform: isHovered ? 'scale(1.05)' : 'scale(1)' }}
        />
      </div>
      
      {/* 非悬停时显示的渐变遮罩 */}
      <div className={`absolute inset-0 bg-gradient-to-t from-[#101418]/90 via-[#101418]/40 to-transparent z-10 transition-opacity duration-300 ${isHovered ? 'opacity-0' : 'opacity-90'}`}></div>
      
      {/* 悬停时显示的半透明遮罩 */}
      <div className={`absolute inset-0 bg-[#101418]/95 z-20 transition-opacity duration-300 ${isHovered ? 'opacity-98' : 'opacity-0'}`}></div>
      
      {/* 非悬停时的标题 - 居中显示 */}
      <div className={`absolute inset-0 flex items-center justify-center z-30 transition-opacity duration-300 ${isHovered ? 'opacity-0' : 'opacity-100'}`}>
        <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-[#ffaac3] text-center px-4">{t(titleKey)}</h3>
      </div>
      
      {/* 悬停时显示的内容 */}
      <div className={`absolute inset-0 flex flex-col items-center justify-center p-4 md:p-6 z-30 transition-opacity duration-300 ${isHovered ? 'opacity-100' : 'opacity-0'}`}>
        <p className="text-sm md:text-base lg:text-lg font-bold text-[#ffaac3] mb-4 text-center drop-shadow-md">
          {t(subtitleKey)}
        </p>
        <div className="overflow-y-auto max-h-[75%] text-xs md:text-sm lg:text-base text-white font-medium custom-scrollbar w-full px-4 drop-shadow-sm">
          {t(contentKey).split('\n\n').map((paragraph, index) => (
            <p key={index} className="mb-3 text-left">{paragraph}</p>
          ))}
        </div>
      </div>
      
      {/* 移动端触摸提示 */}
      <div className="absolute top-2 right-2 text-white text-xs px-2 py-1 bg-[#ffaac3]/70 rounded-full z-30 md:hidden">
        {index + 1}/3
      </div>
    </div>
  );
};

export default function TokenIntro() {
  const { t } = useTranslation();
  
  return (
    <div className="w-full max-w-full mx-auto py-16 md:py-20 px-4 md:px-6 lg:px-10 xl:px-16">
      <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center text-[#ffaac3] mb-8 md:mb-12 lg:mb-16">
        {t('token.intro.title')}
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-10 xl:gap-12 w-full max-w-[1920px] mx-auto">
        <IntroItem 
          bgImage="/images/img/1.jpeg" 
          titleKey="token.intro.item1.title"
          subtitleKey="token.intro.item1.subtitle"
          contentKey="token.intro.item1.content"
          index={0}
        />
        <IntroItem 
          bgImage="/images/img/2.jpeg" 
          titleKey="token.intro.item2.title"
          subtitleKey="token.intro.item2.subtitle"
          contentKey="token.intro.item2.content"
          index={1}
        />
        <IntroItem 
          bgImage="/images/img/3.jpeg" 
          titleKey="token.intro.item3.title"
          subtitleKey="token.intro.item3.subtitle"
          contentKey="token.intro.item3.content"
          index={2}
        />
      </div>
    </div>
  );
} 