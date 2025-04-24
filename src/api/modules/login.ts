import instance from '@/api/request'
import menuList from '@/assets/json/menuList.json'
import { type IReqLoginParam } from '@/api/interface'

// 登录
export const login = (data: IReqLoginParam) => {
  return instance.post('/login', data)
}

// 获取菜单
export const menu = () => {
  // return instance.post('/menu',data)
  return menuList
}
