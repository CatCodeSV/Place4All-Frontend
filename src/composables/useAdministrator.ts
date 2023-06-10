import { useBase } from '@/composables/useBase';
import getAdministrator, { EditRestaurant, EditUser } from '@/helpers/getAdministrator';
import { Restaurant } from '@/models/Restaurant';
import { User } from '@/models/User';
import { ActionResponse } from '@/composables/ActionResponse';

export const useAdministrator = () => {
  const baseUse = useBase();

  async function getFullRestaurants(): Promise<Restaurant[]> {
    const res = await baseUse.executeApiAction(getAdministrator.getFullRestaurants());
    return res.content!;
  }

  async function deleteRestaurant(restaurantId: number): Promise<ActionResponse<Restaurant>> {
    return await baseUse.executeApiAction(getAdministrator.deleteRestaurant(restaurantId));
  }

  async function editRestaurant(restaurantId: number, restaurant: EditRestaurant): Promise<ActionResponse<Restaurant>> {
    return await baseUse.executeApiAction(getAdministrator.editRestaurant(restaurantId, restaurant));
  }

  async function getAllUsers(): Promise<User[]> {
    return (await baseUse.executeApiAction(getAdministrator.getAllUsers())).content!;
  }

  async function deleteUser(userId: string): Promise<ActionResponse<User>> {
    return await baseUse.executeApiAction(getAdministrator.deleteUser(userId));
  }

  async function editUser(userId: string, user: EditUser): Promise<ActionResponse<User>> {
    return await baseUse.executeApiAction(getAdministrator.editUser(userId, user));
  }

  return {
    deleteUser,
    deleteRestaurant,
    editRestaurant,
    editUser,
    getFullRestaurants,
    getAllUsers,
  };
};
