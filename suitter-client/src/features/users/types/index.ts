import { BaseEntity } from '../../../types';

export interface User extends BaseEntity {
  name: string;
  email: string;
  password: string;
  phoneNumber: string;
  isPrivate: boolean;
  icon: string;
}
