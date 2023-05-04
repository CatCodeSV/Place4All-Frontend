import { apiClient } from '@/api/apiClient.m';
import { Restaurant } from '@/models/Restaurant';

const baseURL = '/Restaurants';

async function getRestaurants(): Promise<Restaurant[]> {
  const response = await apiClient.getAll<Restaurant>(baseURL);
  console.log(response.data);
  return response.data;
}

async function getRestaurant(id: number | string): Promise<Restaurant> {
  const response = await apiClient.getById<Restaurant>(baseURL, id);
  return response.data;
}

async function updateRestaurant(id: number, restaurant: Restaurant) {
  console.log(restaurant.features);
  const response = await apiClient.putEntity<Restaurant>(baseURL, id, restaurant);
  return response.data;
}

async function getRestaurantsByFeatures(features: number[]) {
  const response = await apiClient.post<Restaurant>(baseURL + '/Features', { features: features });
  return response.data;
}

export default { getRestaurants, getRestaurant, updateRestaurant, getRestaurantsByFeatures };
