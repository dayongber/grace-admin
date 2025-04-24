import { defineStore } from 'pinia'
import { menu } from '@/api/modules/login'

export const useMenuStore = defineStore('menu', {
  state: (): any => {
    return {
      authMenuList: []
    }
  },
  getters: {
    showMenuList: (state) => state.authMenuList
  },
  actions: {
    async getAuthMenuList() {
      const list = await menu()
      this.authMenuList = list.data
    }
  }
})
