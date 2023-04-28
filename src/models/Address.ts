import { PDocument } from './PDocument';

export interface Address extends PDocument {
  street: string;
  number: number;
  city: string;
  zipCode: string;
  province: string;
}
