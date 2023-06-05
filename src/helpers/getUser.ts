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

export interface CreateUser {
  name: string;
  lastName: string;
  email: string;
  password: string;
  gender: Gender;
  birthDate: Date;
  hasDisability: boolean;
  disabilityDegree?: number;
  disabilityType?: string;
  phoneNumber: string;
  street: string;
  number: number;
  city: string;
  zipCode: string;
  province: string;
}

const createUser = async (createUser: CreateUser) => {
  const res = await apiClient.post(`${baseURL}/Register`, createUser);
  return res.data;
};

export enum Gender {
  Male = 1,
  Female = 2,
  NonBinary = 3,
  Other = 4,
}

export default { login, createUser };
