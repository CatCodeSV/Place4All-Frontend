import { apiClient } from '@/api/apiClient.m';
import { Restaurant } from '@/models/Restaurant';

const baseURL = '/Restaurants';

async function getRestaurants(): Promise<Restaurant[]> {
  const response = await apiClient.getAll<Restaurant>(baseURL);
  console.log(response.data.data);
  return response.data.data;
}

async function getRestaurant(id: number | string): Promise<Restaurant> {
  const response = await apiClient.getById<Restaurant>(baseURL, id);
  return response.data.data;
}

async function updateRestaurant(id: number, restaurant: Restaurant) {
  console.log(restaurant.features);
  const response = await apiClient.putEntity<Restaurant>(baseURL, id, restaurant);
  return response.data.data;
}
export default { getRestaurants, getRestaurant, updateRestaurant };
