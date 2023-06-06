export interface Reservation {
  id?: number;
  restaurantId?: number;
  people?: number;
  features?: number[];
  specialInstructions?: string;
  date?: Date;
}
