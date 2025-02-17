import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../page/home.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../page/about.vue'),
    }

  ],
})

export default router
