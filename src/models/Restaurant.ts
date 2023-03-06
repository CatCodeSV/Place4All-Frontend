import { ObjectId } from 'mongodb';
import { Address } from './Address';

export interface Restaurant {
  id: ObjectId;
  name: string;
  address: Address;
  descripcion: string;
  phoneNumber: string;
  image: string;
  servicio: any[];
  createdAt: string;
  reviews: {
    reviewsNumber: number;
    reviewsAverage: number;
  };
}
