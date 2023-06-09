import { useBase } from '@/composables/useBase';
import getAdministrator from '@/helpers/getAdministrator';
import { Restaurant } from '@/models/Restaurant';
import { User } from '@/models/User';

export const useAdministrator = () => {
  const baseUse = useBase();

  async function getFullRestaurants(): Promise<Restaurant[]> {
    return (await baseUse.executeApiAction(getAdministrator.getFullRestaurants())).content!;
  }
  async function getAllUsers(): Promise<User[]> {
    return (await baseUse.executeApiAction(getAdministrator.getAllUsers())).content!;
  }
  return {
    getFullRestaurants,
    getAllUsers,
  };
};
