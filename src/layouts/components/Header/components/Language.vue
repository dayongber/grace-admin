<template>
  <!-- 设置 -->
  <div class="language-page">
    <el-tooltip :content="t('tooltip.language')">
      <el-dropdown trigger="click" @command="handleLanguage">
        <el-icon :size="20">
          <SwitchFilled />
        </el-icon>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item command="zh" :disabled="language === 'zh'">
              简体中文
            </el-dropdown-item>
            <el-dropdown-item command="en" :disabled="language === 'en'">
              English
            </el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </el-tooltip>
  </div>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import type { LanguageType } from '@/store/interface'
import { useGlobalStore } from '@/store/modules/global'

const i18n = useI18n()
const { t } = i18n
const globalStore = useGlobalStore()
const language = computed(() => globalStore.language)

const handleLanguage = (language: LanguageType) => {
  // 切换i18n语言
  i18n.locale.value = language
  globalStore.setGlobalState('language', language)
}
</script>

<style lang="scss" scoped>
.language-page {
  display: flex;
  align-items: center;
  margin-right: 18px;
  cursor: pointer;
}
</style>
