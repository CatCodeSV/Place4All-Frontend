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
          return restaurant.servicio.includes(feature);
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

//Filtro necsidades:
//Llamar a la función que corresponda al filtro checkeado
//Obtener el valor del filtro checheado en el caso de las features el id
//Función que busca los Id de los restaurantes según el id de las necesidades checeadas
//Hacer for each de la lista de restaurantes y llamar al método setReataurants con Id
