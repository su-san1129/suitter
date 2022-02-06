import { BaseEntity } from '../../../types';
import { User } from '../../users/types';

export interface Post extends BaseEntity {
  user: User;
  content: string;
  files?: string[];
}
