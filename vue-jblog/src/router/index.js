import { createRouter, createWebHistory } from 'vue-router'
import JblogMain from '../views/JblogMain.vue'

const routes = [
  {
    path: '/main',
    name: 'JblogMain',
    component: JblogMain
  },
 
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
