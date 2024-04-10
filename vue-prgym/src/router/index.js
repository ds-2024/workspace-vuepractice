import { createRouter, createWebHistory } from 'vue-router'
import MemberLoginView from '../views/MemberLoginView.vue'
import MemberJoinFormView from '../views/MemberJoinFormView.vue'
import MemberModifyFormView from '../views/MemberModifyFormView.vue'

const routes = [
  
  {
    path: '/member/login',
    name: 'MemberLoginView',
    component: MemberLoginView
  },
  {
    path: '/member/join',
    name: 'MemberJoinFormView',
    component: MemberJoinFormView
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