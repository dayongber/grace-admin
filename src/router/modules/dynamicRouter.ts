import { useUserStore } from '@/store/modules/user'
import { useMenuStore } from '@/store/modules/auth'

import router from '@/router/index'

// 引入 views 文件夹下所有 vue 文件
const modules = import.meta.glob('@/views/**/*.vue')
console.log(modules, 'modules')

export const initDynamicRoutes = async () => {
  const userStore = useUserStore()
  const authStore = useMenuStore()

  try {
    if (!authStore.authMenuList.length) {
      ElMessage.warning('没有权限，请联系管理员！')
      return
    }
    authStore.authMenuList.forEach((item: any) => {
      console.log(item, 666)
      // 1.动态添加路由
      router.addRoute(item)
    })
  } catch (error) {
    // 当菜单请求出错时，重定向到登陆页
    userStore.setToken('')
    router.replace('/login')
    return Promise.reject(error)
  }
}
