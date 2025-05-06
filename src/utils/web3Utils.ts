/**
 * 截断地址，显示前4位和后4位
 */
export const shortenAddress = (address: string): string => {
  if (!address || address.length < 10) {
    return address || '';
  }
  return `${address.slice(0, 6)}...${address.slice(-4)}`;
};

/**
 * 将 Wei 单位的数值（18位小数）转换为可读的代币数量
 * @param amount 以 Wei 为单位的数值字符串
 * @param decimals 小数位数，默认为 18
 * @param displayDecimals 显示的小数位数，默认为 2
 * @returns 格式化后的数值字符串
 */
export function formatAmount(amount: string | number, decimals: number = 18, displayDecimals: number = 2): string {
  try {
    // 确保输入是字符串类型
    const amountStr = amount.toString();
    
    // 转换为 BigInt 进行计算
    const amountBigInt = BigInt(amountStr);
    
    // 如果数量为 0，直接返回 "0"
    if (amountBigInt === BigInt(0)) {
      return "0";
    }

    // 计算除数（10^decimals）
    const divisor = BigInt(10) ** BigInt(decimals);
    
    // 计算整数部分
    const integerPart = amountBigInt / divisor;
    
    // 计算小数部分
    const fractionalPart = amountBigInt % divisor;
    
    // 将小数部分转换为字符串并填充前导零
    let fractionalStr = fractionalPart.toString().padStart(decimals, '0');
    
    // 截取指定的小数位数
    fractionalStr = fractionalStr.substring(0, displayDecimals);
    
    // 如果小数部分全为0，则不显示小数
    if (parseInt(fractionalStr) === 0) {
      return integerPart.toString();
    }
    
    // 否则返回整数部分和小数部分的组合
    return `${integerPart}.${fractionalStr}`;
  } catch (error) {
    console.error('格式化金额出错:', error);
    return '0';
  }
}

/**
 * 截短钱包地址，用于显示
 * @param address 完整的钱包地址
 * @param prefixLength 前缀长度，默认为 6
 * @param suffixLength 后缀长度，默认为 4
 * @returns 截短后的地址
 */
export function truncateAddress(address: string, prefixLength: number = 6, suffixLength: number = 4): string {
  if (!address) return '';
  if (address.length <= prefixLength + suffixLength) return address;
  
  return `${address.substring(0, prefixLength)}...${address.substring(address.length - suffixLength)}`;
} 