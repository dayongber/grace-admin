<template>
  <el-tooltip :content="t('tooltip.collapse')">
    <el-icon class="collapse-icon" @click="changeCollapse">
      <component :is="isCollapse ? 'Expand' : 'Fold'"></component>
    </el-icon>
  </el-tooltip>
</template>

<script setup lang="ts">
import { useGlobalStore } from '@/store/modules/global'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

// 菜单折叠
const globalStore = useGlobalStore()
let { isCollapse } = storeToRefs(globalStore)
const changeCollapse = () => {
  isCollapse.value = !isCollapse.value
  // globalStore.setGlobalState(isCollapse.value)
}
</script>

<style lang="scss" scoped>
.collapse-icon {
  margin-right: 18px;
  font-size: 20px;
  cursor: pointer;
  transition: color 0.3s ease;

  &:hover {
    color: #007bff;
  }
}
</style>
