import { apiClient } from '@/api/apiClient.m';
import { Restaurant } from '@/models/Restaurant';
import { User } from '@/models/User';
import { Gender } from '@/helpers/getUser';
import { DisabilityType } from '@/enums/disabilityType';

const baseURL = '/Administrator';

async function getFullRestaurants(): Promise<Restaurant[]> {
  const response = await apiClient.getAll<Restaurant>(`${baseURL}/Restaurants`);
  return response.data;
}

async function deleteRestaurant(restaurantId: number) {
  const res = await apiClient.deleteById(`${baseURL}/Restaurant`, restaurantId);
  return res.data;
}

async function editRestaurant(restaurantId: number, restaurant: EditRestaurant) {
  const res = await apiClient.put(`${baseURL}/Restaurant/${restaurantId}`, restaurant);
  return res.data;
}

export interface EditRestaurant {
  name: string;
  description: string;
  phoneNumber: string;
}

async function getAllUsers(): Promise<User[]> {
  const response = await apiClient.getAll<User>(`${baseURL}/Users`);
  return response.data;
}

async function deleteUser(userId: string) {
  const res = await apiClient.deleteById(`${baseURL}/User`, userId);
  return res.data;
}

async function editUser(userId: string, user: EditUser) {
  const res = await apiClient.put(`${baseURL}/User/${userId}`, user);
  return res.data;
}

export interface EditUser {
  name: string;
  lastName: string;
  gender: Gender;
  birthDate: Date;
  hasDisability: boolean;
  disabilityType: DisabilityType;
  disabilityDegree: number;
  userName: string;
}

export default {
  deleteRestaurant,
  deleteUser,
  editRestaurant,
  editUser,
  getFullRestaurants,
  getAllUsers,
};
