'use client';

import React from 'react';
import { FaTwitter, FaTelegram, FaDiscord, FaMedium } from 'react-icons/fa';

interface SocialLinksProps {
  variant?: 'footer' | 'topbar';
  showMedium?: boolean;
}

const SocialLinks: React.FC<SocialLinksProps> = ({ 
  variant = 'topbar',
  showMedium = false // 默认不显示Medium
}) => {
  // 社交媒体链接从环境变量中获取
  const socialLinks = {
    twitter: process.env.NEXT_PUBLIC_TWITTER_URL,
    telegram: process.env.NEXT_PUBLIC_TELEGRAM_URL,
    discord: process.env.NEXT_PUBLIC_DISCORD_URL,
    medium: process.env.NEXT_PUBLIC_MEDIUM_URL 
  };

  // 渲染页脚样式的链接
  const renderFooterLinks = () => {
    return (
      <div className="flex flex-row space-x-5 social-links">
        <a
          href={socialLinks.twitter}
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-[#ffaac3] transition-colors duration-200"
          aria-label="Twitter"
        >
          <FaTwitter size={24} />
        </a>
        <a
          href={socialLinks.telegram}
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-[#ffaac3] transition-colors duration-200"
          aria-label="Telegram"
        >
          <FaTelegram size={24} />
        </a>
        <a
          href={socialLinks.discord}
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-[#ffaac3] transition-colors duration-200"
          aria-label="Discord"
        >
          <FaDiscord size={24} />
        </a>
        {showMedium && (
          <a
            href={socialLinks.medium}
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-[#ffaac3] transition-colors duration-200"
            aria-label="Medium"
          >
            <FaMedium size={24} />
          </a>
        )}
      </div>
    );
  };

  // 渲染顶部栏样式的链接
  const renderTopbarLinks = () => {
    return (
      <div className="flex flex-row space-x-4 md:space-x-3 lg:space-x-5 social-links">
        <a
          href={socialLinks.twitter}
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-[#ffaac3] transition-colors duration-200"
          aria-label="Twitter"
        >
          <div className="flex items-center">
            <FaTwitter size={24} className="md:w-6 md:h-6 lg:w-7 lg:h-7" />
          </div>
        </a>
        <a
          href={socialLinks.telegram}
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-[#ffaac3] transition-colors duration-200"
          aria-label="Telegram"
        >
          <div className="flex items-center">
            <FaTelegram size={24} className="md:w-6 md:h-6 lg:w-7 lg:h-7" />
          </div>
        </a>
        <a
          href={socialLinks.discord}
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-[#ffaac3] transition-colors duration-200"
          aria-label="Discord"
        >
          <div className="flex items-center">
            <FaDiscord size={24} className="md:w-6 md:h-6 lg:w-7 lg:h-7" />
          </div>
        </a>
        {showMedium && (
          <a
            href={socialLinks.medium}
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-[#ffaac3] transition-colors duration-200"
            aria-label="Medium"
          >
            <div className="flex items-center">
              <FaMedium size={24} className="md:w-6 md:h-6 lg:w-7 lg:h-7" />
            </div>
          </a>
        )}
      </div>
    );
  };

  // 根据传入的variant属性决定渲染哪种样式的链接
  return variant === 'footer' ? renderFooterLinks() : renderTopbarLinks();
};

export default SocialLinks;