import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'

const router = createRouter({
  // HTML5 mode is recommended
  // https://router.vuejs.org/guide/essentials/history-mode.html#HTML5-Mode
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/recipes',
      name: 'recipes',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('@/views/RecipesView.vue')
    },
    {
      path: '/favourites',
      name: 'favourites',
      component: () => import('@/views/FavouritesView.vue')
    },
    { // catch-all fallback route for 404 error, redirecting to home page
      path: '/:pathMatch(.*)*',
      name: 'not-found',
      redirect: '/'
      // alternatively, use a custom 404 error page
      // component: () => import('@/views/NotFoundView.vue')
    }
  ]
})

export default router
