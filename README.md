# Tutu Web App 🐻

<div align="center">
  <img src="public/images/logo.png" alt="Tutu Logo" width="120" height="120" />
  
  **TUTU Token Official Web Application | TUTU 代币官方 Web 应用**
  
  An ERC20 token interaction platform based on Linea blockchain, providing token information display and airdrop claiming functionality
  
  基于 Linea 区块链的 ERC20 代币交互平台，提供代币信息展示和空投领取功能
  
  🌐 **Live Demo**: [https://tututoken.cc](https://tututoken.cc)
  
  [![MIT License](https://img.shields.io/badge/License-MIT-green.svg)](https://choosealicense.com/licenses/mit/)
  [![Next.js](https://img.shields.io/badge/Next.js-15.3.1-black)](https://nextjs.org/)
  [![React](https://img.shields.io/badge/React-19.0.0-blue)](https://reactjs.org/)
  [![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue)](https://www.typescriptlang.org/)
  [![Ant Design](https://img.shields.io/badge/Ant%20Design-5.24.7-1890ff)](https://ant.design/)
</div>

---

## 📖 Project Overview | 项目简介

Tutu Web App is the official web application for TUTU token, built on the Linea blockchain. The application provides comprehensive token information display, multi-language support, Web3 wallet integration, and airdrop claiming functionality, delivering a smooth Web3 interaction experience for users.

Tutu Web App 是 TUTU 代币的官方 Web 应用，基于 Linea 区块链构建。该应用提供了完整的代币信息展示、多语言支持、Web3 钱包集成和空投领取功能，为用户提供流畅的 Web3 交互体验。

### ✨ Core Features | 核心特性

- 🌍 **Multi-language Support | 多语言支持**
- English, Simplified Chinese, Korean | 支持英文、简体中文、韩文三种语言

- 🔗 **Web3 Wallet Integration | Web3 钱包集成**
- Support for MetaMask and other EVM-compatible wallets | 支持 MetaMask 等多种 EVM 兼容钱包

- 🎯 **Airdrop Functionality | 空投功能**
- Convenient airdrop eligibility check and token claiming | 便捷的空投资格查询和代币领取

- 📊 **Tokenomics | 代币经济学**
- Interactive charts displaying token distribution | 交互式图表展示代币分配情况

- 📱 **Responsive Design | 响应式设计**
- Perfect adaptation for desktop and mobile devices | 完美适配桌面端和移动端

- 🎨 **Modern UI Design | 现代 UI 设计**
- Web3 aesthetic interface based on Ant Design | 基于 Ant Design 的 Web3 美学界面

- ⚡ **High Performance | 高性能**
- Server-side rendering based on Next.js 15 | 基于 Next.js 15 的服务端渲染

## 🛠 Tech Stack | 技术栈

### Frontend Framework | 前端框架

- **Next.js 15.3.1** - React full-stack framework | React 全栈框架
- **React 19.0.0** - User interface library | 用户界面库
- **TypeScript 5.0** - Type-safe JavaScript | 类型安全的 JavaScript

### UI Component Library | UI 组件库

- **Ant Design 5.24.7** - Enterprise-class UI design language | 企业级 UI 设计语言
- **@ant-design/web3** - Web3-specific components | Web3 专用组件
- **Tailwind CSS 4.0** - Atomic CSS framework | 原子化 CSS 框架

### Web3 Integration | Web3 集成

- **Wagmi 2.14.16** - React Hooks for Ethereum
- **Viem 2.27.2** - TypeScript interface for Ethereum | TypeScript 接口 for Ethereum
- **Web3.js 4.16.0** - Ethereum JavaScript API | 以太坊 JavaScript API
- **@tanstack/react-query** - Data fetching and caching | 数据获取和缓存

### Data Visualization | 数据可视化

- **Chart.js 4.4.9** - Chart library | 图表库
- **react-chartjs-2** - React wrapper for Chart.js | Chart.js 的 React 封装

## 🚀 Quick Start | 快速开始

### Prerequisites | 环境要求

- Node.js 18.0 or higher | Node.js 18.0 或更高版本
- npm, yarn, pnpm, or bun package manager | npm、yarn、pnpm 或 bun 包管理器

### Installation | 安装依赖

```bash
# Using npm | 使用 npm
npm install

# Using yarn | 使用 yarn
yarn install

# Using pnpm | 使用 pnpm
pnpm install

# Using bun | 使用 bun
bun install
```

### Environment Configuration | 环境变量配置

Create a `.env.local` file and configure the following environment variables:

创建 `.env.local` 文件并配置以下环境变量：

```env
# TUTU Contract Address | TUTU 合约地址
NEXT_PUBLIC_TUTU_CONTRACT_ADDRESS=your_contract_address_here

# Other Contract Addresses (if needed) | 其他合约地址（如需要）
NEXT_PUBLIC_CONTRACT_ADDRESS=your_contract_address_here
```

### Development Server | 启动开发服务器

```bash
# Using npm | 使用 npm
npm run dev

# Using yarn | 使用 yarn
yarn dev

# Using pnpm | 使用 pnpm
pnpm dev

# Using bun | 使用 bun
bun dev
```

Open [http://localhost:3000](http://localhost:3000) to view the application.

打开 [http://localhost:3000](http://localhost:3000) 查看应用。

### Production Build | 构建生产版本

```bash
# Build the application | 构建应用
npm run build

# Start production server | 启动生产服务器
npm run start
```

## 📁 Project Structure | 项目结构

```
tutu-web/
├── src/
│   ├── app/                    # Next.js App Router
│   │   ├── page.tsx           # Home page | 首页
│   │   ├── layout.tsx         # Root layout | 根布局
│   │   ├── airdrop/           # Airdrop page | 空投页面
│   │   ├── en/                # English routes | 英文路由
│   │   ├── ko/                # Korean routes | 韩文路由
│   │   └── zh-CN/             # Chinese routes | 中文路由
│   ├── components/            # React components | React 组件
│   │   ├── common/            # Common components | 通用组件
│   │   ├── home/              # Home page components | 首页组件
│   │   ├── airdrop/           # Airdrop components | 空投组件
│   │   ├── web3/              # Web3 components | Web3 组件
│   │   └── logo/              # Logo components | Logo 组件
│   ├── config/                # Configuration files | 配置文件
│   │   └── chains.ts          # Blockchain network config | 区块链网络配置
│   ├── constants/             # Constants definition | 常量定义
│   │   ├── contracts.ts       # Contract configuration | 合约配置
│   │   ├── routes.ts          # Route constants | 路由常量
│   │   └── theme.ts           # Theme configuration | 主题配置
│   ├── context/               # React Context
│   ├── hooks/                 # Custom Hooks | 自定义 Hooks
│   ├── services/              # Service layer | 服务层
│   ├── types/                 # TypeScript types | TypeScript 类型
│   ├── utils/                 # Utility functions | 工具函数
│   └── themes/                # Theme configuration | 主题配置
├── public/                    # Static assets | 静态资源
├── docs/                      # Project documentation | 项目文档
└── out/                       # Build output | 构建输出
```

## 🌐 Supported Blockchain Networks | 支持的区块链网络

- **Linea Mainnet** (Chain ID: 59144)
  - RPC: https://rpc.linea.build
  - Explorer | 浏览器: https://lineascan.build

## 🎯 Main Features | 主要功能

### 1. Token Information Display | 代币信息展示

- Token basic information and introduction | 代币基本信息和介绍
- Tokenomics data visualization | 代币经济学数据可视化

### 2. Airdrop Functionality | 空投功能

- Airdrop eligibility check | 空投资格查询
- Claimable amount display | 可领取数量显示
- One-click token claiming | 一键领取代币
- Transaction status tracking | 交易状态跟踪

### 3. Web3 Wallet Integration | Web3 钱包集成

- Multi-wallet support (MetaMask, OKX Wallet, etc.) | OKX 钱包 等）
- Wallet address display | 钱包地址显示
- Network switching prompts | 网络切换提示
- Transaction signing handling | 交易签名处理

### 4. Multi-language Support | 多语言支持

- English | 英文
- Simplified Chinese | 简体中文
- Korean | 韩文

## 🔧 Development Guide | 开发指南

### Code Standards | 代码规范

The project uses the following tools to ensure code quality:
项目使用以下工具确保代码质量：

- **ESLint** - Code linting | 代码检查
- **TypeScript** - Type checking | 类型检查
- **Prettier** - Code formatting | 代码格式化

Run code linting | 运行代码检查：

```bash
npm run lint
```

### Component Development | 组件开发

All components are developed using TypeScript and functional components:
所有组件都使用 TypeScript 和函数式组件开发：

```tsx
import React from "react";
import { Button } from "antd";

interface MyComponentProps {
  title: string;
  onClick: () => void;
}

const MyComponent: React.FC<MyComponentProps> = ({ title, onClick }) => {
  return <Button onClick={onClick}>{title}</Button>;
};

export default MyComponent;
```

### Web3 Integration | Web3 集成

Using Wagmi and Viem for Web3 integration:
使用 Wagmi 和 Viem 进行 Web3 集成：

```tsx
import { useAccount, useConnect } from "wagmi";

const WalletComponent = () => {
  const { address, isConnected } = useAccount();
  const { connect, connectors } = useConnect();

  return (
    <div>
      {isConnected ? (
        <p>Connected | 已连接: {address}</p>
      ) : (
        <button onClick={() => connect({ connector: connectors[0] })}>
          Connect Wallet | 连接钱包
        </button>
      )}
    </div>
  );
};
```

## 🌍 Live Application | 在线应用

Visit the live application | 访问在线应用: **[https://tututoken.cc](https://tututoken.cc)**

The application is deployed and accessible at the above URL. You can interact with the TUTU token, check airdrop eligibility, and claim tokens directly through the web interface.
应用已部署并可通过上述网址访问。您可以直接通过 Web 界面与 TUTU 代币交互、查询空投资格并领取代币。

## 📚 Related Resources | 相关资源

- [Next.js Documentation | Next.js 文档](https://nextjs.org/docs) - Learn Next.js features and API | 学习 Next.js 特性和 API
- [Ant Design Documentation | Ant Design 文档](https://web3.ant.design/guide/ant-design-web3) - UI component library documentation | UI 组件库文档
- [Wagmi Documentation | Wagmi 文档](https://wagmi.sh/react/getting-started) - React Hooks for Ethereum
- [Linea Documentation | Linea 文档](https://docs.linea.build/get-started) - Linea blockchain documentation | Linea 区块链文档

## 🤝 Contributing | 贡献指南

We welcome community contributions! Please follow these steps:
我们欢迎社区贡献！请遵循以下步骤：

1. Fork this repository | Fork 本仓库
2. Create a feature branch | 创建特性分支 (`git checkout -b feature/AmazingFeature`)
3. Commit your changes | 提交更改 (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch | 推送到分支 (`git push origin feature/AmazingFeature`)
5. Open a Pull Request | 打开 Pull Request

## 📄 License | 许可证

This project is open source under the MIT License - see the [LICENSE](LICENSE) file for details.

本项目基于 MIT 许可证开源 - 查看 [LICENSE](LICENSE) 文件了解详情。

## 📞 Contact Us | 联系我们

- **Project Maintainer | 项目维护者**: Richmond522
- **GitHub**: [https://github.com/foreverdesmond/Tutu-Web-App](https://github.com/foreverdesmond/Tutu-Web-App)
- **Live Site | 在线网站**: [https://tututoken.cc](https://tututoken.cc)

---

<div align="center">
  Made with ❤️ by the Tutu Team
</div>
