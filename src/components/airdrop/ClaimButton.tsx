'use client';

import React, { useState } from 'react';
import { useAirdrop } from '@/hooks/useAirdrop';
import { useTranslation } from '@/hooks/useTranslation';
import Web3 from 'web3';
import { TUTU_CONTRACT_ADDRESS, TUTU_CONTRACT_ABI } from '@/constants/contracts';
import { useWallet } from '@/context/WalletContext';

export default function ClaimButton() {
  const { airdrop } = useAirdrop();
  const { t } = useTranslation();
  const { account } = useWallet();
  const [isClaiming, setIsClaiming] = useState(false);
  const [txHash, setTxHash] = useState<string | null>(null);
  const [claimError, setClaimError] = useState<string | null>(null);

  const blockExplorer = process.env.NEXT_PUBLIC_BLOCK_EXPLORER || 'https://explorer.linea.build';

  // 如果不符合资格或没有可领取的代币，不显示按钮
  if (!airdrop.isEligible || airdrop.status !== 'can_claim') {
    return null;
  }

  // 实际领取操作
  const handleClaim = async () => {
    if (!account?.address) {
      setClaimError(t('common.wallet_not_connected'));
      return;
    }

    setIsClaiming(true);
    setClaimError(null);

    try {
      // 初始化 Web3
      const web3 = new Web3(window.ethereum);
      
      // 创建合约实例
      const contract = new web3.eth.Contract(
        TUTU_CONTRACT_ABI,
        TUTU_CONTRACT_ADDRESS
      );

      // 设置ETH手续费
      const feeAmount = web3.utils.toWei('0.0001', 'ether');

      console.log('调用合约claim方法:', {
        amount: airdrop.amountInteger,
        feeAmount: feeAmount
      });

      // 调用合约的claim方法，传入正确的整数值
      const tx = await contract.methods.claim(airdrop.amountInteger).send({
        from: account.address,
        value: feeAmount // 发送0.0001 ETH作为手续费
      });

      // 保存交易哈希
      if (tx.transactionHash) {
        setTxHash(tx.transactionHash);
        console.log('领取成功，交易哈希:', tx.transactionHash);
      }
    } catch (err: any) {
      console.error('领取失败:', err);
      setClaimError(err.message || t('common.unknown_error'));
    } finally {
      setIsClaiming(false);
    }
  };

  // 已经完成领取
  if (txHash) {
    return (
      <div className="w-full max-w-full mx-auto px-4 md:px-6 lg:px-10 xl:px-16">
        <div className="max-w-3xl mx-auto text-center py-3 md:py-4">
          <div>
            <button
              disabled
              className="w-[180px] h-[45px] md:w-[200px] md:h-[50px] bg-[#c0c0c0] text-white rounded-md text-base md:text-xl font-medium"
            >
              {t('claim.complete')}
            </button>
            <div className="mt-2 md:mt-4">
              <a
                href={`${blockExplorer}/tx/${txHash}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm md:text-base text-[#ffaac3] hover:underline"
              >
                {t('airdrop.view_transaction')}
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // 可领取状态
  return (
    <div className="w-full max-w-full mx-auto px-4 md:px-6 lg:px-10 xl:px-16">
      <div className="max-w-3xl mx-auto text-center py-3 md:py-4">
        {claimError && (
          <div className="text-red-500 text-sm mb-2">{claimError}</div>
        )}
        <button
          onClick={handleClaim}
          disabled={isClaiming}
          className="w-[180px] h-[45px] md:w-[200px] md:h-[50px] bg-[#ffaac3] text-base md:text-xl text-white rounded-md font-medium hover:bg-[#ff8aa9] disabled:bg-[#c0c0c0] transition-colors"
        >
          {isClaiming ? (
            <span className="flex items-center justify-center">
              <svg className="animate-spin -ml-1 mr-2 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              {t('claim.loading')}
            </span>
          ) : (
            t('claim.action')
          )}
        </button>
      </div>
    </div>
  );
} 