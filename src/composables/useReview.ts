import getReview from '@/helpers/getReview';
import { Review } from '@/models/Review';
import { useBase } from './useBase';

export const useReview = () => {
  const baseUse = useBase();

  async function getReviewsByRestaurant(id: number) : Promise<Review[]> {
    const res = await baseUse.executeApiAction(getReview.getReviewByRestaurant(id));
    return res.content!;
  }

  async function getReviewsByUser(id: number) {
    const res = await baseUse.executeApiAction(getReview.getReviewByUser(id));
    return res.content;
  }

  async function postReview(review: Review) {
    await baseUse.executeApiAction(getReview.postReview(review), (review: Review) => console.log(review));
  }

  return {
    //! Properties
    //! Computed
    //! Métodos
    getReviewsByRestaurant,
    getReviewsByUser,
    postReview,
  };
};
