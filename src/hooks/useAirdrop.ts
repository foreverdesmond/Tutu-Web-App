import { useState, useEffect } from 'react';
import { useWallet } from '@/context/WalletContext';
import { TUTU_CONTRACT_ADDRESS, TUTU_CONTRACT_ABI } from '@/constants/contracts';
import Web3 from 'web3';

export interface AirdropInfo {
  isEligible: boolean;
  amount: string;
  claimedAmount: string;
  amountInteger: string;
  claimedAmountInteger: string;
  status: 'not_eligible' | 'can_claim' | 'claimed';
}

// 辅助函数：从合约返回的Wei单位数值中提取实际数量
const extractTokenAmount = (amountInWei: string): string => {
  try {
    // 将大数转为字符串处理
    const amountStr = amountInWei.toString();
    
    // Tutu代币有18位小数，移除这些小数位
    if (amountStr.length > 18) {
      // 从右边移除18个0（如果有的话）
      return amountStr.slice(0, -18);
    }
    
    // 如果数值小于10^18，则返回0
    return '0';
  } catch (error) {
    console.error('解析代币数量出错:', error);
    return '0';
  }
};

export function useAirdrop() {
  const { account } = useWallet();
  const [airdrop, setAirdrop] = useState<AirdropInfo>({
    isEligible: false,
    amount: '0',
    claimedAmount: '0',
    amountInteger: '0',
    claimedAmountInteger: '0',
    status: 'not_eligible'
  });
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const checkEligibility = async () => {
      if (!account?.address) {
        setAirdrop({
          isEligible: false,
          amount: '0',
          claimedAmount: '0',
          amountInteger: '0',
          claimedAmountInteger: '0',
          status: 'not_eligible'
        });
        return;
      }

      setIsLoading(true);
      setError(null);

      try {
        // 检查合约地址是否有效
        console.log('使用的合约地址:', TUTU_CONTRACT_ADDRESS);
        
        if (!TUTU_CONTRACT_ADDRESS || TUTU_CONTRACT_ADDRESS === '0x0000000000000000000000000000000000000000') {
          console.error('合约地址未配置或无效:', TUTU_CONTRACT_ADDRESS);
          throw new Error('合约地址未配置，请检查环境变量');
        }

        // 初始化 Web3
        const web3 = new Web3(window.ethereum);
        
        // 创建合约实例
        const contract = new web3.eth.Contract(
          TUTU_CONTRACT_ABI,
          TUTU_CONTRACT_ADDRESS
        );

        // 并行调用两个合约方法
        const [claimableAmount, claimedAmount] = await Promise.all([
          contract.methods.getClaimableAmount(account.address).call(),
          contract.methods.claimed(account.address).call()
        ]);

        // 转换为 BigInt 进行比较
        const claimableBigInt = BigInt(claimableAmount);
        const claimedBigInt = BigInt(claimedAmount);

        // 处理数据，提取整数部分
        const amountInteger = extractTokenAmount(claimableAmount.toString());
        const claimedAmountInteger = extractTokenAmount(claimedAmount.toString());

        // 确定空投状态
        let status: AirdropInfo['status'];
        let isEligible = false;

        if (claimableBigInt === BigInt(0) && claimedBigInt === BigInt(0)) {
          // 两个值都为0，表示没有资格
          status = 'not_eligible';
          isEligible = false;
        } else if (claimableBigInt === BigInt(0) && claimedBigInt > BigInt(0)) {
          // 可领取为0但已领取大于0，表示已经领取完
          status = 'claimed';
          isEligible = true;
        } else if (claimableBigInt > BigInt(0)) {
          // 还有可领取数量
          status = 'can_claim';
          isEligible = true;
        } else {
          // 其他情况视为无资格
          status = 'not_eligible';
          isEligible = false;
        }

        // 更新状态
        setAirdrop({
          isEligible,
          amount: claimableAmount.toString(),
          claimedAmount: claimedAmount.toString(),
          amountInteger,
          claimedAmountInteger,
          status
        });
      } catch (err: any) {
        console.error('查询空投资格时出错:', err);
        setError(err.message || '查询空投资格时出错');
        setAirdrop({
          isEligible: false,
          amount: '0',
          claimedAmount: '0',
          amountInteger: '0',
          claimedAmountInteger: '0',
          status: 'not_eligible'
        });
      } finally {
        setIsLoading(false);
      }
    };

    // 如果有钱包地址，则检查资格
    if (account?.address) {
      checkEligibility();
    }
  }, [account?.address]); // 当钱包地址变化时重新检查

  return {
    airdrop,
    isLoading,
    error
  };
} 