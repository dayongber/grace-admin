export type GlobalSizeType = 'default' | 'large' | 'small'
export type LanguageType = 'zh' | 'en'

/* GlobalState */
export interface GlobalState {
  isCollapse: boolean
  isBreadcrumb: boolean
  globalSize: GlobalSizeType
  isDark: boolean
  themeColor: string
  isFullScreen: boolean
  language: string | null
}

/* UserState */
export interface UserState {
  token: string
  userInfo: { name: string }
}
