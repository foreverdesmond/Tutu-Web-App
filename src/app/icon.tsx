import { ImageResponse } from 'next/og';

// 路由段配置
export const size = { width: 32, height: 32 };
export const contentType = 'image/png';
export const dynamic = 'force-static';

// 使用静态图片代替动态生成
export default function Icon() {
  return new Response(null, {
    status: 307,
    headers: {
      'Location': '/favicon.ico',
      'Content-Type': 'image/x-icon',
    },
  });
} 