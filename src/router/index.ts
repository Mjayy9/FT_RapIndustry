import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from "@/views/AboutView.vue";
import ProgramsView from "@/views/ProgramsView.vue";
import RappersAndProducersView from "@/views/RappersAndProducersView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/home',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/programs',
      name: 'programs',
      component: ProgramsView,
    },
    {
      path: '/rappers_and_producers',
      name: 'rappers and producers',
      component: RappersAndProducersView,
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue'),
    },
  ],
})

export default router
