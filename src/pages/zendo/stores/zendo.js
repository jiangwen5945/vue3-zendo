import { defineStore } from 'pinia'
import menuList from '../data/menus'

export const useZendoStore = defineStore('zendo', {
  state: () => {
    return {
      isCollapse: false,
      menuList
    }
  },
  actions: {
    toggleCollapse() {
      this.isCollapse = !this.isCollapse
      console.log('toggleCollapse', this.isCollapse)
    }
  }
})
