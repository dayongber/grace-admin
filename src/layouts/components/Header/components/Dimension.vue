<template>
  <div class="dimension-page">
    <el-tooltip :content="t('tooltip.size')">
      <el-dropdown trigger="click" @command="handleDimension">
        <div>
          <el-icon :size="20"><Eleme /></el-icon>
        </div>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item
              command="default"
              :disabled="globalStore.globalSize === 'default'"
            >
              {{ t('ElSize.default') }}
            </el-dropdown-item>
            <el-dropdown-item
              command="large"
              :disabled="globalStore.globalSize === 'large'"
            >
              {{ t('ElSize.large') }}
            </el-dropdown-item>
            <el-dropdown-item
              command="small"
              :disabled="globalStore.globalSize === 'small'"
            >
              {{ t('ElSize.small') }}
            </el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </el-tooltip>
  </div>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import type { GlobalSizeType } from '@/store/interface'
import { useGlobalStore } from '@/store/modules/global'

const { t } = useI18n()
const globalStore = useGlobalStore()

const handleDimension = (item: GlobalSizeType) => {
  globalStore.globalSize = item
  globalStore.setGlobalState(item)
}
</script>

<style lang="scss" scoped>
.dimension-page {
  display: flex;
  align-items: center;
  margin-right: 18px;
  cursor: pointer;
}
</style>
