import { apiClient } from '@/api/apiClient.m';
import { Review } from '@/models/Review';

const baseURL = '/Reviews';

async function getReviewByRestaurant(id: number): Promise<Review[]> {
  const response = await apiClient.getById<Review[]>(`${baseURL}/Restaurants`, id);
  return response.data.data;
}

async function getReviewByUser(id: number): Promise<Review[]> {
  const response = await apiClient.getById<Review[]>(`${baseURL}/Users`, id);
  return response.data.data;
}

async function postReview(review: Review) {
  const response = await apiClient.post<Review>(baseURL, review);
  return response.data.data;
}

export default {
  getReviewByRestaurant,
  getReviewByUser,
  postReview,
};
