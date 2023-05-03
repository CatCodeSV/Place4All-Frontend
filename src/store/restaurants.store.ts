import { Features } from '@/models/Features';
import { Restaurant } from '@/models/Restaurant';
import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useRestaurantStore = defineStore(
  'restaurants',
  () => {
    const restaurantsState = ref<Restaurant[]>([]);
    const restaurant = ref<Restaurant>();

    //Siempre que es un ref hay que poner value
    function setRestaurants(restaurants: Restaurant[]) {
      restaurantsState.value = restaurants;
    }

    function setRestaurant(restaurantSet: Restaurant) {
      restaurant.value = restaurantSet;
    }

    function getByFeature(features: Features[]) {
      return restaurantsState.value.filter(restaurant => {
        return features.some(feature => {
          return restaurant.features.includes(feature);
        });
      });
    }
    return {
      restaurantsState,
      restaurant,
      setRestaurants,
      setRestaurant,
      getByFeature,
    };
  },
  {
    persist: true,
  }
);

//Filtro necesidades:
//Llamar a la función que corresponda al filtro checked
//Obtener el valor del filtro checked en el caso de las features el ID
//Función que busca los ID de los restaurantes según el ID de las necesidades checked
//Hacer for each de la lista de restaurantes y llamar al método setRestaurants con Id
