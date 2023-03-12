import { apiClient } from '@/api/apiClient.m';
import { Restaurant } from '@/models/Restaurant';

const baseURL = '/Restaurants';

async function getRestaurants(): Promise<Restaurant[]> {
  const response = await apiClient.getAll<Restaurant>(baseURL);
  return response.data;
}

async function getRestaurant(id: string): Promise<Restaurant> {
  const response = await apiClient.getById<Restaurant>(baseURL, id);
  return response.data;
}

async function updateRestaurant(id: string, restaurant: Restaurant) {
  console.log(restaurant.servicio);
  const response = await apiClient.putEntity<Restaurant>(baseURL, id, restaurant);
  return response.data;
}
export default { getRestaurants, getRestaurant, updateRestaurant };
