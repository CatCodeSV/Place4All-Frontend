export interface Reservation {
  id?: number;
  restaurantId?: number;
  restaurantName?: string;
  people?: number;
  features?: number[];
  specialInstructions?: string;
  date?: Date;
}
