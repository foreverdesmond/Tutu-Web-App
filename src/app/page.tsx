import Titlebar from '@/components/common/Titlebar';
import Footer from '@/components/common/Footer';
import Banner from '@/components/home/Banner';
import TokenIntro from '@/components/home/TokenIntro';
import Tokenomics from '@/components/home/Tokenomics';
import ClientOnly from '@/components/ClientOnly';
import '@ant-design/v5-patch-for-react-19';

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col bg-[#101418]">
      <ClientOnly>
        <Titlebar />
        <div className="flex-grow">
          <Banner />
          <TokenIntro />
          <Tokenomics />
        </div>
        <Footer />
      </ClientOnly>
    </main>
  );
}
