import { createRouter, createWebHistory } from 'vue-router'
import MemberLoginView from '../views/MemberLoginView.vue'
import AfterLoginView from '../views/AfterLoginView.vue'
import MemberModifyFormView from '../views/MemberModifyFormView.vue'

const routes = [
  
  {
    path: '/member/login',
    name: 'MemberLoginView',
    component: MemberLoginView
  },
  {
    path: '/member/logininfo',
    name: 'AfterLoginView',
    component: AfterLoginView
  },
  {
    path: '/member/modify',
    name: 'MemberModifyFormView',
    component: MemberModifyFormView
  },  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router