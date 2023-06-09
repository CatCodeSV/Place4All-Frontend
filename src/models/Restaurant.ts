import { Address } from './Address';
import { Features } from './Features';
import { PDocument } from './PDocument';
import { Review } from './Review';
import { User } from './User';

export interface Restaurant extends PDocument {
  address: Address;
  addressId: number;
  description: string;
  favoriteUsers: User[];
  features: Features[];
  images: Image[];
  name: string;
  numberOfReviews: number;
  phoneNumber: string;
  rating: number;
  reviews: Review[];
  creator: string;
  createDate: Date;
  updateDate: Date;
}

export interface Image extends PDocument {
  link: string;
  restaurantId: number;
}
