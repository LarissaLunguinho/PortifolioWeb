import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'MainView',
    component: () => import('../views/MainView.vue')
  },
  {
    path: '/sobremim',
    name: 'AboutMeView',
    component: () => import('../views/AboutMeView.vue')
  },
  {
    path: '/skills',
    name: 'SkillsView',
    component: () => import('../views/SkillsView.vue')
  },
  {
    path: '/portifolio',
    name: 'PortifolioView',
    component: () => import('../views/PortifolioView.vue')
  },
]

const router = new VueRouter({
  routes
})

export default router
