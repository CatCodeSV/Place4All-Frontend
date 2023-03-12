import { Address } from './Address';
import { Features } from './Features';
import { PDocument } from './PDocument';

export interface Restaurant extends PDocument {
  name: string;
  address: Address;
  descripcion: string;
  phoneNumber: string;
  images: string[];
  servicio: Features[];
  reviews?: {
    reviewsNumber: number;
    reviewsAverage: number;
  };
}
