import getRestaurant from '@/helpers/getRestaurant';
import { Features } from '@/models/Features';
import { Restaurant } from '@/models/Restaurant';
import { useRestaurantStore } from '@/store/restaurants.store';
import { storeToRefs } from 'pinia';
import { useBase } from './useBase';

export const useRestaurant = () => {
  const restaurantStore = useRestaurantStore();
  const baseUse = useBase();
  const { restaurantsState, restaurant } = storeToRefs(restaurantStore);

  async function setRestaurants() {
    await baseUse.executeApiAction(getRestaurant.getRestaurants(), (restaurants: Restaurant[]) =>
      restaurantStore.setRestaurants(restaurants)
    );
  }

  async function setRestaurant(id: string) {
    await baseUse.executeApiAction(getRestaurant.getRestaurant(id), (restaurant: Restaurant) => {
      restaurantStore.setRestaurant(restaurant);
    });
  }

  async function addFeatures(restaurant: Restaurant, features: Features[]) {
    restaurant.servicio = [...restaurant.servicio, ...features];
    await baseUse.executeApiAction(getRestaurant.updateRestaurant(restaurant.stringId, restaurant), (restaurant: Restaurant) => {
      restaurantStore.setRestaurant(restaurant);
    });
  }

  return {
    //! Properties
    restaurants: restaurantsState,
    restaurant,
    //! Computed
    //! Metodos
    addFeatures,
    setRestaurants,
    setRestaurant,
  };
};
