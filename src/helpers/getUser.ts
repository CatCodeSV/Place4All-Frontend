import { apiClient } from '@/api/apiClient.m';

const baseURL = '/Login';

export type Login = {
  email: string;
  password: string;
};
const login = async (login: Login) => {
  const res = await apiClient.post(baseURL, login);
  return res.data;
};

export default { login };
