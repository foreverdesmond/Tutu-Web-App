export interface WalletInfo {
  address: string;
  ensName?: string;
  isConnected: boolean;
}

export interface WalletContextType {
  wallet: WalletInfo;
  connect: () => Promise<void>;
  disconnect: () => void;
  copyAddress: () => void;
  isLoading: boolean;
  error?: string;
} 