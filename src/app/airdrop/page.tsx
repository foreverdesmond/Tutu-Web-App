"use client";

import Titlebar from '@/components/common/Titlebar';
import Footer from '@/components/common/Footer';
import AirdropInfo from '@/components/airdrop/AirdropInfo';
import EligibilityDisplay from '@/components/airdrop/EligibilityDisplay';
import ClaimButton from '@/components/airdrop/ClaimButton';
import ClientOnly from '@/components/ClientOnly';
import AddressDisplay from '@/components/web3/AddressDisplay';  
import { useWallet } from '@/context/WalletContext';

export default function Airdrop() {
  const { refreshWalletState, refreshKey } = useWallet();

  const handleWalletStateChange = () => {
    refreshWalletState();
  };

  return (
    <main className="min-h-screen flex flex-col bg-[#101418]">
      <ClientOnly>
        <Titlebar />
        <div className="flex-grow">
          <div className="mt-8 md:mt-12">
            <EligibilityDisplay />
            <div className="w-full max-w-full mx-auto px-4 md:px-6 lg:px-10 xl:px-16">
              <div className="max-w-3xl mx-auto text-center">
                <AddressDisplay 
                  onDisconnect={handleWalletStateChange}
                  onConnect={handleWalletStateChange}
                  name="airdropPage"
                  className="mt-6"
                />
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </ClientOnly>
    </main>
  );
} 