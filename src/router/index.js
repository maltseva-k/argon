import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'home',
    meta: { layout: 'Main' },
    component: () => import('../views/DashboardPage')
  },
  {
    path: '/login',
    name: 'login',
    meta: { layout: 'Empty' },
    component: () => import('../views/LoginPage')
  },
  {
    path: '/register',
    name: 'register',
    meta: { layout: 'Empty' },
    component: () => import('../views/RegisterPage')
  },
  {
    path: '/bill',
    name: 'bill',
    meta: { layout: 'Main' },
    component: () => import('../views/BillingPage')
  },
  {
    path: '/profile',
    name: 'profile',
    meta: { layout: 'Main' },
    component: () => import('../views/ProfilePage')
  },
  {
    path: '/table',
    name: 'table',
    meta: { layout: 'Main' },
    component: () => import('../views/TablesPage')
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'pagenotfound',
    meta: { layout: 'Empty' },
    component: () => import('../views/PageNotFound')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
