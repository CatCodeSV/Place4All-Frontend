import { Features } from './Features';
import { PDocument } from './PDocument';
import { Restaurant } from './Restaurant';
import { User } from './User';

export interface Review extends PDocument {
  value: number;
  restaurant: Restaurant;
  user: User;
  comment: Comment;
}

export interface Comment {
  title: string;
  comments: string;
  informationAccuracy: number;
  hasFeatures: Features[];
}
