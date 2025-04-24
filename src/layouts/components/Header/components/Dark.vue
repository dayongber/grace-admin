<template>
  <!-- 设置 -->
  <div class="theme-page">
    <el-tooltip :content="t('tooltip.light')" v-if="!globalStore.isDark">
      <el-icon :size="20" @click="handleTheme">
        <Sunny />
      </el-icon>
    </el-tooltip>
    <!-- 暗黑模式 -->
    <el-tooltip :content="t('tooltip.dark')" v-if="globalStore.isDark">
      <el-icon :size="20" @click="handleTheme">
        <Moon />
      </el-icon>
    </el-tooltip>
  </div>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { useTheme } from '@/hooks/useTheme'
import { useGlobalStore } from '@/store/modules/global'

const { t } = useI18n()

const { switchDark } = useTheme()
const globalStore = useGlobalStore()
let { isDark } = storeToRefs(globalStore)

const handleTheme = async (event: MouseEvent) => {
  // 添加动画
  const x = event.clientX
  const y = event.clientY

  // 画圆
  const endRadius = Math.hypot(
    Math.max(x, innerWidth - x),
    Math.max(y, innerHeight - y)
  )
  if (document.startViewTransition == undefined) {
    isDark.value = !isDark.value
    switchDark()
  } else {
    const transition = document.startViewTransition(() => {
      isDark.value = !isDark.value
      switchDark()
    })
    await transition.ready
    const clipPath = [
      `circle(0px at ${x}px ${y}px)`,
      `circle(${endRadius}px at ${x}px ${y}px)`
    ]
    document.documentElement.animate(
      {
        clipPath: globalStore.isDark ? clipPath : [...clipPath].reverse()
      },
      {
        duration: 300,
        easing: 'ease-in',
        pseudoElement: globalStore.isDark
          ? '::view-transition-new(root)'
          : '::view-transition-old(root)'
      }
    )
  }
}
</script>

<style lang="scss" scoped>
.theme-page {
  display: flex;
  align-items: center;
  margin-right: 18px;
  cursor: pointer;
}
</style>
<style lang="scss">
::view-transition-old(root),
::view-transition-new(root) {
  mix-blend-mode: normal;
  animation: none;
}

::view-transition-old(root) {
  z-index: 9999;
}

::view-transition-new(root) {
  z-index: 1;
}

.dark::view-transition-old(root) {
  z-index: 1;
}

.dark::view-transition-new(root) {
  z-index: 9999;
}
</style>
