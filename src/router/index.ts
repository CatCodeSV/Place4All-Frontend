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
  /* {
    path: '/perfil1',
    name: 'UserProfile',
    component: () => import('@/views/Users/UserProfile.vue'),
  }, */
  /**Prueba profile */
  {
    path: '/perfil',
    name: 'profile-parent' /**Padre */,
    //component: () => import('@/views/Profile/Profile.vue'),
    children: [
      /**childern -> perfil/user */
      {
        path: 'usuario',
        name: 'user',
        component: () => import('@/views/Profile/Components/ProfileUser.vue'),
      } /*perfil datos usuario*/,
      {
        path: 'favoritos',
        name: 'user-favorites',
        component: () => import('@/views/Profile/Components/ProfileFavorites.vue'),
      } /*perfil favoritos*/,
      {
        path: 'reservas',
        name: 'user-reservations',
        component: () => import('@/views/Profile/Components/ProfileReservations.vue'),
      } /*perfil reservas*/,
      {
        path: 'privacidad',
        name: 'user-privacy',
        component: () => import('@/views/Profile/Components/ProfilePrivacy.vue'),
      } /*perfil password*/,
      {
        path: 'notificaciones',
        name: 'user-notification',
        component: () => import('@/views/Profile/Components/ProfileNotifications.vue'),
      } /*perfil avisos*/,
    ],
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
