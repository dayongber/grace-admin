<template>
  <!-- 全屏 -->
  <el-tooltip
    :content="!isFullScreen ? t('tooltip.fullScreen') : t('tooltip.close')"
  >
    <el-icon class="fullscreen-page" :size="20" @click="handleFullScreen">
      <FullScreen v-if="!isFullScreen" />
      <Close v-else />
    </el-icon>
  </el-tooltip>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { useGlobalStore } from '@/store/modules/global'

const { t } = useI18n()

const globalStore = useGlobalStore()
const { isFullScreen } = storeToRefs(globalStore)

const handleFullScreen = () => {
  // 当前页面是否处于全屏状态【全屏状态：document.fullscreenElement != null】
  let full = document.fullscreenElement
  if (!full) {
    // 文档根节点的方法requestFullscreen，实现全屏模式
    document.documentElement.requestFullscreen()
  } else {
    // 退出全屏模式
    document.exitFullscreen()
  }
  isFullScreen.value = !isFullScreen.value
  globalStore.setGlobalState(isFullScreen.value)
}
</script>

<style lang="scss" scoped>
.fullscreen-page {
  display: flex;
  align-items: center;
  margin-right: 18px;
  cursor: pointer;
}
</style>
