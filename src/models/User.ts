import { ObjectId } from 'mongodb';
import { Address } from './Address';

export interface User {
  id: ObjectId;
  name: string;
  lastName: string;
  gender: string;
  age: number;
  address: Address;
  hasDisability: boolean;
  disabilityDegree: number;
  email: string;
  password: string;
}
