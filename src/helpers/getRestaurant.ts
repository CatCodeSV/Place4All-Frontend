import { apiClient } from '@/api/apiClient.m';
import { Restaurant } from '@/models/Restaurant';

const baseURL = '/Restaurants';

async function getRestaurants(): Promise<Restaurant[]> {
  const response = await apiClient.getAll<Restaurant>(baseURL);
  return response.data;
}

export default { getRestaurants };
