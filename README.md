# Tutu Web App 🐻

**TUTU Token Official Web Application | TUTU 代币官方 Web 应用**

<p align="center">
  <a href="#简体中文">简体中文</a> · <a href="#english">English</a>
</p>

<div align="center">
  <img src="public/images/logo.png" alt="Tutu Logo" width="120" height="120" />
  <br/>
  🌐 **Live Demo | 在线演示**: [https://tututoken.cc](https://tututoken.cc)
  <br/>
  [![X (Twitter)](https://img.shields.io/badge/X-@Richyisaflower-black?logo=x)](https://x.com/Richyisaflower)
</div>

---

## 简体中文

### 项目简介

Tutu Web App 是 TUTU 代币的官方 Web 应用，基于 Linea 区块链构建。该应用提供了完整的代币信息展示、多语言支持、Web3 钱包集成和空投领取功能，为用户提供流畅的 Web3 交互体验。

### 核心特性

- 🌍 **多语言支持** — 支持英文、简体中文、韩文三种语言
- 🔗 **Web3 钱包集成** — 支持 MetaMask 等多种 EVM 兼容钱包
- 🎯 **空投功能** — 便捷的空投资格查询和代币领取
- 📊 **代币经济学** — 交互式图表展示代币分配情况
- 📱 **响应式设计** — 完美适配桌面端和移动端
- 🎨 **现代 UI 设计** — 基于 Ant Design 的 Web3 美学界面
- ⚡ **高性能** — 基于 Next.js 15 的服务端渲染

### 技术栈

**前端框架**：Next.js 15.3.1（React 全栈框架）、React 19.0.0（用户界面库）、TypeScript 5.0（类型安全的 JavaScript）

**UI 组件库**：Ant Design 5.24.7（企业级 UI 设计语言）、@ant-design/web3（Web3 专用组件）、Tailwind CSS 4.0（原子化 CSS 框架）

**Web3 集成**：Wagmi 2.14.16（React Hooks for Ethereum）、Viem 2.27.2（TypeScript 接口）、Web3.js 4.16.0（以太坊 JavaScript API）、@tanstack/react-query（数据获取与缓存）

**数据可视化**：Chart.js 4.4.9（图表库）、react-chartjs-2（Chart.js 的 React 封装）

### 快速开始

**环境要求**：Node.js 18.0 或更高版本；npm、yarn、pnpm 或 bun 包管理器

**安装依赖：**
```bash
npm install   # 或 yarn install / pnpm install / bun install
```

**环境变量配置**（创建 `.env.local`）：
```env
NEXT_PUBLIC_TUTU_CONTRACT_ADDRESS=your_contract_address_here
NEXT_PUBLIC_CONTRACT_ADDRESS=your_contract_address_here
```

**启动开发服务器：**
```bash
npm run dev   # 打开 http://localhost:3000
```

**构建生产版本：**
```bash
npm run build
npm run start
```

### 主要功能

**1. 代币信息展示** — 基本信息与介绍、代币经济学数据可视化

**2. 空投功能** — 空投资格查询、可领取数量显示、一键领取代币、交易状态跟踪

**3. Web3 钱包集成** — 多钱包支持（MetaMask、OKX Wallet 等）、钱包地址显示、网络切换提示、交易签名处理

**4. 多语言支持** — 英文、简体中文、韩文

### 支持的区块链网络

- **Linea Mainnet**（Chain ID: 59144）
  - RPC: https://rpc.linea.build
  - 浏览器: https://lineascan.build

### 许可证

MIT 许可证。查看 [LICENSE](LICENSE) 文件了解详情。

### 联系我们

- **项目维护者**：Richmond522
- **X**：[@Richyisaflower](https://x.com/Richyisaflower)
- **在线网站**：[https://tututoken.cc](https://tututoken.cc)

---

## English

### Project Overview

Tutu Web App is the official web application for TUTU token, built on the Linea blockchain. The application provides comprehensive token information display, multi-language support, Web3 wallet integration, and airdrop claiming functionality, delivering a smooth Web3 interaction experience for users.

### Core Features

- 🌍 **Multi-language Support** — English, Simplified Chinese, Korean
- 🔗 **Web3 Wallet Integration** — MetaMask and other EVM-compatible wallets
- 🎯 **Airdrop Functionality** — Convenient airdrop eligibility check and token claiming
- 📊 **Tokenomics** — Interactive charts displaying token distribution
- 📱 **Responsive Design** — Perfect adaptation for desktop and mobile devices
- 🎨 **Modern UI Design** — Web3 aesthetic interface based on Ant Design
- ⚡ **High Performance** — Server-side rendering based on Next.js 15

### Tech Stack

**Frontend Framework**: Next.js 15.3.1 (React full-stack), React 19.0.0, TypeScript 5.0

**UI Component Library**: Ant Design 5.24.7, @ant-design/web3, Tailwind CSS 4.0

**Web3 Integration**: Wagmi 2.14.16, Viem 2.27.2, Web3.js 4.16.0, @tanstack/react-query

**Data Visualization**: Chart.js 4.4.9, react-chartjs-2

### Quick Start

**Prerequisites**: Node.js 18.0 or higher; npm, yarn, pnpm, or bun

**Install dependencies:**
```bash
npm install   # or yarn install / pnpm install / bun install
```

**Environment Configuration** (create `.env.local`):
```env
NEXT_PUBLIC_TUTU_CONTRACT_ADDRESS=your_contract_address_here
NEXT_PUBLIC_CONTRACT_ADDRESS=your_contract_address_here
```

**Development Server:**
```bash
npm run dev   # open http://localhost:3000
```

**Production Build:**
```bash
npm run build
npm run start
```

### Main Features

**1. Token Information Display** — Basic info & introduction, tokenomics data visualization

**2. Airdrop Functionality** — Eligibility check, claimable amount, one-click token claiming, transaction tracking

**3. Web3 Wallet Integration** — Multi-wallet (MetaMask, OKX Wallet), address display, network switch prompts, transaction signing

**4. Multi-language Support** — English, Simplified Chinese, Korean

### Supported Blockchain Networks

- **Linea Mainnet** (Chain ID: 59144)
  - RPC: https://rpc.linea.build
  - Explorer: https://lineascan.build

### License

MIT License. See the [LICENSE](LICENSE) file for details.

### Contact

- **Project Maintainer**: Richmond522
- **X**: [@Richyisaflower](https://x.com/Richyisaflower)
- **Live Site**: [https://tututoken.cc](https://tututoken.cc)

---

<div align="center">
  Made with ❤️ by the Tutu Team
</div>
