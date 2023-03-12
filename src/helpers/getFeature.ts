import { apiClient } from '@/api/apiClient.m';
import { Features } from '@/models/Features';

const baseURL = '/Features';

async function getFeatures(): Promise<Features[]> {
  const response = await apiClient.getAll<Features>(baseURL);
  return response.data;
}

export default { getFeatures };
