<template>
  <el-container class="layout-container">
    <el-header>
      <Logo></Logo>
      <Header></Header>
    </el-header>
    <el-main>
      <router-view></router-view>
    </el-main>
  </el-container>
</template>

<script setup lang="ts">
import Header from '@/layouts/components/Header/index.vue'
import Logo from '@/layouts/components/Logo/index.vue'
</script>

<style lang="scss" scoped>
.layout-container {
  width: 100vw;
  height: 100vh;
  // background-color: #f5f5f5;
  .el-header {
    display: flex;
    border-bottom: 1px solid var(--el-header-border-color);
    // background-color: var(--el-header-bg-color);
  }

  .el-aside {
    color: var(--el-aside-logo-text-color);
    border-right: 1px solid var(--el-aside-border-color);
  }

  .el-main {
    // background-color: var(--el-header-bg-color);
    color: var(--el-color-primary);
  }
}
</style>
