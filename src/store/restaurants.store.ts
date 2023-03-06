import { Restaurant } from '@/models/Restaurant';
import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useRestaurantStore = defineStore('restaurants', () => {
  const restaurantsState = ref<Restaurant[]>([]);

  function setRestaurants(restaurants: Restaurant[]) {
    restaurantsState.value = restaurants;
  }

  return {
    restaurantsState,
    setRestaurants,
  };
});
