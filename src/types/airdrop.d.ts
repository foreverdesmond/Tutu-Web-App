export interface AirdropInfo {
  amount: string;
  isEligible: boolean;
  isClaimed: boolean;
  transactionHash?: string;
}

export interface AirdropContextType {
  airdrop: AirdropInfo;
  checkEligibility: () => Promise<void>;
  claim: () => Promise<void>;
  isLoading: boolean;
  error?: string;
} 