import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [

    {
      path: '/pokemones',
      name: 'pokemones',
      component: () => import('../views/PokemonesView.vue'),
    },
    {
      path: '/pokemones/:name',
      name: 'poke',
      component: () => import("../views/PokeView.vue"),
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'NotFound',
      component: () => import("../views/NotFoundView.vue"),
    },
    {
      path: '/pokemones/fav',
      name: 'fav',
      component: () => import("../views/favView.vue"),
    },

  ]
})

export default router
