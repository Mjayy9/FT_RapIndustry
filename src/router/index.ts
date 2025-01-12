import { createRouter, createWebHistory } from 'vue-router'
import HomeView from "@/views/HomeView.vue";
import ProgramsView from "@/views/ProgramsView.vue";
import RappersAndProducersView from "@/views/RappersAndProducersView.vue";
import StoreView from "@/views/StoreView.vue";
import Cart from "@/components/Cart.vue";
import ContactView from "@/views/ContactView.vue";
import ThankYouPage from "@/views/ThankYouPage.vue";
import NotFoundView from "@/views/NotFoundView.vue";

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
      path: '/store',
      name: 'store',
      component: StoreView,
    },
    {
      path: '/cart',
      name: 'cart',
      component: Cart,
    },
    {
      path: '/contact',
      name: 'contact',
      component: ContactView,
    },
    {
      path: '/thankyoupage',
      name: 'thankyoupage',
      component: ThankYouPage,
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'notfound',
      component: NotFoundView,
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
