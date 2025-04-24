<template>
  <!-- 通知 -->
  <el-badge :value="notice" class="notice-page">
    <el-icon class="fullscreen-page" :size="20">
      <Bell />
    </el-icon>
  </el-badge>
</template>

<script setup lang="ts">
// import { Bell } from '@element-plus/icons-vue'

const notice = 18
</script>

<style lang="scss" scoped>
.notice-page {
  display: flex;
  align-items: center;
  margin-right: 18px;
  cursor: pointer;
}
</style>
