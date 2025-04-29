import { ThemeConfig } from 'antd';

// 品牌粉色: #ffaac3
// 浅灰白色: #f6f6f6 (背景在亮色主题中)
// 深灰黑色: #101418 (背景在暗色主题中)

// 暗色主题 - 以黑底为基础
export const darkTheme: ThemeConfig = {
  token: {
    // 基础颜色
    colorPrimary: '#ffaac3', // 品牌粉色
    colorPrimaryHover: '#ffbfd2', // 浅粉色
    colorPrimaryActive: '#ff92b3', // 深粉色
    colorPrimaryBg: 'rgba(255, 170, 195, 0.15)', // 淡粉色背景
    colorPrimaryBgHover: 'rgba(255, 170, 195, 0.25)', // 淡粉色背景悬停
    colorPrimaryBorder: '#ffaac3', // 粉色边框
    colorPrimaryBorderHover: '#ffbfd2', // 浅粉色边框悬停
    colorPrimaryText: '#ffaac3', // 粉色文本
    colorPrimaryTextHover: '#ffbfd2', // 浅粉色文本悬停
    colorPrimaryTextActive: '#ff92b3', // 深粉色文本激活
    
    colorInfo: '#4baeff', // 信息蓝色
    colorInfoHover: '#69c0ff', // 浅蓝色
    colorInfoActive: '#3593df', // 深蓝色
    colorInfoBg: 'rgba(75, 174, 255, 0.15)', // 淡蓝色背景
    colorInfoBgHover: 'rgba(75, 174, 255, 0.25)', // 淡蓝色背景悬停
    colorInfoBorder: '#4baeff', // 蓝色边框
    colorInfoBorderHover: '#69c0ff', // 浅蓝色边框悬停
    colorInfoText: '#4baeff', // 蓝色文本
    colorInfoTextHover: '#69c0ff', // 浅蓝色文本悬停
    colorInfoTextActive: '#3593df', // 深蓝色文本激活
    
    colorSuccess: '#73d13d', // 成功绿色
    colorSuccessHover: '#95de64', // 浅绿色
    colorSuccessActive: '#52af15', // 深绿色
    colorSuccessBg: 'rgba(115, 209, 61, 0.15)', // 淡绿色背景
    colorSuccessBgHover: 'rgba(115, 209, 61, 0.25)', // 淡绿色背景悬停
    colorSuccessBorder: '#73d13d', // 绿色边框
    colorSuccessBorderHover: '#95de64', // 浅绿色边框悬停
    colorSuccessText: '#73d13d', // 绿色文本
    colorSuccessTextHover: '#95de64', // 浅绿色文本悬停
    colorSuccessTextActive: '#52af15', // 深绿色文本激活
    
    colorWarning: '#faad14', // 警告黄色
    colorWarningHover: '#ffc53d', // 浅黄色
    colorWarningActive: '#d48806', // 深黄色
    colorWarningBg: 'rgba(250, 173, 20, 0.15)', // 淡黄色背景
    colorWarningBgHover: 'rgba(250, 173, 20, 0.25)', // 淡黄色背景悬停
    colorWarningBorder: '#faad14', // 黄色边框
    colorWarningBorderHover: '#ffc53d', // 浅黄色边框悬停
    colorWarningText: '#faad14', // 黄色文本
    colorWarningTextHover: '#ffc53d', // 浅黄色文本悬停
    colorWarningTextActive: '#d48806', // 深黄色文本激活
    colorWarningOutline: 'rgba(250, 173, 20, 0.25)', // 黄色轮廓
    
    colorError: '#ff6b6b', // 错误红色
    colorErrorHover: '#ff8f8f', // 浅红色
    colorErrorActive: '#d64848', // 深红色
    colorErrorBg: 'rgba(255, 107, 107, 0.15)', // 淡红色背景
    colorErrorBgHover: 'rgba(255, 107, 107, 0.25)', // 淡红色背景悬停
    colorErrorBgActive: 'rgba(255, 107, 107, 0.35)', // 淡红色背景激活
    colorErrorBgFilledHover: 'rgba(255, 107, 107, 0.4)', // 淡红色背景填充悬停
    colorErrorBorder: '#ff6b6b', // 红色边框
    colorErrorBorderHover: '#ff8f8f', // 浅红色边框悬停
    colorErrorText: '#ff6b6b', // 红色文本
    colorErrorTextHover: '#ff8f8f', // 浅红色文本悬停
    colorErrorTextActive: '#d64848', // 深红色文本激活
    colorErrorOutline: 'rgba(255, 107, 107, 0.25)', // 红色轮廓
    
    colorHighlight: '#ff6b6b', // 高亮红色
    colorWhite: '#ffffff', // 纯白色
    
    // 文本颜色
    colorIcon: '#f6f6f6', // 图标颜色 - 浅灰白
    colorIconHover: '#ffaac3', // 图标悬停颜色 - 品牌粉色
    colorLink: '#ffaac3', // 链接颜色 - 品牌粉色
    colorLinkActive: '#ff92b3', // 链接激活颜色 - 深粉色
    colorLinkHover: '#ffbfd2', // 链接悬停颜色 - 浅粉色
    colorText: '#f6f6f6', // 正文文本颜色 - 浅灰白
    colorTextDescription: '#d9d9d9', // 描述文本颜色 - 亮灰
    colorTextDisabled: '#777777', // 禁用文本颜色 - 中灰色
    colorTextHeading: '#ffffff', // 标题文本颜色 - 白色
    colorTextLightSolid: '#101418', // 浅色背景上的文本颜色 - 深灰黑
    colorTextPlaceholder: '#808080', // 占位符文本颜色 - 灰色
    colorTextQuaternary: '#666666', // 四级文本颜色 - 暗灰色
    colorTextSecondary: '#b3b3b3', // 次要文本颜色 - 浅灰色
    colorTextTertiary: '#999999', // 三级文本颜色 - 灰色
    
    // 背景颜色
    colorBgBase: '#101418', // 基础背景颜色 - 深灰黑
    colorBgBlur: 'rgba(16, 20, 24, 0.85)', // 模糊背景 - 半透明深灰黑
    colorBgContainer: '#1f2329', // 容器背景 - 深灰色（比基础稍浅）
    colorBgContainerDisabled: '#2c2c2c', // 禁用容器背景 - 深灰色
    colorBgElevated: '#2a2e37', // 浮层背景 - 深灰色
    colorBgMask: 'rgba(0, 0, 0, 0.65)', // 遮罩背景 - 半透明黑色
    colorBgSolid: '#1f2329', // 实色背景 - 深灰色
    colorBgSolidActive: '#303540', // 激活实色背景 - 中灰色
    colorBgSolidHover: '#272b34', // 悬停实色背景 - 中灰色
    colorBgSpotlight: 'rgba(255, 170, 195, 0.15)', // 聚光背景 - 淡粉色
    colorBgTextActive: 'rgba(255, 170, 195, 0.2)', // 文本激活背景 - 淡粉色
    colorBgTextHover: 'rgba(255, 170, 195, 0.12)', // 文本悬停背景 - 淡粉色
    
    // 填充颜色
    colorFill: 'rgba(255, 170, 195, 0.16)', // 填充 - 淡粉色
    colorFillAlter: '#2a2e37', // 替代填充 - 深灰色
    colorFillContent: 'rgba(255, 170, 195, 0.12)', // 内容填充 - 淡粉色
    colorFillContentHover: 'rgba(255, 170, 195, 0.24)', // 内容填充悬停 - 较深淡粉色
    colorFillSecondary: 'rgba(255, 170, 195, 0.08)', // 次要填充 - 浅淡粉色
    colorFillTertiary: 'rgba(255, 170, 195, 0.04)', // 三级填充 - 极浅淡粉色
    
    // 分割线颜色
    colorBorder: 'rgba(255, 170, 195, 0.2)', // 边框 - 浅粉色半透明
    colorBorderBg: '#1f2329', // 边框背景 - 深灰色
    colorBorderSecondary: '#303540', // 次要边框 - 中灰色
    colorSplit: 'rgba(255, 170, 195, 0.15)', // 分割线 - 浅粉色半透明
    
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
      colorPrimaryActive: '#ff92b3', // 按钮激活色
      borderRadius: 8, // 按钮圆角
      controlHeight: 36, // 按钮高度
    },
    Input: {
      colorBgContainer: '#272b34',
      colorBorder: 'rgba(255, 170, 195, 0.2)',
    },
    Card: {
      colorBgContainer: '#1f2329',
      colorBorderSecondary: 'rgba(255, 170, 195, 0.15)',
    },
    Modal: {
      colorBgElevated: '#1f2329',
      colorIcon: '#ffaac3',
    }
  }
}; 