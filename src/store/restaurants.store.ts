import { Restaurant } from '@/models/Restaurant';
import { RestaurantSummarized } from '@/models/RestaurantSummarized';
import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useRestaurantStore = defineStore(
  'restaurants',
  () => {
    const restaurantsState = ref<RestaurantSummarized[]>([]);
    const restaurant = ref<Restaurant>();

    //Siempre que es un ref hay que poner value
    function setRestaurants(restaurants: RestaurantSummarized[]) {
      restaurantsState.value = restaurants;
    }

    function setRestaurant(restaurantSet: Restaurant) {
      restaurant.value = restaurantSet;
    }

    function setRestaurantsByQuery(restaurants: RestaurantSummarized[]) {
      return (restaurantsState.value = restaurants);
    }

    function clearRestaurant() {
      restaurant.value = undefined;
    }

    return {
      restaurantsState,
      restaurant,
      clearRestaurant,
      setRestaurants,
      setRestaurant,
      setRestaurantsByQuery,
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
