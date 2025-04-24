<template>
  <!-- 设置 -->
  <div class="setting-page">
    <el-tooltip :content="t('tooltip.setting')">
      <el-icon :size="20" @click="handleSetTheme">
        <Setting />
      </el-icon>
    </el-tooltip>

    <grace-dialog
      ref="graceDialogRef"
      :visible="dialogVisible"
      :center="true"
      :alignCenter="true"
    >
      <template #content>
        <el-divider>
          <el-icon><Notification /></el-icon>
          主题
        </el-divider>
        <el-row :gutter="20">
          <el-col :span="4">主题</el-col>
          <el-col :span="6">
            <el-color-picker
              v-model="themeColor"
              show-alpha
              :predefine="predefineColors"
              @change="handleColorChange"
            />
          </el-col>
          <el-col :span="4">主题色</el-col>
          <el-col :span="6">
            <el-color-picker
              v-model="themeColor"
              show-alpha
              :predefine="predefineColors"
              @change="handleColorChange"
            />
          </el-col>
        </el-row>
        <el-divider>
          <el-icon><Notification /></el-icon>
          布局样式
        </el-divider>
      </template>
      <template #footer>
        <el-button @click="dialogVisible = false">取消</el-button>
        <el-button type="primary" @click="handleConfirm">确定</el-button>
      </template>
    </grace-dialog>
  </div>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { useGlobalStore } from '@/store/modules/global'
import { useTheme } from '@/hooks/useTheme'

const { t } = useI18n()
const { setThemeColor } = useTheme()

let graceDialogRef = ref()
const dialogVisible = ref(false)
const handleSetTheme = () => {
  dialogVisible.value = true
}

const globalStore = useGlobalStore()
let { themeColor } = storeToRefs(globalStore)
// 预制色
const predefineColors = ref([
  '#077EF8',
  '#fa7e23',
  '#20a162',
  '#FF0000',
  'rgba(97, 105, 255, 0.68)',
  'rgb(249, 164, 7)',
  'hsv(238, 72, 102)',
  'hsva(120, 40, 94, 0.5)',
  'hsl(181, 100%, 37%)',
  'hsla(209, 100%, 56%, 0.73)'
])
const handleColorChange = (val: string | null): any => {
  // 处理颜色变化逻辑
  if (val !== null) {
    console.log('颜色变化:', val)
    setThemeColor(val)
  }
}
// 确定操作
const handleConfirm = () => {
  // 处理确认逻辑
  dialogVisible.value = false
}
</script>

<style lang="scss" scoped>
.setting-page {
  display: flex;
  align-items: center;
  margin-right: 18px;
  cursor: pointer;
}
</style>
