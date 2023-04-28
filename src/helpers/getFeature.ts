import { apiClient } from '@/api/apiClient.m';
import { Features } from '@/models/Features';

const baseURL = '/Features';

async function getFeatures(): Promise<Features[]> {
  const response = await apiClient.getAll<Features>(baseURL);
  console.log(response.data.data);
  return response.data.data;
}

export default { getFeatures };
