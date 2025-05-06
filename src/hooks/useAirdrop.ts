import { useState, useEffect } from 'react';
import { useWallet } from '@/context/WalletContext';
import { TUTU_CONTRACT_ADDRESS, TUTU_CONTRACT_ABI } from '@/constants/contracts';
import { Contract } from 'web3-eth-contract';
import Web3 from 'web3';

export interface AirdropInfo {
  isEligible: boolean;
  amount: string;
  claimedAmount: string;
  status: 'not_eligible' | 'can_claim' | 'claimed';
}

export function useAirdrop() {
  const { account } = useWallet();
  const [airdrop, setAirdrop] = useState<AirdropInfo>({
    isEligible: false,
    amount: '0',
    claimedAmount: '0',
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
          status: 'not_eligible'
        });
        return;
      }

      setIsLoading(true);
      setError(null);

      try {
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
          status
        });
      } catch (err: any) {
        console.error('查询空投资格时出错:', err);
        setError(err.message || '查询空投资格时出错');
        setAirdrop({
          isEligible: false,
          amount: '0',
          claimedAmount: '0',
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