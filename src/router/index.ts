import {
  createRouter,
  createWebHashHistory,
  type RouteLocationNormalized
} from 'vue-router'
import { staticRoutes } from './modules/staticRouter'
// import { initDynamicRoutes } from './modules/dynamicRouter'
import NProgress from '@/utils/nprogress'
import { useUserStore } from '@/store/modules/user'
import { useMenuStore } from '@/store/modules/auth'

// 白名单路由
const whiteList = ['/login', '/404', '/403']

// 创建路由器对象
const router = createRouter({
  history: createWebHashHistory(),
  routes: [...staticRoutes],
  strict: false,
  scrollBehavior: () => ({ left: 0, top: 0 })
})

/**
 * 路由前置守卫
 * @param to - 要进入的路由
 * @param from - 来自哪个路由
 * @param next - 路由的控制权
 */
router.beforeEach(
  async (to: RouteLocationNormalized, from: RouteLocationNormalized, next) => {
    // 1.开启进度条
    NProgress.start()

    try {
      // 2.设置标题
      const title = import.meta.env.VITE_APP_TITLE as string
      document.title = to.meta.title ? `${to.meta.title} - ${title}` : title

      // 3.白名单直接放行
      if (whiteList.includes(to.path)) {
        next()
        return
      }

      // 4.获取用户信息
      const userStore = useUserStore()
      const menuStore = useMenuStore()
      const token = userStore.token
      menuStore.getAuthMenuList()

      // 5.判断是否登录
      if (!token) {
        // 未登录，重定向到登录页
        next({
          path: '/login',
          query: {
            redirect: to.path,
            ...to.query
          }
        })
        return
      }

      // 6.已登录状态访问登录页，重定向到首页
      if (to.path === '/login') {
        // initDynamicRoutes()
        next('/')
        return
      }

      // TODO: 7.权限路由处理
      // const hasPermission = await userStore.buildRoutes()
      // if (!hasPermission) {
      //   next('/403')
      //   return
      // }

      // 8.正常放行
      next()
    } catch (error) {
      // 9.错误处理
      console.error('路由守卫错误:', error)
      next('/500')
    }
  }
)

// 路由后置守卫
router.afterEach(() => {
  NProgress.done()
})

export default router
