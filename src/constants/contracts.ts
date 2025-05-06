export const CONTRACT_ADDRESS = process.env.NEXT_PUBLIC_CONTRACT_ADDRESS || '0x0000000000000000000000000000000000000000';

export const TUTU_ABI = [
  // 简化的ABI
  {
    "inputs": [{"internalType": "address", "name": "account", "type": "address"}],
    "name": "checkAirdropAmount",
    "outputs": [{"internalType": "uint256", "name": "", "type": "uint256"}],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "claimAirdrop",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  }
];

// Tutu合约地址
export const TUTU_CONTRACT_ADDRESS = process.env.NEXT_PUBLIC_TUTU_CONTRACT_ADDRESS || '0x81957f4ac4fae880b164740d39208a22afd7a398';

// Tutu合约 ABI
export const TUTU_CONTRACT_ABI = [
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "account",
        "type": "address"
      }
    ],
    "name": "getClaimableAmount",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "input",
        "type": "address"
      }
    ],
    "name": "claimed",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  }
] as const; 