import { apiClient } from '@/api/apiClient.m';
import { Feature } from '@/models/Feature';

const baseURL = '/Features';

async function getFeatures(): Promise<Feature[]> {
  const response = await apiClient.getAll<Feature>(baseURL);
  return response.data;
}

export default { getFeatures };
