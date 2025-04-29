import { useState, useEffect } from 'react';

// 代币分配数据接口
export interface TokenomicsItem {
  label: string;
  value: number;
  color: string;
}

export const useTokenomics = () => {
  const [tokenomicsData, setTokenomicsData] = useState<TokenomicsItem[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // 这里我们直接使用静态数据，不需要实际访问API
    try {
      // 模拟数据加载
      setTimeout(() => {
        const data: TokenomicsItem[] = [
          {
            label: 'Airdrop',
            value: 100,
            color: '#ffaac3', // 主题粉色
          },
          {
            label: 'Team',
            value: 0,
            color: '#5c5f66', // 灰色，由于比例为0，实际上不会在图表上显示
          },
        ];

        setTokenomicsData(data);
        setIsLoading(false);
      }, 300); // 轻微延迟以模拟数据加载
    } catch (err) {
      setError('加载代币经济学数据失败'+err);
      setIsLoading(false);
    }
  }, []);

  return { tokenomicsData, isLoading, error };
};