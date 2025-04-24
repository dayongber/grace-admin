import { useGlobalStore } from '@/store/modules/global'
import { storeToRefs } from 'pinia'
import { generateColor } from '@/utils'

/**
 * @description 全局主题 hooks
 */
export const useTheme = () => {
  const globalStore = useGlobalStore()
  const { isDark, themeColor } = storeToRefs(globalStore)
  // 切换暗黑模式
  const switchDark = () => {
    const html = document.documentElement as HTMLElement
    if (isDark.value) html.setAttribute('class', 'dark')
    else html.setAttribute('class', '')
    setThemeColor(themeColor.value)
  }

  /**
   * @description 设置主题色
   * @param color 主题色，传入 null 则恢复默认主题色
   */
  const setThemeColor = (color: string | null) => {
    if (!color) {
      color = themeColor.value
      ElMessage.success('已恢复默认主题色')
    }
    const html = document.documentElement as HTMLElement

    // 设置主色
    html.style.setProperty('--el-color-primary', color)

    // 设置不同透明度的主题色变量
    const alphas = [0.9, 0.8, 0.7, 0.6, 0.5, 0.4, 0.3, 0.2, 0.1]
    alphas.forEach((alpha, index) => {
      const alphaColor = generateColor(color || '', alpha)
      html.style.setProperty(
        `--el-color-primary-light-${index + 1}`,
        alphaColor
      )
    })

    // 设置深色主题色
    const darkColor = generateColor(color || '', 0.8)
    html.style.setProperty('--el-color-primary-dark-2', darkColor)

    globalStore.setGlobalState('themeColor', color)
  }

  // init theme
  const initTheme = () => {
    switchDark()
  }

  return {
    initTheme,
    switchDark,
    setThemeColor
  }
}
