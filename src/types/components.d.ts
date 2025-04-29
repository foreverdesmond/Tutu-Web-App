// 组件类型声明
declare module '@/components/common/SocialLinks' {
  import { FC } from 'react';
  const SocialLinks: FC;
  export default SocialLinks;
}

declare module '@/components/common/LanguageSwitch' {
  import { FC } from 'react';
  const LanguageSwitch: FC;
  export default LanguageSwitch;
}

declare module '@/components/common/Titlebar' {
  import { FC } from 'react';
  const Titlebar: FC;
  export default Titlebar;
}

declare module '@/components/web3/ConnectButton' {
  import { FC } from 'react';
  const ConnectButton: FC;
  export default ConnectButton;
}

declare module '@/components/common/Footer' {
  import { FC } from 'react';
  const Footer: FC;
  export default Footer;
}

declare module '@/components/home/Banner' {
  import { FC } from 'react';
  const Banner: FC;
  export default Banner;
}

declare module '@/components/home/TokenIntro' {
  import { FC } from 'react';
  const TokenIntro: FC;
  export default TokenIntro;
}

declare module '@/components/home/Tokenomics' {
  import { FC } from 'react';
  const Tokenomics: FC;
  export default Tokenomics;
}

declare module '@/components/airdrop/AirdropInfo' {
  import { FC } from 'react';
  const AirdropInfo: FC;
  export default AirdropInfo;
}

declare module '@/components/airdrop/EligibilityDisplay' {
  import { FC } from 'react';
  const EligibilityDisplay: FC;
  export default EligibilityDisplay;
}

declare module '@/components/airdrop/ClaimButton' {
  import { FC } from 'react';
  const ClaimButton: FC;
  export default ClaimButton;
}

declare module '@/components/ClientOnly' {
  import { FC } from 'react';
  interface ClientOnlyProps {
    children: React.ReactNode;
  }
  const ClientOnly: FC<ClientOnlyProps>;
  export default ClientOnly;
}

// 相对路径声明
declare module '../web3/ConnectButton' {
  import { FC } from 'react';
  const ConnectButton: FC;
  export default ConnectButton;
}

declare module './SocialLinks' {
  import { FC } from 'react';
  const SocialLinks: FC;
  export default SocialLinks;
}

declare module './LanguageSwitch' {
  import { FC } from 'react';
  const LanguageSwitch: FC;
  export default LanguageSwitch;
}

declare module 'react-icons/fa' {
  import { FC, SVGProps } from 'react';
  export interface IconBaseProps extends SVGProps<SVGElement> {
    size?: string | number;
    color?: string;
    className?: string;
  }
  
  export const FaTwitter: FC<IconBaseProps>;
  export const FaTelegram: FC<IconBaseProps>;
  export const FaDiscord: FC<IconBaseProps>;
  export const FaMedium: FC<IconBaseProps>;
} 