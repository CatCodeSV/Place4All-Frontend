import { Address } from './Address';
import { DisabilityType } from '@/enums/disabilityType';

export interface User {
  address: Address;
  addressId: string;
  birthDate: Date;
  disabilityDegree: number;
  disabilityType: DisabilityType;
  email: string;
  gender: string;
  gsm: string;
  hasDisability: boolean;
  id: string;
  lastName: string;
  name: string;
  userName: string;
}
