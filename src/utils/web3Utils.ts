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
 * 格式化金额，添加千位分隔符
 */
export const formatAmount = (amount: string | number): string => {
  // 确保传入的是字符串
  const amountStr = typeof amount === 'number' ? amount.toString() : amount;
  
  // 分割整数部分和小数部分
  const [integerPart, decimalPart] = amountStr.split('.');
  
  // 对整数部分添加千位分隔符
  const formattedInteger = integerPart.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  
  // 如果有小数部分，则添加小数部分
  if (decimalPart) {
    return `${formattedInteger}.${decimalPart}`;
  }
  
  return formattedInteger;
}; 