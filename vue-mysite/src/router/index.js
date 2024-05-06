import { createRouter, createWebHistory } from 'vue-router'
import BoardReadView from '../views/BoardReadView.vue'
import BoardList from '../views/BoardList.vue'
import BoardWriteForm from '../views/BoardWriteForm.vue'
import BoardModifyForm from '../views/BoardModifyForm.vue'



const routes = [
  {
    path: '/board/read',
    name: 'BoardReadView',
    component: BoardReadView
  },
  {
    path: '/board/list',
    name: 'BoardList',
    component: BoardList
  },
  {
    path: '/board/wirteform',
    name: 'BoardWriteForm',
    component: BoardWriteForm
  },
  {
    path: '/board/modifyform',
    name: 'BoardModifyForm',
    component: BoardModifyForm
  },

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
