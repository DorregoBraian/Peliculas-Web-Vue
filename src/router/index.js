import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/home',
    name: 'home',
    component: () => import(/* webpackChunkName: "home" */ '@/views/HomeView.vue')
  },
  {
    path: '/',
    name: 'home2',
    component: () => import(/* webpackChunkName: "home" */ '@/views/HomeView2.vue')
  },
  {
    path: '/about',
    name: 'about',
    component: () => import(/* webpackChunkName: "about" */ '@/views/AboutView.vue')
  },
  {
    path: '/peliculas',
    name: 'peliculas',
    component: () => import(/* webpackChunkName: "peliculas" */ '@/views/PeliculasView.vue')
  },
  {
    path: '/categorias',
    name: 'categorias',
    component: () => import(/* webpackChunkName: "categorias" */ '@/views/CategoriasView.vue')
  },
  {
    path: '/formulario',
    name: 'formulario',
    component: () => import(/* webpackChunkName: "formulario" */ '@/views/FormularioView.vue')
  },
  {
    path: '/search/:movieTitle',
    name: 'search',
    component: () => import(/* webpackChunkName: "search" */ '@/views/SearchView.vue')
  },
  {
    path: '/info-pelicula',
    name: 'info-pelicula',
    component: () => import(/* webpackChunkName: "info-pelicula" */ '@/views/InfoPeliculaView.vue')
  },
  {
    path: '/favoritos',
    name: 'favoritos',
    component: () => import(/* webpackChunkName: "favoritos" */ '@/views/FavoritosView.vue')
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
