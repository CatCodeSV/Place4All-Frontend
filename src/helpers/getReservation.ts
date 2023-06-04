import { Reservation } from '@/models/Reservation';
import { apiClient } from '@/api/apiClient.m';

const baseURL = '/Reservations';

async function createReservation(createReservation: CreateReservation) {
  const response = await apiClient.post<Reservation>(baseURL, createReservation);
  return response.data;
}

export type CreateReservation = {
  specialInstructions: string;
  people: number;
  date: Date;
  restaurantId: number;
  features: number[];
};

export default {
  createReservation,
};
