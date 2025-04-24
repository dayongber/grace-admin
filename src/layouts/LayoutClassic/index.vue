<template>
  <el-container class="layout-container">
    <el-header>
      <Logo></Logo>
      <Header></Header>
    </el-header>
    <el-container>
      <transition name="el-zoom-in-left">
        <el-aside :style="{ width: globalStore.isCollapse ? '60px' : '240px' }">
          <Aside></Aside>
        </el-aside>
      </transition>
      <el-container>
        <el-main>
          <router-view></router-view>
        </el-main>
        <el-footer><Footer></Footer></el-footer>
      </el-container>
    </el-container>
  </el-container>
</template>

<script setup lang="ts">
import Header from '@/layout/components/Header/index.vue'
import Logo from '@/layout/components/Logo/index.vue'
import Aside from '@/layout/components/Aside/index.vue'
import Footer from '@/layout/components/Footer/index.vue'
import { useGlobalStore } from '@/store/modules/global'

const globalStore = useGlobalStore()
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
