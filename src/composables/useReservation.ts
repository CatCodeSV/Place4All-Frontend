import { useBase } from '@/composables/useBase';
import getReservation, { CreateReservation } from '@/helpers/getReservation';

export const useReservation = () => {
  const baseUse = useBase();

  async function postReservation(reservation: CreateReservation) {
    const res = await baseUse.executeApiAction(getReservation.createReservation(reservation));
    return res.content!;
  }

  async function getUserReservations() {
    const res = await baseUse.executeApiAction(getReservation.getUserReservations());
    return res.content!;
  }

  return {
    //! Properties
    //! Computed
    //! Métodos
    postReservation,
    getUserReservations,
  };
};
