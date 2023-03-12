import getFeature from '@/helpers/getFeature';
import { Features } from '@/models/Features';
import { useFeatureStore } from '@/store/features.store';
import { storeToRefs } from 'pinia';
import { useBase } from './useBase';

export const useFeature = () => {
  const featureStore = useFeatureStore();
  const baseUse = useBase();
  const { featuresState } = storeToRefs(featureStore);

  async function setFeatures() {
    await baseUse.executeApiAction(getFeature.getFeatures(), (features: Features[]) => featureStore.setFeatures(features));
  }
  return {
    features: featuresState,
    setFeatures,
  };
};
