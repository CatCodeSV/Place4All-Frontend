import getRestaurant from '@/helpers/getRestaurant';
import { Features } from '@/models/Features';
import { Restaurant } from '@/models/Restaurant';
import { RestaurantSummarized } from '@/models/RestaurantSummarized';
import { useRestaurantStore } from '@/store/restaurants.store';
import { storeToRefs } from 'pinia';
import { useBase } from './useBase';

export const useRestaurant = () => {
  const restaurantStore = useRestaurantStore();
  const baseUse = useBase();
  const { restaurantsState, restaurant } = storeToRefs(restaurantStore);

  async function setRestaurants() {
    await baseUse.executeApiAction(getRestaurant.getRestaurants(), (restaurants: RestaurantSummarized[]) => {
      restaurantStore.setRestaurants(restaurants);
    });
  }

  async function setRestaurantsQuery(query: string) {
    await baseUse.executeApiAction(getRestaurant.getRestaurantsQuery(query), (restaurants: RestaurantSummarized[]) => {
      restaurantStore.setRestaurants(restaurants);
    });
  }

  async function setRestaurantsByFeatures(features: number[]) {
    await baseUse.executeApiAction(getRestaurant.getRestaurantsByFeatures(features), (restaurants: RestaurantSummarized[]) => {
      restaurantStore.setRestaurants(restaurants);
    });
  }

  async function setRestaurant(id: number | string) {
    await baseUse.executeApiAction(getRestaurant.getRestaurant(id), (restaurant: Restaurant) => {
      restaurantStore.setRestaurant(restaurant);
    });
  }

  async function addFeatures(restaurant: Restaurant, features: Features[]) {
    restaurant.features = [...restaurant.features, ...features];
    await baseUse.executeApiAction(getRestaurant.updateRestaurant(restaurant.id!, restaurant), (restaurant: Restaurant) => {
      restaurantStore.setRestaurant(restaurant);
    });
  }

  return {
    //! Properties
    restaurants: restaurantsState,
    restaurant,
    clearRestaurant: restaurantStore.clearRestaurant,
    //! Computed
    //! Métodos
    addFeatures,
    clearRestaurant: restaurantStore.clearRestaurant,
    setRestaurant,
    setRestaurants,
    setRestaurantsQuery,
    setRestaurantsByFeatures,
  };
};
