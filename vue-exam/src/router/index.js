import { createRouter, createWebHistory } from 'vue-router'
import Ex01View from '../views/Ex01View.vue'
import Ex02View from '../views/Ex02View.vue'
import Ex03View from '../views/Ex03View.vue'



const routes = [
  {
    path: '/1',
    name: 'ex01',
    component: Ex01View
  },
  {
    path: '/2',
    name: 'ex02',
    component: Ex02View
  },
  {
    path: '/3',
    name: 'ex03',
    component: Ex03View
  }
  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
