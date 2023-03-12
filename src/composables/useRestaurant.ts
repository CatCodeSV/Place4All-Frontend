import getRestaurant from '@/helpers/getRestaurant';
import { Restaurant } from '@/models/Restaurant';
import { useRestaurantStore } from '@/store/restaurants.store';
import { storeToRefs } from 'pinia';
import { useBase } from './useBase';

export const useRestaurant = () => {
  const restaurantStore = useRestaurantStore();
  const baseUse = useBase();
  const { restaurantsState } = storeToRefs(restaurantStore);

  async function setRestaurants() {
    await baseUse.executeApiAction(getRestaurant.getRestaurants(), (restaurants: Restaurant[]) =>
      restaurantStore.setRestaurants(restaurants)
    );
  }

  function filterRestaurantsByFeature(features: { value: string; title: string }[]) {
    return restaurantStore.getByFeature(features);
  }

  return {
    //! Properties
    restaurants: restaurantsState,
    //! Computed
    //! Metodos
    setRestaurants,
    filterRestaurantsByFeature,
  };
};
