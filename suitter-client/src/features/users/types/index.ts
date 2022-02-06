import { BaseEntity } from '../../../types';

export interface User extends BaseEntity {
  name: string;
  email: string;
  password: string;
  phoneNumber: number;
  isPrivate: boolean;
  icon: string;
}
