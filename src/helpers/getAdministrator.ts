import { apiClient } from '@/api/apiClient.m';
import { Restaurant } from '@/models/Restaurant';
import { User } from '@/models/User';

const baseURL = '/Administrator';

async function getFullRestaurants(): Promise<Restaurant[]> {
  const response = await apiClient.getAll<Restaurant>(`${baseURL}/Restaurants`);
  return response.data;
}

async function deleteRestaurant(restaurantId: number) {
  const res = await apiClient.deleteById(`${baseURL}/Restaurant`, restaurantId);
  return res.data;
}

async function getAllUsers(): Promise<User[]> {
  const response = await apiClient.getAll<User>(`${baseURL}/Users`);
  return response.data;
}

export default {
  deleteRestaurant,
  getFullRestaurants,
  getAllUsers,
};
