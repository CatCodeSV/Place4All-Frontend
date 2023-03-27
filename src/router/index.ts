// Composables
import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  {
    path: '/',
    component: () => import('@/views/Home.vue'),
  },
  {
    path: '/restaurantes',
    name: 'Restaurants',
    component: () => import('@/views/Restaurants/Restaurants.vue'),
  },
  {
    path: '/restaurantes/:id',
    name: 'Restaurant',
    component: () => import('@/views/Restaurants/Restaurant/Restaurant.vue'),
  },
  {
    path: '/perfil',
    name: 'UserProfile',
    component: () => import('@/views/Users/UserProfile.vue'),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
