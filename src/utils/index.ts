/**
 * @description 获取浏览器默认语言
 * @returns {String}
 */
export function getBrowserLang() {
  const browserLang = navigator.language
  let defaultBrowserLang = ''
  if (['cn', 'zh', 'zh-cn'].includes(browserLang.toLowerCase())) {
    defaultBrowserLang = 'zh'
  } else {
    defaultBrowserLang = 'en'
  }
  return defaultBrowserLang
}

/**
 * @description 添加颜色转换函数
 * @description 传入 hex 或 rgb(a) 格式的颜色，返回 rgba 格式的颜色
 * @param {String} color 颜色值
 * @param {Number} alpha 透明度，范围 0-1
 * @returns {String}
 */
export const generateColor = (color: string, alpha: number): string => {
  // 移除颜色中的空格
  const cleanColor = color.trim()

  // 如果是 hex 格式
  if (cleanColor.startsWith('#')) {
    const hex = cleanColor.slice(1)
    const r = parseInt(hex.slice(0, 2), 16)
    const g = parseInt(hex.slice(2, 4), 16)
    const b = parseInt(hex.slice(4, 6), 16)
    return `rgba(${r}, ${g}, ${b}, ${alpha})`
  }

  // 如果已经是 rgb/rgba 格式
  if (cleanColor.startsWith('rgb')) {
    const values = cleanColor.match(/\d+/g)
    if (values && values.length >= 3) {
      return `rgba(${values[0]}, ${values[1]}, ${values[2]}, ${alpha})`
    }
  }

  return color
}
