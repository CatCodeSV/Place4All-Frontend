import { Address } from './Address';
import { PDocument } from './PDocument';

export interface User extends PDocument {
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
