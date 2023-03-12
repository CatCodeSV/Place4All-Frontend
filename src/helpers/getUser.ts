import { apiClient } from '@/api/apiClient.m';
import { User } from '@/models/User';

export type Login = {
  email: string;
  password: string;
};
export type LoginResponse = {
  token: string;
  user: User;
};
const login = async (login: Login): Promise<LoginResponse> => {
  const res = await apiClient.post<LoginResponse>('/Users/authenticate', login);
  return res.data;
};

export default { login };
