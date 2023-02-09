import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import StudentView from '../views/StudentView.vue'
import ViewStudent from '../views/ViewStudent.vue'
import EditStudent from '../views/EditStudent.vue'
import LoginView from '../views/LoginView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/students',
      name: 'students',
      component: StudentView
    },
    {
      path: '/view-student',
      name: 'view-student',
      component: ViewStudent
    },
    {
      path: '/edit-student',
      name: 'edit-student',
      component: EditStudent
    },
    {
      path: '/login',
      name: 'login',
      component: LoginView
    }
  ]
})

export default router
