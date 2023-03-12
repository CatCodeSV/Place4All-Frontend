import { ObjectId } from 'mongodb';
import { Feature } from './Feature';
import { Restaurant } from './Restaurant';
import { User } from './User';

export interface Review {
  value: number;
  restaurant: Restaurant;
  user: User;
  comment: Comment;
  id: ObjectId;
  createdAt: string;
}

export interface Comment /* extends PDocument */ {
  title: string;
  informationAccuracy: number;
  hasFeatures: Feature[];
}
