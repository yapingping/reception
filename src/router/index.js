import { createRouter, createWebHistory } from 'vue-router'
// 引入组件
import login from 'views/login'

import main from 'views/main'

import home from 'views/home'

import activity from 'views/activity'

import column from 'views/column'
import science from 'views/science'
import splendidmonent from 'views/splendidmonent'

import user from 'views/user'




const routes = [
  {
    path: '/',
    redirect: '/login'
  },
  {
    path: '/login',
    component: login,
  },
  {
    path: '/main',
    name: 'main',
    component: main,
    children: [
      {
        path: '',
        redirect: '/home' // 默认显示主页面
      },
      {
        path: '/home',
        component: home,
        children: [],
      },
      {
        path: '/activity',
        component: activity,
        children: [],
      },
      {
        path: '/column',
        component: column,
        children: [
          {
            path: '',
            redirect:'/science'
          },
          {
            path:'/science',
            component:science
          },
          {
            path:'/splendidmonent',
            component:splendidmonent,
          }
        ],
      },
      {
        path: '/user',
        component: user,
        children: [],
      }
    ]
  }
]

const router = createRouter({
  // 路由的模式
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
