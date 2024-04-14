import { createRouter, createWebHistory } from 'vue-router'
import LoginView from '@/views/LoginView.vue'
import LoginFormView from '@/views/LoginFormView.vue'
import LoginScsView from '@/views/LoginScsView.vue'

const routes = [
  {
    path: '/login',
    name: 'LoginView',
    component: LoginView
  },
  {
    path: '/loginform',
    name: 'LoginFormView',
    component: LoginFormView
  },
  {
    path: '/loginsuccess',
    name: 'LoginScsView',
    component: LoginScsView
  },
  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
