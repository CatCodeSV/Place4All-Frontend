import { apiClient } from '@/api/apiClient.m';
import { InformationAccuracy, Review } from '@/models/Review';
import { Features } from '@/models/Features';

const baseURL = '/Reviews';

async function getReviewByRestaurant(id: number): Promise<Review[]> {
  const response = await apiClient.getById<Review[]>(`${baseURL}/Restaurant`, id);
  return response.data;
}

async function getReviewByUser(id: number): Promise<Review[]> {
  const response = await apiClient.getById<Review[]>(`${baseURL}/Users`, id);
  return response.data;
}

export interface CreateReview {
  title: string;
  value: number;
  comment: string;
  informationAccuracy: InformationAccuracy;
  restaurantId: number;
  additionalFeatures?: Features[];
}

async function postReview(review: CreateReview): Promise<Review> {
  const response = await apiClient.post<Review>(baseURL, review);
  return response.data;
}

export default {
  getReviewByRestaurant,
  getReviewByUser,
  postReview,
};
