import { StyleSheet } from 'react-native'
const px = StyleSheet.hairlineWidth

// 品牌色
const mtdBrandColors = {
  mtdBrandPrimary: '#FECB2E',
  mtdBrandPrimaryDark: '#FFA000',
  mtdBrandSuccess: '#1CC678',
  mtdBrandWarning: '#FF8C28',
  mtdBrandDanger: '#FF5650',
  mtdBrandInfo: '#4B88EB'
}
// 灰度
const mtdGrayColors = {
  mtdGrayBase: '#111',    // 正文，主标题
  mtdGrayDarker: '#333',  // 副标题
  mtdGrayDark: '#555',    // 补充、提示信息
  mtdGray: '#888',        // 取消按钮等
  mtdGrayLight: '#aaaaaa',
  mtdGrayLighter: '#cccccc',
  mtdGrayLightest: '#ebebeb'
}
// 背景色
const mtdFillColors = {
  mtdFillBase: '#ffffff',
  mtdFillGray: '#F5F5F5',
  mtdFillBody: '#F8F8F8',
  mtdFillBackdrop: 'rgba(0, 0, 0, .3)',
  mtdFillBackdropDark: 'rgba(0, 0, 0, 0.75)'
}
// 字体尺寸
const mtdFontSize = {
  mtdFontSizeXS: 10,
  mtdFontSizeS: 12,
  mtdFontSizeM: 14,
  mtdFontSizeL: 16,
  mtdFontSizeXL: 18,
  mtdFontSizeXXL: 20,
  mtdFontSizeXXXL: 22,
  mtdFontSizeXXXXL: 24,
  mtdFontSizeXXXXXL: 28
}

const mtdSpacing = {
  // 水平间距
  mtdHSpacingS: 4,
  mtdHSpacingM: 8,
  mtdHSpacingL: 12,
  mtdHSpacingXL: 16,
  mtdHSpacingXXL: 20,
  // 垂直间距
  mtdVSpacingXS: 2,
  mtdVSpacingS: 4,
  mtdVSpacingM: 8,
  mtdVSpacingL: 10,
  mtdVSpacingXL: 12,
  mtdVSpacingXXL: 16,
  mtdVSpacingXXXL: 18,
  mtdVSpacingXXXXL: 20
}
// 圆角
const mtdRadius = {
  mtdRadiusXS: 2,
  mtdRadiusS: 4,
  mtdRadiusM: 6,
  mtdRadiusL: 8
}
const mtdBorder = {
  mtdBorderWidth: 1 * px,
  mtdBorderColor: '#F5F5F5',
  mtdBorderColorDark: '#e5e5e5',
  mtdBorderColorDarker: '#d5d5d5'
}

const mtdOpacity = 0.3
const mtdEnableAnimated = true
/**
 * Button 组件
 */
const button = {
  buttonBorderRadius: mtdRadius.mtdRadiusXS,
  buttonActiveOpacity: mtdOpacity,

  buttonLFontSize: mtdFontSize.mtdFontSizeXL,
  buttonLHSpacing: 50,
  buttonLVSpacing: 14,

  buttonMFontSize: mtdFontSize.mtdFontSizeL,
  buttonMHSpacing: 50,
  buttonMVSpacing: 13,

  buttonSFontSize: mtdFontSize.mtdFontSizeM,
  buttonSHSpacing: mtdSpacing.mtdHSpacingXL,
  buttonSVSpacing: 8
}

/**
 * Form 组件
 */
const form = {
}

const formItem = {
  formItemHSpacing: mtdSpacing.mtdHSpacingXL,
  formItemVSpacing: 18,

  formItemLabelWidth: 90,
  formItemLabelMarginRight: 32
}

/**
 * Input组件
 */
const input = {
  // input组件安全区域 高度
  inputTextFontSize: 14,
  inputAreaHeight: 30
}


const radio = {
  radioEnableAnimated: mtdEnableAnimated
}

const checkbox = {
  checkboxEnableAnimated: mtdEnableAnimated
}

const slider = {
  sliderSlideHeight: 40,
  sliderSlideHeightForTip: 100,
  sliderTrackHeight: 5,
  sliderThumbSize: 34,
  sliderMarkHeight: 40,
  sliderMarkLineSize: 10,
  sliderSlideToolTip: 30,
  sliderSlideToolTipIconSize: 4
}

const variables = {
  ...mtdBrandColors,
  ...mtdGrayColors,
  ...mtdFillColors,
  ...mtdFontSize,
  ...mtdSpacing,
  ...mtdRadius,
  ...mtdBorder,
  mtdOpacity,

  ...button,
  ...form,
  ...formItem,
  ...input,
  ...radio,
  ...checkbox,
  ...slider,
}



function useTheme(args = {}) {
  Object.assign(variables, args)
  return variables
}

export default variables

export {
  useTheme
}
