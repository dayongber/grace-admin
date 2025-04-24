// 该文件是 ESLint 的配置文件，使用了 ESLint 的新配置格式
import { defineConfig } from 'eslint/config'
import globals from 'globals'
import js from '@eslint/js'
import * as tseslint from 'typescript-eslint'
import pluginVue from 'eslint-plugin-vue'
import eslintPluginPrettier from 'eslint-plugin-prettier/recommended'
import { readFileSync } from 'fs'

const autoImportGlobals = JSON.parse(
  readFileSync('./.eslintrc-auto-import.json', 'utf-8')
).globals

// 添加手动类型声明
const elementPlusTypes = {
  ElMessage: 'readonly',
  ElLoading: 'readonly',
  ElMessageBox: 'readonly'
}

export default defineConfig([
  // 添加忽略配置
  {
    ignores: ['node_modules/', 'dist/', 'build/', '*.min.js']
  },
  // 基础配置：应用范围
  {
    files: ['**/*.{js,mjs,cjs,ts,vue}']
  },
  // 语言环境配置
  {
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
        ...autoImportGlobals,
        ...elementPlusTypes
      }
    }
  },
  // 加载js推荐规则
  {
    plugins: { js },
    extends: ['js/recommended']
  },
  {
    plugins: { tseslint },
    extends: ['tseslint/recommended']
  },
  // tseslint.configs.recommended,
  pluginVue.configs['flat/essential'],
  // Vue 文件特殊配置, 覆盖默认配置
  {
    files: ['**/*.vue'],
    languageOptions: {
      parserOptions: { parser: tseslint.parser }
    }
  },
  // Prettier 配置
  eslintPluginPrettier,
  // {
  //   plugins: {
  //     prettier
  //   },
  //   rules: {
  //     ...prettier.configs.recommended.rules, // 直接合并推荐规则
  //     // 强制所有代码格式遵循 Prettier 规范（错误级别）
  //     'prettier/prettier': 'error'
  //   }
  // },

  // 自定义规则覆盖前面的配置
  {
    rules: {
      // 不允许存在未使用的变量（警告级别）
      '@typescript-eslint/no-unused-vars': 'warn',
      // 关闭禁止使用any
      '@typescript-eslint/no-explicit-any': 'off',
      // 关闭 Vue 组件多单词命名规则
      'vue/multi-word-component-names': 'off',
      // 关闭 Vue 模板根元素校验
      'vue/valid-template-root': 'off'
    }
  }
])
