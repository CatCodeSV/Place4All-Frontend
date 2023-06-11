import { Features } from './Features';
import { PDocument } from './PDocument';
import { Restaurant } from './Restaurant';

export interface Review extends PDocument {
  additionalFeatures: Features[];
  comment: string;
  informationAccuracy: InformationAccuracy;
  restaurantId: number;
  restaurant: Restaurant;
  title: string;
  userName: string;
  value: number;
}

export enum InformationAccuracy {
  VeryGood = 1,
  Good = 2,
  Bad = 3,
  VeryBad = 4,
}
