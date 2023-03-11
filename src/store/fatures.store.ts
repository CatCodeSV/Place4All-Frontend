import { Feature } from '@/models/Feature';
import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useFeaturesStore = defineStore('features', () => {
  const featuresState = ref<Feature[]>([]);

  function setFeatures(features: Feature[]) {
    featuresState.value = features;
  }

  return {
    featuresState,
    setFeatures,
  };
});
