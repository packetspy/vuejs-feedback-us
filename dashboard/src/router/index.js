import { createRouter, createWebHistory } from 'vue-router'

const Home = () => import('../views/Home')
const Credentials = () => import('../views/Credentials')
const Feedbacks = () => import('../views/Feedbacks')

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/credentials',
    name: 'Credentials',
    component: Credentials,
    meta: {
      hasAuth: true
    }
  },
  {
    path: '/feedbacks',
    name: 'Fedbacks',
    component: Feedbacks,
    meta: {
      hasAuth: true
    }
  },
  {
    path: '/:pathMatch(.*)*',
    redirect: {name: 'Home'}
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
