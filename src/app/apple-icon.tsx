import { ImageResponse } from 'next/og';

// 路由段配置
export const size = { width: 180, height: 180 };
export const contentType = 'image/png';
export const dynamic = 'force-static';

// 使用静态图片代替动态生成
export default function Icon() {
  return new Response(null, {
    status: 307,
    headers: {
      'Location': '/images/logo.png',
      'Content-Type': 'image/png',
    },
  });
} 