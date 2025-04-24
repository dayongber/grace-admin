<template>
  <div class="header-page">
    <div class="header-left">
      <!-- 是否折叠菜单 -->
      <Collapse></Collapse>
      <!-- 面包屑 -->
      <Breadcrumb></Breadcrumb>
    </div>
    <div class="header-right">
      <!-- Element plus 尺寸配置 -->
      <Dimension></Dimension>
      <!-- 语言配置 -->
      <Language></Language>
      <!-- 主题 -->
      <Dark></Dark>
      <!-- 设置 -->
      <Theme></Theme>
      <!-- 通知 -->
      <Notification></Notification>
      <!-- 是否全屏 -->
      <Fullscreen></Fullscreen>
      <!-- 头像 -->
      <Avatar></Avatar>
    </div>
  </div>
</template>

<script setup lang="ts">
import Breadcrumb from '@/layouts/components/Header/components/Breadcrumb.vue'
import Collapse from '@/layouts/components/Header/components/Collapse.vue'
import Avatar from '@/layouts/components/Header/components/Avatar.vue'
import Fullscreen from '@/layouts/components/Header/components/Fullscreen.vue'
import Notification from '@/layouts/components/Header/components/Notification.vue'
import Theme from '@/layouts/components/Header/components/Theme.vue'
import Dark from '@/layouts/components/Header/components/Dark.vue'
import Dimension from '@/layouts/components/Header/components/Dimension.vue'
import Language from '@/layouts/components/Header/components/Language.vue'
</script>

<style lang="scss" scoped>
.header-page {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 60px;

  .header-left {
    display: flex;
    align-items: center;
    overflow: hidden;
    white-space: nowrap;
  }

  .header-right {
    display: flex;
    align-items: center;
  }
}
</style>
