<template>
  <el-menu :collapse-transition="false" :collapse="globalStore.isCollapse">
    <MenuItem></MenuItem>
  </el-menu>
</template>

<script setup lang="ts">
import MenuItem from './components/menuItem.vue'
import { useGlobalStore } from '@/store/modules/global'

const globalStore = useGlobalStore()
</script>

<style lang="scss" scoped>
.el-menu {
  height: 100%;
  border-right: none;
}
</style>
