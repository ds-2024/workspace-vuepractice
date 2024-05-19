import { createRouter, createWebHistory } from 'vue-router'
import JblogMain from '../views/JblogMain.vue'
import JblogCarousel from '@/views/JblogCarousel.vue'

const routes = [
  {
    path: '/main',
    name: 'JblogMain',
    component: JblogMain
  },
  {
    path: '/carousel',
    name: 'JblogCarousel',
    component: JblogCarousel
  },
 
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
