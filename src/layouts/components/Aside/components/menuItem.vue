<template>
  <div>菜单</div>
  <!-- 有下级，用el-sub-menu，无下级用el-menu-item -->
  <!-- <template v-for="item in menuList" :key="item.path">
    <el-sub-menu v-if="item.children?.length" :index="item.path">
      <template #title>
        <el-icon>
          <component :is="item.meta.icon"></component>
        </el-icon>
        <span>{{ item.meta.title }}</span>
      </template>
      <MenuItem></MenuItem>
    </el-sub-menu>
    <el-menu-item v-else :index="item.path">
      <el-icon>
        <component :is="item.meta.icon"></component>
      </el-icon>
      <span>{{ item.meta.title }}</span>
    </el-menu-item>
  </template> -->
</template>

<script setup lang="ts">
// import { useMenuStore } from '@/store/modules/auth'
// const menuStore = useMenuStore()
// const menuList = computed(() => menuStore.showMenuList)
// const menuList = [
//   {
//     path: '/dashboard',
//     meta: {
//       title: '首页',
//       icon: 'HomeFilled'
//     }
//   },
//   {
//     path: '/system',
//     meta: {
//       title: '系统管理',
//       icon: 'Setting'
//     },
//     children: [
//       {
//         path: '/system/user',
//         meta: {
//           title: '用户管理',
//           icon: 'User'
//         }
//       },
//       {
//         path: '/system/role',
//         meta: {
//           title: '角色管理',
//           icon: 'UserFilled'
//         }
//       }
//     ]
//   }
// ]
</script>

<style lang="scss" scoped></style>
