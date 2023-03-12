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
export default { getRestaurants, getRestaurant };
