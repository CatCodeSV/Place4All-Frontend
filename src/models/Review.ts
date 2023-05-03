import { Features } from './Features';
import { PDocument } from './PDocument';
import { Restaurant } from './Restaurant';
import { User } from './User';

export interface Review extends PDocument {
  value: number;
  restaurant: Restaurant;
  user: User;
  comment: string;
  informationAcuracy: InformationAcuracy;
  aditionalFeatures: Features[];
}

export enum InformationAcuracy {
  VeryGood = 1,
  Good = 2,
  Bad = 3,
  VaryBad = 4,
}
