import { ImageResponse } from 'next/og';

// 路由段配置
export const runtime = 'edge';
export const size = { width: 32, height: 32 };
export const contentType = 'image/png';

export default async function Icon() {
  try {
    // 使用公共URL引用logo
    const logoUrl = '/images/logo.png';

    return new ImageResponse(
      (
        <div
          style={{
            width: '100%',
            height: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: 24,
            background: 'transparent',
          }}
        >
          <img src={logoUrl} width={32} height={32} alt="Logo" />
        </div>
      ),
      {
        width: 32,
        height: 32,
      }
    );
  } catch (e) {
    console.error('Error generating icon:', e);
    return new Response('Failed to generate icon', { status: 500 });
  }
} 