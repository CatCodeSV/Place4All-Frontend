import { Features } from '@/models/Features';

export interface RestaurantSummarized {
  id: number;
  name: string;
  description: string;
  phoneNumber: string;
  image: string;
  address: string;
  rating: number;
  numberOfReviews: number;
  features: Features[];
}
