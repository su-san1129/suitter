import { axios } from '../../../lib/axios';
import { RegisterFormInputs } from '../types/Register';

export const register = (data: RegisterFormInputs): Promise<string> => {
  return axios.post(`users`, data);
};
