import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

import menuList from '../data/menus'

// const dynamicRouting = menuList.map((e) => {
//   let tempArr = []
//   if (e.children) {
//     tempArr.push(
//       ...e.children.map((v) => {
//         return {
//           path: v.url,
//           component: v.component
//         }
//       })
//     )
//   } else {
//     tempArr.push({ path: e.url, component: e.component })
//   }
//   return tempArr
// })

const dynamicRouting = []
menuList.forEach((e) => {
  if (e.children) {
    e.children.forEach((v) => {
      dynamicRouting.push({
        path: v.url,
        component: () => import(`../views/${v.component}.vue`)
      })
    })
  } else {
    dynamicRouting.push({ path: e.url, component: () => import(`../views/${e.component}.vue`) })
  }
})

console.log('dynamicRouting', dynamicRouting)

const router = createRouter({
  // history: createWebHistory(import.meta.env.BASE_URL),
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      children: dynamicRouting
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/LoginView.vue')
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'NotFound',
      component: () => import('../views/404View.vue'),
      beforeEnter: (to, from) => {
        console.log('路由独享的守卫 - beforeEnter')
        // return false
      }
    }
  ]
})

router.beforeEach((to, from) => {
  console.log('全局前置守卫 - beforeEach')
  // if (to.meta.permission) {
  // } else {
  // return {
  //   path: '/login',
  //   // 保存我们所在的位置，以便以后再来
  //   query: { redirect: to.fullPath }
  // }
  // }
})

router.beforeResolve((to, from) => {
  console.log('全局解析守卫 - beforeResolve')
})

// 你也可以注册全局后置钩子，然而和守卫不同的是，这些钩子不会接受 next 函数也不会改变导航本身：
router.afterEach((to, from) => {
  console.log('全局后置钩子 - afterEach')
})

export default router
