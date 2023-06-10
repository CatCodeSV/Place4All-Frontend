import { useBase } from '@/composables/useBase';
import getAdministrator from '@/helpers/getAdministrator';
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

  async function getAllUsers(): Promise<User[]> {
    return (await baseUse.executeApiAction(getAdministrator.getAllUsers())).content!;
  }

  async function deleteUser(userId: string): Promise<ActionResponse<User>> {
    return await baseUse.executeApiAction(getAdministrator.deleteUser(userId));
  }

  return {
    deleteUser,
    deleteRestaurant,
    getFullRestaurants,
    getAllUsers,
  };
};
