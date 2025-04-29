'use client';

import React, { useState } from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { GlobalOutlined } from '@ant-design/icons';
import { Dropdown, Space, ConfigProvider, theme } from 'antd';
import type { MenuProps } from 'antd';

export default function LanguageSwitch() {
  const { language, setLanguage } = useLanguage();
  const [open, setOpen] = useState(false);
  
  // 语言选项配置
  const languages = [
    { key: 'en', label: 'English' },
    { key: 'zh-CN', label: '中文' },
    { key: 'ko', label: '한국어' }
  ];
  
  // 当前选中的语言标签
  const getCurrentLanguageLabel = () => {
    return languages.find(item => item.key === language)?.label || 'English';
  };
  
  // 下拉菜单点击处理
  const handleMenuClick: MenuProps['onClick'] = (e) => {
    setLanguage(e.key as 'en' | 'zh-CN' | 'ko');
    setOpen(false);
  };
  
  // 下拉菜单项
  const items: MenuProps['items'] = languages.map(lang => ({
    key: lang.key,
    label: lang.label,
  }));

  return (
    <ConfigProvider
      theme={{
        algorithm: theme.darkAlgorithm,
        token: {
          colorPrimary: '#ffaac3',
          borderRadius: 6,
          fontSize: 16,
        },
      }}
    >
      <div className="mx-2 md:mx-6 lg:mx-8">
        <Dropdown
          menu={{
            items,
            onClick: handleMenuClick,
            selectable: true,
            selectedKeys: [language],
          }}
          trigger={['click']}
          open={open}
          onOpenChange={setOpen}
          overlayClassName="custom-dropdown"
        >
          <a onClick={(e) => e.preventDefault()}>
            <Space className="flex items-center text-lg md:text-xl lg:text-2xl text-white hover:text-[#ffaac3] transition-colors duration-200 cursor-pointer">
              <GlobalOutlined className="text-xl md:text-2xl lg:text-3xl" />
              <span className="hidden md:inline">{getCurrentLanguageLabel()}</span>
            </Space>
          </a>
        </Dropdown>
      </div>
    </ConfigProvider>
  );
} 