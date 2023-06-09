import { apiClient } from '@/api/apiClient.m';
import { Restaurant } from '@/models/Restaurant';

const baseURL = '/Administrator';

async function getFullRestaurants(): Promise<Restaurant[]> {
  const response = await apiClient.getAll<Restaurant>(`${baseURL}/Restaurants`);
  return response.data;
}

export default {
  getFullRestaurants,
};
