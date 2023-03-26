import { Features } from './Features';
import { PDocument } from './PDocument';
import { Restaurant } from './Restaurant';
import { User } from './User';

export interface Review extends PDocument {
  value: number;
  restaurant: Restaurant;
  user: User;
  comments: Comments;
}
export interface Comments {
  title: string;
  comment: string;
  informationAccuracy: number;
  hasFeatures: Features[];
}
