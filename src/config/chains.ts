/**
 * 区块链网络配置文件
 * 存储项目支持的各种区块链网络的配置信息
 */

import { Mainnet } from "@ant-design/web3-wagmi";
import { ChainIds } from "@ant-design/web3-common";

// Linea网络配置 (ETH L2, ChainID: 59144)
export const Linea = {
  id: 59144,
  name: 'Linea',
  network: 'linea',
  icon: 'https://assets.coingecko.com/asset_platforms/images/144/small/Linea-Logo.jpg',
  rpcUrls: {
    default: {
      http: ['https://rpc.linea.build']
    },
    public: {
      http: ['https://rpc.linea.build']
    }
  },
  blockExplorers: {
    default: {
      name: 'LineaScan',
      url: 'https://lineascan.build'
    }
  },
  nativeCurrency: {
    name: 'Ether',
    symbol: 'ETH',
    decimals: 18
  }
};

// Bearchain网络配置 - 暂时保留为占位符，后续可以更新真实信息
export const Bearchain = {
  id: 80085, // 假设的ChainID
  name: 'Bearchain',
  network: 'bearchain',
  icon: 'https://placeholder-for-bearchain-icon.com/icon.png',
  rpcUrls: {
    default: {
      http: ['https://rpc.bearchain.example.com']
    },
    public: {
      http: ['https://public-rpc.bearchain.example.com']
    }
  },
  blockExplorers: {
    default: {
      name: 'BearScan',
      url: 'https://scan.bearchain.example.com'
    }
  },
  nativeCurrency: {
    name: 'Bear Token',
    symbol: 'BEAR',
    decimals: 18
  }
};

// 辅助函数：添加网络到钱包
export const addNetworkToWallet = async (chainId: number) => {
  // 根据chainId选择适当的网络配置
  let networkParams;
  
  switch (chainId) {
    case 59144: // Linea
      networkParams = {
        chainId: `0x${Number(59144).toString(16)}`,
        chainName: 'Linea Mainnet',
        nativeCurrency: {
          name: 'Ether',
          symbol: 'ETH',
          decimals: 18,
        },
        rpcUrls: ['https://rpc.linea.build'],
        blockExplorerUrls: ['https://lineascan.build'],
      };
      break;
    case 80085: // Bearchain (假设的ChainID)
      networkParams = {
        chainId: `0x${Number(80085).toString(16)}`,
        chainName: 'Bearchain Mainnet',
        nativeCurrency: {
          name: 'Bear Token',
          symbol: 'BEAR',
          decimals: 18,
        },
        rpcUrls: ['https://rpc.bearchain.example.com'],
        blockExplorerUrls: ['https://scan.bearchain.example.com'],
      };
      break;
    default:
      throw new Error(`不支持的链ID: ${chainId}`);
  }
  
  // 添加网络到钱包
  if (window.ethereum) {
    try {
      await window.ethereum.request({
        method: 'wallet_addEthereumChain',
        params: [networkParams],
      });
      return true;
    } catch (error) {
      console.error(`添加网络失败 (ChainID: ${chainId}):`, error);
      return false;
    }
  } else {
    console.error('未检测到以太坊提供者');
    return false;
  }
};

// 默认支持的网络列表
export const supportedChains = [Linea];

// 根据chainId获取网络配置
export const getChainById = (chainId: number | ChainIds) => {
  switch (chainId) {
    case 59144:
      return Linea;
    case 80085:
      return Bearchain;
    default:
      return Mainnet;
  }
}; 