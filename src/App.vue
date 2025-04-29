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

// 加载动画
onMounted(() => {
  const loadingScreen = document.getElementById('loading-screen')
  let removed = false

  const removeLoader = () => {
    if (removed) return
    removed = true
    loadingScreen?.classList.add('hide')
    loadingScreen?.addEventListener('transitionend', loadingScreen.remove)
  }
  // 正常流程
  // removeLoader()
  // 超时强制隐藏
  setTimeout(removeLoader, 5000)
})
</script>

<style scoped></style>
