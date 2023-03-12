import { Features } from '@/models/Features';
import { Restaurant } from '@/models/Restaurant';
import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useRestaurantStore = defineStore('restaurants', () => {
  const restaurantsState = ref<Restaurant[]>([]);
  const restaurant = ref<Restaurant>();

  function setRestaurants(restaurants: Restaurant[]) {
    restaurantsState.value = restaurants;
  }

  function setRestaurant(restaurantSet: Restaurant) {
    restaurant.value = restaurantSet;
  }

  function getByFeature(features: Features[]) {
    return restaurantsState.value.filter(restaurant => {
      return features.some(feature => {
        return restaurant.servicio.includes(feature);
      });
    });
  }
  return {
    restaurantsState,
    restaurant,
    setRestaurants,
    setRestaurant,
  };
});
