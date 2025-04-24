/// <reference types="vite/client" />

// 新增类型声明文件
declare module '*.vue' {
  import type { DefineComponent } from 'vue'
  const component: DefineComponent<object, object, unknown>
  export default component
}

// 环境变量TS类型声明
interface ImportMetaEnv {
  readonly VITE_APP_TITLE: string
  readonly VITE_APP_BASE_API: string
  readonly VITE_APP_BASE_PORT: string
  readonly VITE_APP_BASE_URL: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}

declare module 'virtual:svg-icons-register'
