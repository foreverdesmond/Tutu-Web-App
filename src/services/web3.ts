import { ethers } from 'ethers';
import { CONTRACT_ADDRESS, TUTU_ABI } from '@/constants/contracts';

export const getProvider = (): ethers.BrowserProvider | null => {
  if (typeof window === 'undefined' || !window.ethereum) return null;
  return new ethers.BrowserProvider(window.ethereum);
};

export const getContract = async (): Promise<ethers.Contract | null> => {
  const provider = getProvider();
  if (!provider) return null;
  
  try {
    if (!CONTRACT_ADDRESS || CONTRACT_ADDRESS === '0x0000000000000000000000000000000000000000') {
      console.error('合约地址无效:', CONTRACT_ADDRESS);
      return null;
    }
    
    const signer = await provider.getSigner();
    return new ethers.Contract(CONTRACT_ADDRESS, TUTU_ABI, signer);
  } catch (error) {
    console.error('Failed to get contract:', error);
    return null;
  }
}; 