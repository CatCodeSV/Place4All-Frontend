import { useBase } from '@/composables/useBase';
import getAdministrator from '@/helpers/getAdministrator';
import { Restaurant } from '@/models/Restaurant';

export const useAdministrator = () => {
  const baseUse = useBase();

  async function getFullRestaurants(): Promise<Restaurant[]> {
    return (await baseUse.executeApiAction(getAdministrator.getFullRestaurants())).content!;
  }
  return {
    getFullRestaurants,
  };
};
