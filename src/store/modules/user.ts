import { defineStore } from 'pinia'
import type { UserState } from '@/store/interface'
import { piniaSessionPersistConfig } from '@/store/config'

export const useUserStore = defineStore('user', {
  state: (): UserState => {
    return {
      token: '',
      userInfo: {
        name: 'grace-admin'
      }
    }
  },

  actions: {
    setToken(token: string) {
      this.token = token
    },
    // Set setUserInfo
    setUserInfo(userInfo: UserState['userInfo']) {
      this.userInfo = userInfo
    }
  },

  // 持久化配置
  persist: piniaSessionPersistConfig('user', ['token', 'userInfo'])
})
