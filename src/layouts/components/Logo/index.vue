<template>
  <div class="logo-page">
    <img src="@/assets/images/logo.png" alt="logo" class="logo" />
    <div class="title">{{ title }}</div>
  </div>
</template>

<script setup lang="ts">
const title = import.meta.env.VITE_APP_TITLE || 'Grace Admin'
</script>

<style lang="scss" scoped>
.logo-page {
  display: flex;
  align-items: center;
  width: 220px;
  // background-color: #f5f5f5;
  // border-bottom: 1px solid #eaeaea;
  .logo {
    width: 30px;
    height: 30px;
    margin-right: 20px;
  }

  .title {
    font-size: 20px;
    font-weight: bold;
    // color: #333;
  }
}
</style>
