import VueRouter from 'vue-router'
import Vue from 'vue'
import routers from './routers.js'

Vue.use(VueRouter)
const router = new VueRouter({
  mode: 'history',
  base: '',
  routes: [
    ...routers,
    // {
    //   path: '/save',
    //   name: 'save',
    //   component: () => import('./src/views/save.vue'),
    //   meta: {
    //     title: '保存页面'
    //   }
    // },
    // {
    //   path: '/star',
    //   name: 'star',
    //   component: () => import('./src/views/star.vue'),
    //   meta: {
    //     title: '星星动图'
    //   }
    // }
  ]
})

export default router