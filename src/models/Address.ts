import { ObjectId } from 'mongodb';

export interface Address {
  street: string;
  number: number;
  city: string;
  zipCode: string;
  province: string;
  id: ObjectId;
  createdAt: string;
}
