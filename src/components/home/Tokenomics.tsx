'use client';

import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { useTokenomics } from '@/hooks/useTokenomics';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';
import { useTranslation } from '@/hooks/useTranslation';
import { CopyOutlined } from '@ant-design/icons';
import { TUTU_CONTRACT_ADDRESS } from '@/constants/contracts';

ChartJS.register(ArcElement, Tooltip, Legend);

export default function Tokenomics() {
  const { t } = useTranslation();
  const { tokenomicsData, isLoading, error } = useTokenomics();
  const [isMobile, setIsMobile] = useState(false);
  const chartRef = useRef(null);

  useEffect(() => {
    // 在客户端检测屏幕宽度
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkIsMobile();
    window.addEventListener('resize', checkIsMobile);
    
    return () => {
      window.removeEventListener('resize', checkIsMobile);
    };
  }, []);

  if (isLoading) {
    return <div className="text-center py-8 text-white">{t('loading')}</div>;
  }

  if (error) {
    return <div className="text-center py-8 text-red-500">{error}</div>;
  }

  const chartData = {
    labels: tokenomicsData.map(item => t(`tokenomics.${item.label.toLowerCase()}`)),
    datasets: [
      {
        data: tokenomicsData.map(item => item.value),
        backgroundColor: tokenomicsData.map(item => item.color),
        borderColor: '#101418',
        borderWidth: 2,
        // 高亮效果
        hoverBackgroundColor: tokenomicsData.map(item => item.color),
        hoverBorderColor: tokenomicsData.map(item => item.color),
        hoverBorderWidth: 4,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: true,
    cutout: '40%', // 中心挖空的百分比
    events: [], // 禁用所有事件，包括鼠标悬停显示文字
    animation: {
      animateRotate: true,
      animateScale: true,
      duration: 1000,
      easing: 'easeOutQuart',
    },
    plugins: {
      legend: {
        display: false, // 隐藏图例，我们使用自定义图例
      },
      tooltip: {
        enabled: false, // 完全禁用文字提示
      },
    },
  } as any; // 使用类型断言解决类型不匹配问题

  return (
    <div className="w-full max-w-full mx-auto py-16 md:py-20 px-4 md:px-6 lg:px-10 xl:px-16 text-white">
      <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center text-[#ffaac3] mb-8 md:mb-12 lg:mb-16">
        {t('tokenomics.title')}
      </h2>
      
      {/* 代币经济学内容 */}
      <div className="flex flex-col lg:flex-row items-stretch justify-between gap-10 md:gap-12 lg:gap-8 mb-10 lg:mb-16 w-full max-w-[1920px] mx-auto">
        {/* 左边代币总量 */}
        <div className="w-full lg:w-1/2 bg-[#1f2228] p-6 md:p-8 rounded-xl shadow-xl flex flex-col">
          <h3 className="text-xl md:text-2xl font-bold text-[#ffaac3] mb-6 text-center">{t('tokenomics.total_supply')}</h3>
          <div className="flex items-center justify-center flex-grow min-h-[250px] md:min-h-[300px]">
            <span className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white hover:text-[#ffaac3] transition-colors duration-300 px-6 py-4 rounded-xl bg-[#2a2e35]/50 shadow-inner">
              {new Intl.NumberFormat().format(2621511258)}
            </span>
          </div>
          <div className="mt-6 text-center bg-[#2a2e35] py-3 px-4 rounded-lg mx-auto max-w-xs">
            <p className="text-base md:text-lg font-semibold text-[#ffaac3]">1 LXP = 1 Tutu</p>
          </div>
        </div>
        
        {/* 右边代币经济学饼图 */}
        <div className="w-full lg:w-1/2 bg-[#1f2228] p-6 md:p-8 rounded-xl shadow-xl relative flex flex-col">
          <h3 className="text-xl md:text-2xl font-bold text-[#ffaac3] mb-6 text-center">{t('tokenomics.description.title')}</h3>
          
          {/* 百分比说明 - 清爆版本 */}
          <div className="flex justify-center mb-7 relative">
            <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-16 w-full max-w-lg">
              {tokenomicsData.map((item, index) => (
                <div 
                  key={index} 
                  className="flex items-center px-6 py-2.5 bg-[#2a2e35] hover:bg-[#323740] rounded-full transition-colors duration-300 shadow-md border border-transparent hover:border-[#ffaac3]/10 w-full md:w-auto justify-center"
                >
                  <div 
                    className="w-4 h-4 rounded-full mr-3" 
                    style={{ backgroundColor: item.color }}
                  ></div>
                  <span className="text-white text-sm md:text-base font-medium whitespace-nowrap">
                    {t(`tokenomics.${item.label.toLowerCase()}`)}: <span className="text-[#ffaac3] font-bold">{item.value}%</span>
                  </span>
                </div>
              ))}
            </div>
          </div>
          
          <div className="relative flex-grow flex items-center justify-center min-h-[260px] md:min-h-[300px] pt-4 pb-6 mt-2">
            
            {/* 饼图容器 */}
            <div className="w-[260px] h-[260px] md:w-[300px] md:h-[300px] mx-auto relative z-10">
              <Pie ref={chartRef} data={chartData} options={options} />
            </div>
            
            {/* 覆盖90%饼图的Logo */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[234px] h-[234px] md:w-[270px] md:h-[270px] z-10">
              {/* 光晕效果 */}
              <div className="absolute w-[105%] h-[105%] rounded-full bg-[#ffaac3]/5 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 blur-md"></div>
              
              <div 
                className="w-full h-full rounded-full bg-[#101418]/85 flex items-center justify-center overflow-hidden shadow-xl backdrop-blur-sm border-2 border-[#ffaac3]/20 transition-all duration-500 hover:bg-[#101418]/95 hover:border-[#ffaac3]/40 hover:scale-[1.02] group"
              >
                {/* 添加内圈效果 */}
                <div className="absolute w-[96%] h-[96%] rounded-full border border-[#ffaac3]/10"></div>
                
                <div className="relative w-[80%] h-[80%] flex items-center justify-center transition-transform duration-500 group-hover:scale-110">
                  <Image 
                    src="/images/logo.png" 
                    alt="Tutu Logo" 
                    fill
                    sizes="(max-width: 768px) 180px, 250px"
                    priority
                    className="object-contain drop-shadow-2xl p-2 transition-all duration-500 group-hover:brightness-110"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* 代币经济学详情部分 */}
      <div className="bg-[#1f2228] p-6 md:p-8 rounded-xl shadow-xl w-full max-w-[1920px] mx-auto">
        {/* 合约地址信息 */}
        <div className="mb-8 bg-[#2a2e35]/50 p-5 md:p-6 rounded-xl border border-[#ffaac3]/10">
          <h3 className="text-xl md:text-2xl font-bold text-[#ffaac3] mb-6 text-center">
            {t('tokenomics.contract_info')}
          </h3>
          <div className="flex flex-col items-center text-center">
            <div className="flex items-center justify-center flex-wrap gap-2 mb-4">
              <a 
                href={`${process.env.NEXT_PUBLIC_BLOCK_EXPLORER || 'https://explorer.linea.build'}/address/${TUTU_CONTRACT_ADDRESS}`} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-[#ffaac3] text-xl md:text-2xl lg:text-3xl font-medium break-all hover:underline transition-colors"
              >
                {TUTU_CONTRACT_ADDRESS}
              </a>
              <button
                onClick={() => {
                  navigator.clipboard.writeText(TUTU_CONTRACT_ADDRESS || '');
                  // 可以添加复制成功提示
                }}
                className="text-[#ffaac3] hover:text-white p-1.5 rounded-full transition-colors text-xl"
                title={t('wallet.copy')}
              >
                <CopyOutlined />
              </button>
            </div>
            <div className="flex items-center justify-center gap-4">
              <a 
                href={`${process.env.NEXT_PUBLIC_BLOCK_EXPLORER || 'https://explorer.linea.build'}/address/${TUTU_CONTRACT_ADDRESS}`} 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-[#2a2e35] hover:bg-[#323740] text-white text-xs px-3 py-1.5 rounded-full transition-colors"
              >
                {t('wallet.explorer')}
              </a>
            </div>
          </div>
        </div>
        
        {/* 代币基本信息 */}
        <div className="mb-8 bg-[#2a2e35]/50 p-5 md:p-6 rounded-xl border border-[#ffaac3]/10">
          <h3 className="text-xl md:text-2xl font-bold text-[#ffaac3] mb-6 text-center">
            {t('tokenomics.basic_info')}
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 gap-y-6 text-center">
            <div className="flex flex-col items-center">
              <span className="text-gray-400 text-xs sm:text-sm">{t('tokenomics.token_name')}</span>
              <span className="text-white text-sm sm:text-base font-medium">Tutu</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-gray-400 text-xs sm:text-sm">{t('tokenomics.chain')}</span>
              <span className="text-white text-sm sm:text-base font-medium">Linea</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-gray-400 text-xs sm:text-sm">{t('tokenomics.total_supply')}</span>
              <span className="text-white text-sm sm:text-base font-medium">2,621,511,258</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-gray-400 text-xs sm:text-sm">{t('tokenomics.minting_condition')}</span>
              <span className="text-white text-sm sm:text-base font-medium">1 LXP = 1 Tutu</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-gray-400 text-xs sm:text-sm">{t('tokenomics.snapshot_time')}</span>
              <span className="text-white text-sm sm:text-base font-medium">Nov-20-2024 15:11 (UTC)</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-gray-400 text-xs sm:text-sm">{t('tokenomics.eligible_addresses')}</span>
              <span className="text-white text-sm sm:text-base font-medium">1,297,203</span>
            </div>
          </div>
        </div>
        
        {/* 分发机制 */}
        <div className="mb-8 bg-[#2a2e35]/50 p-5 md:p-6 rounded-xl border border-[#ffaac3]/10">
          <h3 className="text-xl md:text-2xl font-bold text-[#ffaac3] mb-6 text-center">
            {t('tokenomics.distribution_mechanism')}
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 gap-y-6 mb-4 text-center">
            <div className="flex flex-col items-center">
              <span className="text-gray-400 text-xs sm:text-sm">{t('tokenomics.distribution_target')}</span>
              <span className="text-white text-sm sm:text-base font-medium">{t('tokenomics.lxp_holders')}</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-gray-400 text-xs sm:text-sm">{t('tokenomics.distribution_method')}</span>
              <span className="text-white text-sm sm:text-base font-medium">{t('tokenomics.fair_mint')}</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-gray-400 text-xs sm:text-sm">{t('tokenomics.minting_period')}</span>
              <span className="text-white text-sm sm:text-base font-medium">{t('tokenomics.no_time_limit')}</span>
            </div>
          </div>
        </div>
        
        {/* 零预售部分 */}
        <div className="mb-4">
          <h4 className="text-lg md:text-xl font-bold text-[#ffaac3] mb-5 text-center">{t('tokenomics.zero_presale')}</h4>
          <p className="text-sm md:text-base text-white mb-8 text-left max-w-5xl mx-auto lg:px-4">
            {t('tokenomics.description.content')}
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
          <div className="bg-[#2a2e35] p-5 rounded-lg border-l-4 border-red-500 hover:bg-[#323740] transition-colors duration-300">
            <p className="text-white text-sm md:text-base font-medium">
              <span className="text-red-500 font-bold mr-2">🛑</span> {t('tokenomics.no_presale')}
            </p>
            <p className="text-gray-400 text-xs md:text-sm mt-2 pl-7">{t('tokenomics.no_presale_desc')}</p>
          </div>
          <div className="bg-[#2a2e35] p-5 rounded-lg border-l-4 border-red-500 hover:bg-[#323740] transition-colors duration-300">
            <p className="text-white text-sm md:text-base font-medium">
              <span className="text-red-500 font-bold mr-2">🛑</span> {t('tokenomics.no_vc')}
            </p>
            <p className="text-gray-400 text-xs md:text-sm mt-2 pl-7">{t('tokenomics.no_vc_desc')}</p>
          </div>
          <div className="bg-[#2a2e35] p-5 rounded-lg border-l-4 border-red-500 hover:bg-[#323740] transition-colors duration-300">
            <p className="text-white text-sm md:text-base font-medium">
              <span className="text-red-500 font-bold mr-2">🛑</span> {t('tokenomics.no_founders')}
            </p>
            <p className="text-gray-400 text-xs md:text-sm mt-2 pl-7">{t('tokenomics.no_founders_desc')}</p>
          </div>
          <div className="bg-[#2a2e35] p-5 rounded-lg border-l-4 border-red-500 hover:bg-[#323740] transition-colors duration-300">
            <p className="text-white text-sm md:text-base font-medium">
              <span className="text-red-500 font-bold mr-2">🛑</span> {t('tokenomics.no_inflation')}
            </p>
            <p className="text-gray-400 text-xs md:text-sm mt-2 pl-7">{t('tokenomics.no_inflation_desc')}</p>
          </div>
        </div>
        
      </div>
    </div>
  );
} 