import { createRouter, createWebHistory } from 'vue-router'
import firebase from 'firebase/compat/app'

const routes = [
  {
    path: '/',
    name: 'home',
    meta: { layout: 'Main', auth: true },
    component: () => import('../views/DashboardPage')
  },
  {
    path: '/login',
    name: 'login',
    meta: { layout: 'SignIn', notAuth: true },
    component: () => import('../views/LoginPage')
  },
  {
    path: '/register',
    name: 'register',
    meta: { layout: 'SignUp', notAuth: true },
    component: () => import('../views/RegisterPage')
  },
  {
    path: '/profile',
    name: 'profile',
    meta: { layout: 'Main', auth: true },
    component: () => import('../views/ProfilePage')
  },
  {
    path: '/table',
    name: 'table',
    meta: { layout: 'Main', auth: true },
    component: () => import('../views/TablesPage')
  },
  {
    path: '/pageunderconstruction',
    name: 'StubPage',
    meta: { layout: 'SignIn' },
    component: () => import('../views/StubPage')
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'pagenotfound',
    meta: { layout: 'SignIn' },
    component: () => import('../views/PageNotFound')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})
router.beforeEach((to, from, next) => {
  const currentUser = firebase.auth().currentUser
  // const requireAuth = to.matched.some(record => (record.meta).auth)

  if (to.meta.auth && !currentUser) {
    next('/login?message=login')
  } else if (currentUser && to.meta.notAuth) {
    next('/')
  } else {
    next()
  }
})
export default router
