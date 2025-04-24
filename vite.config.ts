import { UserConfig, ConfigEnv, defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons'
import path from 'path'

// https://vite.dev/config/
export default defineConfig(({ mode }: ConfigEnv): UserConfig => {
  // 使用 `mode` 获取 .env 文件
  const env = loadEnv(mode, process.cwd())
  return {
    plugins: [
      vue(),
      createSvgIconsPlugin({
        // 指定需要缓存的图标文件夹
        iconDirs: [path.resolve(process.cwd(), 'src/assets/icons')],
        // 指定symbolId格式
        symbolId: 'icon-[dir]-[name]'
      }),
      // 自动导入API
      AutoImport({
        // 自动导入 Vue 相关函数，如：ref, reactive, toRef 等
        imports: ['vue', 'pinia'],
        resolvers: [
          // 自动导入Element Plus相关函数，如：ElMessage, ElMessageBox...(带样式)
          ElementPlusResolver()
        ],

        eslintrc: {
          // 是否自动生成 eslint 规则，生成.eslintrc-auto-import.json后设置 false
          enabled: true
        },
        dts: 'src/types/auto-imports.d.ts'
      }), // 自动导入组件
      Components({
        // 导入自定义的组件,指定组件位置，默认是src/components
        dirs: ['src/components', 'src/views'],
        // 自动导入 Element Plus 组件
        resolvers: [ElementPlusResolver()],
        dts: 'src/types/components.d.ts'
      })
    ],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, 'src')
      }
    },
    server: {
      host: '0.0.0.0',
      port: parseInt(env.VITE_APP_BASE_PORT, 10),
      open: false,
      proxy: {
        [env.VITE_APP_BASE_API]: {
          // 代理的服务地址
          target: env.VITE_APP_API_URL, // 开启代理，允许跨域请求数据
          changeOrigin: true, // 重写路径
          rewrite: (path: string) => path.replace(new RegExp('^' + env.VITE_APP_BASE_API), '')
        }
      }
    },
    css: {
      // CSS 预处理器
      preprocessorOptions: {
        scss: {
          additionalData: `@use "@/styles/variables.scss" as *;`
        }
      }
    }
  }
})
