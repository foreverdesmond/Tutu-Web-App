import { useState, useEffect } from 'react';

interface AirdropInfo {
  isEligible: boolean;
  amount: string;
  isClaimed: boolean;
  transactionHash?: string;
}

interface UseAirdropResult {
  airdrop: AirdropInfo;
  isLoading: boolean;
  error: string | null;
  claim: () => Promise<void>;
}

export const useAirdrop = (isWalletConnected = false, walletAddress = ''): UseAirdropResult => {
  const [airdrop, setAirdrop] = useState<AirdropInfo>({
    isEligible: false,
    amount: '0',
    isClaimed: false,
  });
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // 查询空投资格
  useEffect(() => {
    const checkAirdropEligibility = async () => {
      // 未连接钱包时不查询
      if (!isWalletConnected) return;

      setIsLoading(true);
      setError(null);

      try {
        // 在真实项目中，这里会调用合约的查询方法
        // 这里用模拟数据代替
        setTimeout(() => {
          // 模拟50%的概率是否有资格领取空投
          const eligible = Math.random() > 0.5;
          
          setAirdrop({
            isEligible: eligible,
            amount: eligible ? '1000' : '0',
            isClaimed: false
          });
          
          setIsLoading(false);
        }, 1500);
      } catch (err) {
        setError('查询空投资格失败，请稍后再试'+err);
        setIsLoading(false);
      }
    };

    checkAirdropEligibility();
  }, [isWalletConnected]);

  // 领取空投
  const claim = async (): Promise<void> => {
    if (!isWalletConnected || !airdrop.isEligible || airdrop.isClaimed) {
      return;
    }

    setIsLoading(true);
    setError(null);

    try {
      // 在真实项目中，这里会调用合约的claim方法
      // 这里用模拟数据代替
      setTimeout(() => {
        setAirdrop({
          ...airdrop,
          isClaimed: true,
          transactionHash: '0x' + Math.random().toString(16).substring(2)
        });
        
        setIsLoading(false);
      }, 2000);
    } catch (err) {
      setError('领取空投失败，请稍后再试'+err);
      setIsLoading(false);
    }
  };

  return { airdrop, isLoading, error, claim };
}; 