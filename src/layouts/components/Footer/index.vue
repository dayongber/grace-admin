<template>
  <div class="footer-page">
    <span>© 2025 {{ title }}</span>
    <span>|</span>
    <span>Powered by Vue3 + Vite + Element Plus</span>
  </div>
</template>

<script setup lang="ts">
const title = import.meta.env.VITE_APP_TITLE || 'Grace Admin'
</script>

<style lang="scss" scoped>
.footer-page {
  display: flex;
  gap: 10px;
  align-items: center;
  justify-content: center;
}
</style>
