import { ThemeConfig } from 'antd';

// 品牌粉色: #ffaac3
// 浅灰白色: #f6f6f6 (背景)
// 深灰黑色: #101418 (文字)

// 亮色主题 - 以白底为基础
export const lightTheme: ThemeConfig = {
  token: {
    // 基础颜色
    colorPrimary: '#ffaac3', // 品牌粉色
    colorPrimaryHover: '#ffbfd2', // 浅粉色
    colorPrimaryActive: '#ff92b3', // 深粉色
    colorPrimaryBg: 'rgba(255, 170, 195, 0.1)', // 淡粉色背景
    colorPrimaryBgHover: 'rgba(255, 170, 195, 0.2)', // 淡粉色背景悬停
    colorPrimaryBorder: '#ffaac3', // 粉色边框
    colorPrimaryBorderHover: '#ffbfd2', // 浅粉色边框悬停
    colorPrimaryText: '#ffaac3', // 粉色文本
    colorPrimaryTextHover: '#ffbfd2', // 浅粉色文本悬停
    colorPrimaryTextActive: '#ff92b3', // 深粉色文本激活
    
    colorInfo: '#3e9efa', // 信息蓝色
    colorInfoHover: '#65b4ff', // 浅蓝色
    colorInfoActive: '#2b7fd7', // 深蓝色
    colorInfoBg: 'rgba(62, 158, 250, 0.1)', // 淡蓝色背景
    colorInfoBgHover: 'rgba(62, 158, 250, 0.2)', // 淡蓝色背景悬停
    colorInfoBorder: '#3e9efa', // 蓝色边框
    colorInfoBorderHover: '#65b4ff', // 浅蓝色边框悬停
    colorInfoText: '#3e9efa', // 蓝色文本
    colorInfoTextHover: '#65b4ff', // 浅蓝色文本悬停
    colorInfoTextActive: '#2b7fd7', // 深蓝色文本激活
    
    colorSuccess: '#52c41a', // 成功绿色
    colorSuccessHover: '#73d13d', // 浅绿色
    colorSuccessActive: '#389e0d', // 深绿色
    colorSuccessBg: 'rgba(82, 196, 26, 0.1)', // 淡绿色背景
    colorSuccessBgHover: 'rgba(82, 196, 26, 0.2)', // 淡绿色背景悬停
    colorSuccessBorder: '#52c41a', // 绿色边框
    colorSuccessBorderHover: '#73d13d', // 浅绿色边框悬停
    colorSuccessText: '#52c41a', // 绿色文本
    colorSuccessTextHover: '#73d13d', // 浅绿色文本悬停
    colorSuccessTextActive: '#389e0d', // 深绿色文本激活
    
    colorWarning: '#faad14', // 警告黄色
    colorWarningHover: '#ffc53d', // 浅黄色
    colorWarningActive: '#d48806', // 深黄色
    colorWarningBg: 'rgba(250, 173, 20, 0.1)', // 淡黄色背景
    colorWarningBgHover: 'rgba(250, 173, 20, 0.2)', // 淡黄色背景悬停
    colorWarningBorder: '#faad14', // 黄色边框
    colorWarningBorderHover: '#ffc53d', // 浅黄色边框悬停
    colorWarningText: '#faad14', // 黄色文本
    colorWarningTextHover: '#ffc53d', // 浅黄色文本悬停
    colorWarningTextActive: '#d48806', // 深黄色文本激活
    colorWarningOutline: 'rgba(250, 173, 20, 0.2)', // 黄色轮廓
    
    colorError: '#ff4d4f', // 错误红色
    colorErrorHover: '#ff7875', // 浅红色
    colorErrorActive: '#d9363e', // 深红色
    colorErrorBg: 'rgba(255, 77, 79, 0.1)', // 淡红色背景
    colorErrorBgHover: 'rgba(255, 77, 79, 0.2)', // 淡红色背景悬停
    colorErrorBgActive: 'rgba(255, 77, 79, 0.3)', // 淡红色背景激活
    colorErrorBgFilledHover: 'rgba(255, 77, 79, 0.4)', // 淡红色背景填充悬停
    colorErrorBorder: '#ff4d4f', // 红色边框
    colorErrorBorderHover: '#ff7875', // 浅红色边框悬停
    colorErrorText: '#ff4d4f', // 红色文本
    colorErrorTextHover: '#ff7875', // 浅红色文本悬停
    colorErrorTextActive: '#d9363e', // 深红色文本激活
    colorErrorOutline: 'rgba(255, 77, 79, 0.2)', // 红色轮廓
    
    colorHighlight: '#ff4d4f', // 高亮红色
    colorWhite: '#ffffff', // 纯白色
    
    // 文本颜色
    colorIcon: '#101418', // 图标颜色 - 深灰黑
    colorIconHover: '#ffaac3', // 图标悬停颜色 - 品牌粉色
    colorLink: '#ffaac3', // 链接颜色 - 品牌粉色
    colorLinkActive: '#ff92b3', // 链接激活颜色 - 深粉色
    colorLinkHover: '#ffbfd2', // 链接悬停颜色 - 浅粉色
    colorText: '#101418', // 正文文本颜色 - 深灰黑
    colorTextDescription: '#333333', // 描述文本颜色 - 深灰
    colorTextDisabled: '#bfbfbf', // 禁用文本颜色 - 灰色
    colorTextHeading: '#101418', // 标题文本颜色 - 深灰黑
    colorTextLightSolid: '#ffffff', // 浅色背景上的文本颜色 - 白色
    colorTextPlaceholder: '#999999', // 占位符文本颜色 - 灰色
    colorTextQuaternary: '#cccccc', // 四级文本颜色 - 亮灰色
    colorTextSecondary: '#555555', // 次要文本颜色 - 中灰色
    colorTextTertiary: '#888888', // 三级文本颜色 - 浅灰色
    
    // 背景颜色
    colorBgBase: '#ffffff', // 基础背景颜色 - 白色
    colorBgBlur: 'rgba(255, 255, 255, 0.85)', // 模糊背景 - 半透明白色
    colorBgContainer: '#f6f6f6', // 容器背景 - 浅灰白色
    colorBgContainerDisabled: '#f5f5f5', // 禁用容器背景 - 浅灰色
    colorBgElevated: '#ffffff', // 浮层背景 - 白色
    colorBgMask: 'rgba(0, 0, 0, 0.45)', // 遮罩背景 - 半透明黑色
    colorBgSolid: '#ffffff', // 实色背景 - 白色
    colorBgSolidActive: '#f0f0f0', // 激活实色背景 - 浅灰色
    colorBgSolidHover: '#f5f5f5', // 悬停实色背景 - 浅灰色
    colorBgSpotlight: 'rgba(255, 170, 195, 0.1)', // 聚光背景 - 淡粉色
    colorBgTextActive: 'rgba(255, 170, 195, 0.15)', // 文本激活背景 - 淡粉色
    colorBgTextHover: 'rgba(255, 170, 195, 0.08)', // 文本悬停背景 - 淡粉色
    
    // 填充颜色
    colorFill: 'rgba(255, 170, 195, 0.15)', // 填充 - 淡粉色
    colorFillAlter: '#f6f6f6', // 替代填充 - 浅灰白色
    colorFillContent: 'rgba(255, 170, 195, 0.12)', // 内容填充 - 淡粉色
    colorFillContentHover: 'rgba(255, 170, 195, 0.2)', // 内容填充悬停 - 较深淡粉色
    colorFillSecondary: 'rgba(255, 170, 195, 0.08)', // 次要填充 - 浅淡粉色
    colorFillTertiary: 'rgba(255, 170, 195, 0.04)', // 三级填充 - 极浅淡粉色
    
    // 分割线颜色
    colorBorder: '#ffe6f0', // 边框 - 浅粉色
    colorBorderBg: '#ffffff', // 边框背景 - 白色
    colorBorderSecondary: '#f4f4f4', // 次要边框 - 浅灰色
    colorSplit: '#ffe6f0', // 分割线 - 浅粉色
    
    // 其他基础样式
    borderRadius: 4, // 圆角
    wireframe: false, // 线框模式
    fontSize: 14, // 字体大小
  },
  components: {
    // 可以添加各组件的具体配置
    // 这里仅作为示例，在需要时补充完整
    Button: {
      colorPrimary: '#ffaac3', // 按钮主色
      colorPrimaryHover: '#ffbfd2', // 按钮悬停色
      borderRadius: 8, // 按钮圆角
      controlHeight: 36, // 按钮高度
    },
    Input: {
      colorBgContainer: '#ffffff',
      colorBorder: '#ffe6f0',
    },
    Card: {
      colorBgContainer: '#ffffff',
      colorBorderSecondary: '#ffe6f0',
    },
    Modal: {
      colorBgElevated: '#ffffff',
      colorIcon: '#ffaac3',
    }
  }
}; 