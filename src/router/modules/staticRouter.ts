import type { RouteRecordRaw } from 'vue-router'
import ClassicLayout from '@/layouts/LayoutClassic/index.vue'

export const staticRoutes: RouteRecordRaw[] = [
  {
    path: '/login',
    name: 'Login',
    component: () => import('@/views/login/index.vue')
  },
  {
    path: '/tools',
    name: 'Tool',
    component: () => import('@/views/tools/index.vue'),
    meta: {
      title: '工具箱'
    }
  },
  {
    path: '/',
    redirect: '/dashboard',
    name: 'Home',
    component: ClassicLayout,
    children: [
      {
        path: '/dashboard',
        name: 'Dashboard',
        component: () => import('@/views/dashboard/index.vue'),
        meta: {
          title: '首页'
        }
      }
    ]
  },
  {
    path: '/',
    redirect: '/dashboard',
    name: 'Home',
    component: ClassicLayout,
    children: [
      {
        path: '/dashboard',
        name: 'Dashboard',
        component: () => import('@/views/dashboard/index.vue'),
        meta: {
          title: '首页'
        }
      }
    ]
  },
  {
    path: '/system',
    redirect: '/user',
    name: 'System',
    component: ClassicLayout,
    children: [
      {
        path: '/user',
        name: 'User',
        component: () => import('@/views/system/user/index.vue'),
        meta: {
          title: '用户管理'
        }
      },
      {
        path: '/menu',
        name: 'Menu',
        component: () => import('@/views/system/menu/index.vue'),
        meta: {
          title: '菜单管理'
        }
      }
    ]
  }
]
