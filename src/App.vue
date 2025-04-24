<template>
  <el-config-provider :locale="locale[globalStore.language]" :size="globalStore.globalSize">
    <router-view></router-view>
  </el-config-provider>
</template>

<script setup lang="ts">
import { useTheme } from '@/hooks/useTheme'
// Element Plus i18n
import zh from 'element-plus/es/locale/lang/zh-cn'
import en from 'element-plus/es/locale/lang/en'
import { useGlobalStore } from './store/modules/global'

const globalStore = useGlobalStore()
// 同步Element Plus 全局配置国际化
const locale: any = {
  zh,
  en
}

// 初始化主题
const { initTheme } = useTheme()
initTheme()
</script>

<style scoped></style>
