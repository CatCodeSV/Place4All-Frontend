import { Address } from './Address';
import { Features } from './Features';
import { PDocument } from './PDocument';

export interface Restaurant extends PDocument {
  name: string;
  address: Address;
  addressId: number;
  descripcion: string;
  features: Features[];
  phoneNumber: string;
  images: Image[];
  reviews?: {
    reviewsNumber: number;
    reviewsAverage: number;
  };
}

export interface Image extends PDocument {
  link: string;
  restaurantId: number;
}
