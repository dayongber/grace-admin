import { defineStore } from 'pinia'
import type { GlobalState } from '@/store/interface'
import { piniaLocalPersistConfig } from '@/store/config'

export const useGlobalStore = defineStore('global', {
  state: (): GlobalState => {
    return {
      // 是否折叠菜单·
      isCollapse: false,
      // 是否显示面包屑
      isBreadcrumb: true,
      // GlobalSizeType
      globalSize: 'default',
      // 是否暗黑模式
      isDark: false,
      // 主题色
      themeColor: '#409EFF',
      // 是否全屏
      isFullScreen: false,
      // 语言类型
      language: null
    }
  },

  actions: {
    // Set GlobalState
    setGlobalState(...args: any) {
      this.$patch({ [args[0]]: args[1] })
    }
  },

  // 持久化配置
  persist: piniaLocalPersistConfig('global')
})
