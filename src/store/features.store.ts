import { Features } from '@/models/Features';
import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useFeatureStore = defineStore(
  'features',
  () => {
    const featuresState = ref<Features[]>([]);

    function setFeatures(features: Features[]) {
      featuresState.value = features;
    }

    return {
      featuresState,
      setFeatures,
    };
  },
  {
    persist: true,
  }
);
