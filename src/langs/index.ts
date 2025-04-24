import { createI18n } from 'vue-i18n'
import { getBrowserLang } from '@/utils'
// 导入自定义本地语言包
import zh from './modules/zh'
import en from './modules/en'

const i18n = createI18n({
  // 设置为 false，启用 composition API 模式
  legacy: false,
  // 全局配置
  globalInjection: true,
  // 设置默认语言
  locale: getBrowserLang(),
  // 设置语言包
  messages: {
    zh,
    en
  }
})
export default i18n
