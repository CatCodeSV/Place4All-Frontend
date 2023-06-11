import RestaurantsPanel from '@/views/Admin/Restaurants/RestaurantsPanel.vue';
import UsersPanel from '@/views/Admin/Users/UsersPanel.vue';
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
    name: 'profile-parent',
    component: () => import('@/views/Profile/Profile.vue'),
    children: [
      {
        path: 'usuario',
        name: 'user',
        component: () => import('@/views/Profile/Components/ProfileUser.vue'),
      },
      {
        path: 'favoritos',
        name: 'user-favorites',
        component: () => import('@/views/Profile/Components/ProfileFavorites.vue'),
      },
      {
        path: 'reservas',
        name: 'user-reservations',
        component: () => import('@/views/Profile/Components/ProfileReservations.vue'),
      },
      {
        path: 'privacidad',
        name: 'user-privacy',
        component: () => import('@/views/Profile/Components/ProfilePrivacy.vue'),
      },
      {
        path: 'notificaciones',
        name: 'user-notification',
        component: () => import('@/views/Profile/Components/ProfileNotifications.vue'),
      },
    ],
  },
  {
    path: '/admin',
    name: 'AdminPanel',
    component: () => import('@/views/Admin/AdminPanel.vue'),
    children: [
      {
        path: 'restaurantes',
        name: 'admin-restaurants',
        component: RestaurantsPanel,
      },
      {
        path: 'usuarios',
        name: 'admin-users',
        component: UsersPanel,
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
