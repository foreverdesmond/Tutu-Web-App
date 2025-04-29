import { ImageResponse } from 'next/og';

// 路由段配置
export const runtime = 'edge';
export const size = { width: 180, height: 180 };
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
            background: 'transparent',
          }}
        >
          <img src={logoUrl} width={180} height={180} alt="Apple Icon" />
        </div>
      ),
      {
        width: 180,
        height: 180,
      }
    );
  } catch (e) {
    console.error('Error generating apple icon:', e);
    return new Response('Failed to generate apple icon', { status: 500 });
  }
} 