<script setup lang="ts">
import { useUserStore } from '@/store/modules/user'
import { useRouter } from 'vue-router'
const url = import.meta.env.VITE_APP_BASE_URL
console.log(url)
const userStore = useUserStore()
const route = useRouter()
</script>

<template>
  <h1>首页</h1>
  <p>当前用户：{{ userStore.count }}</p>
  <p>{{ route.forward }}</p>
  <div class="test-class">哈哈哈哈</div>
  <el-button type="primary" @click="userStore.increment">按钮</el-button>
  <SvgIcon name="test"></SvgIcon>
</template>

<style lang="scss" scoped>
.test-class {
  width: 100px;
  padding: 10px;
  font-size: 20px;
  color: red;
}
</style>
