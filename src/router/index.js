import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
     component: () => import(/* webpackChunkName: "home" */ '../views/Home.vue')
  },
  {
    path: '/about',
    name: 'About',
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/proyectos',
    name: 'Proyectos',
    component: () => import(/* webpackChunkName: "proyectos" */ '../views/Proyectos.vue')
  },
  {
    path: '/fotos/:id',
    name: 'Fotos',
    component: () => import(/* webpackChunkName: "fotos" */ '../views/Fotos.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
