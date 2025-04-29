import './globals.css';
import type { Metadata } from 'next';
import { LanguageProvider } from '@/context/LanguageContext';
import AntDesignRegistry from '@/components/AntDesignRegistry';
import { WalletProvider } from '@/context/WalletContext';

// 我们使用普通对象作为metadata，防止Next.js自动处理时出现问题
const metadataObj = {
  title: 'Tutu Token | 官方网站',
  description: 'Tutu代币官方网站 - 展示项目信息和空投领取',
};

export const metadata: Metadata = metadataObj;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // 直接使用时间戳强制浏览器刷新favicon
  const timestamp = Date.now();
  
  return (
    <html lang="zh-CN">
      <head>
        {/* 清除任何可能的自动生成的favicon链接 */}
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>{metadataObj.title}</title>
        <meta name="description" content={metadataObj.description} />
        
        {/* 使用关键的favicon标签，应用不同格式以提高兼容性 */}
        <link rel="icon" href={`/images/logo.png?v=${timestamp}`} />
        <link rel="shortcut icon" href={`/images/logo.png?v=${timestamp}`} />
        <link rel="apple-touch-icon" href={`/images/logo.png?v=${timestamp}`} />
        
        {/* 使用脚本强制替换favicon */}
        <script dangerouslySetInnerHTML={{
          __html: `
            // 创建一个函数来更新网页图标
            function updateFavicon() {
              // 移除所有现有的favicon链接
              const existingLinks = document.querySelectorAll('link[rel*="icon"]');
              existingLinks.forEach(link => link.parentNode.removeChild(link));
              
              // 添加新的favicon链接
              const link = document.createElement('link');
              link.rel = 'icon';
              link.href = '/images/logo.png?v=${timestamp}';
              document.head.appendChild(link);
              
              // 添加苹果设备的图标
              const appleLink = document.createElement('link');
              appleLink.rel = 'apple-touch-icon';
              appleLink.href = '/images/logo.png?v=${timestamp}';
              document.head.appendChild(appleLink);
            }
            
            // 在页面加载完成后执行
            window.addEventListener('load', updateFavicon);
            // 也立即执行一次
            updateFavicon();
          `
        }} />
      </head>
      <body className="bg-[#101418] min-h-screen">
        <WalletProvider>
          <AntDesignRegistry>
            <LanguageProvider>
              {children}
            </LanguageProvider>
          </AntDesignRegistry>
        </WalletProvider>
      </body>
    </html>
  );
}
