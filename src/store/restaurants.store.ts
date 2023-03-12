import { Restaurant } from '@/models/Restaurant';
import { defineStore } from 'pinia';
import { computed, ref } from 'vue';

export const useRestaurantStore = defineStore('restaurants', () => {
  const restaurantsState = ref<Restaurant[]>([]);

  //Siempre que es un ref hay que poner value
  function setRestaurants(restaurants: Restaurant[]) {
    restaurantsState.value = restaurants;
  }

  //function getByFeature prarámetro de entrada = arrayFeature, return elementos del array coincidentes función some
  function getByFeature(features: string[]) {
    debugger;
    return restaurantsState.value.filter(restaurant => {
      return features.some(feature => {
        return restaurant.servicio.includes(feature);
      });
    });
  }

  const filterRestaurants = computed<Restaurant[]>((filter: string[]) => {
    return getByFeature(filter);
  });

  return {
    restaurantsState,
    filterRestaurants,
    setRestaurants,
    getByFeature,
  };
});

//Filtro necsidades:
//Llamar a la función que corresponda al filtro checkeado
//Obtener el valor del filtro checheado en el caso de las features el id
//Función que busca los Id de los restaurantes según el id de las necesidades checeadas
//Hacer for each de la lista de restaurantes y llamar al método setReataurants con Id
