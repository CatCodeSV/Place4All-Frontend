import { apiClient } from '@/api/apiClient.m';
import { Restaurant } from '@/models/Restaurant';
import { RestaurantSummarized } from '@/models/RestaurantSummarized';

const baseURL = '/Restaurants';

async function getRestaurants(): Promise<RestaurantSummarized[]> {
  const response = await apiClient.getAll<RestaurantSummarized>(baseURL);
  return response.data;
}

async function getRestaurant(id: number | string): Promise<Restaurant> {
  const response = await apiClient.getById<Restaurant>(baseURL, id);
  return response.data;
}

async function getRestaurantsQuery(query: string): Promise<RestaurantSummarized[]> {
  const response = await apiClient.getAll<RestaurantSummarized>(baseURL, `?query=${query}`);
  return response.data;
}

async function getRestaurantsByFeatures(features: number[]): Promise<RestaurantSummarized[]> {
  const response = await apiClient.post<RestaurantSummarized>(`${baseURL}/features`, { features: features });
  return response.data;
}

async function updateRestaurant(id: number, restaurant: Restaurant) {
  const response = await apiClient.putEntity<Restaurant>(baseURL, id, restaurant);
  return response.data;
}

async function getFavoriteRestaurants() {
  const response = await apiClient.getAll<RestaurantSummarized>(`${baseURL}/User`);
  return response.data;
}

export default {
  getFavoriteRestaurants,
  getRestaurant,
  getRestaurants,
  getRestaurantsByFeatures,
  getRestaurantsQuery,
  updateRestaurant,
};
