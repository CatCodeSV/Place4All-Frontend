import { Address } from './Address';
import { Features } from './Features';
import { PDocument } from './PDocument';
import { Review } from './Review';
import { User } from './User';

export interface Restaurant extends PDocument {
  name: string;
  address: Address;
  addressId: number;
  descripcion: string;
  phoneNumber: string;
  images: Image[];
  features: Features[];
  reviews: Review[];
  favoriteUsers: User[];
}

export interface Image extends PDocument {
  link: string;
  restaurantId: number;
}
