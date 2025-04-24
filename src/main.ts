import { createApp } from 'vue'
import App from './App.vue'
// 引入路由
import router from '@/router'
// 引入pinia
import pinia from '@/store'
// 引入styles
import '@/styles/index.scss'

import * as ElementPlusIconsVue from '@element-plus/icons-vue'
// element dark css
import 'element-plus/theme-chalk/dark/css-vars.css'
// 引入自定义主题
import '@/styles/theme.scss'
// 引入svg图标
import 'virtual:svg-icons-register'
// 自定义i18n
import I18n from '@/langs'

const app = createApp(App)
// 注册ElementPlus所有图标
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}

app.use(router)
app.use(pinia)
app.use(I18n)

app.mount('#app')
