<template>
  <div class="avatar-page">
    <img src="@/assets/images/avatar.png" alt="avatar" />
    <el-dropdown trigger="click">
      <div class="name">
        {{ name }}
        <el-icon><arrow-down /></el-icon>
      </div>
      <template #dropdown>
        <el-dropdown-menu>
          <el-dropdown-item>个人信息</el-dropdown-item>
          <el-dropdown-item>修改密码</el-dropdown-item>
          <el-dropdown-item>退出</el-dropdown-item>
        </el-dropdown-menu>
      </template>
    </el-dropdown>
  </div>
</template>

<script setup lang="ts">
const name = ref('dayong')
</script>

<style lang="scss" scoped>
.avatar-page {
  display: flex;
  align-items: center;

  img {
    width: 40px;
    height: 40px;
    border-radius: 50%;
  }

  .name {
    // color: #000;
    white-space: nowrap; /* 不换行 */
    cursor: pointer;
    outline: none; // 去除伪元素
  }
}
</style>
