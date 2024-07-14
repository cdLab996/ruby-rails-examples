import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'hash',
  routes: [
    {
      path: '/a',
      name: 'IndexA',
      component: () => import('../views/indexA.vue'),
      meta: {
        title: 'a',
      },
    },
    {
      path: '/b',
      name: 'IndexB',
      component: () => import('../views/indexB.vue'),
      meta: {
        title: 'b',
      },
    },
  ],
})

export default router
