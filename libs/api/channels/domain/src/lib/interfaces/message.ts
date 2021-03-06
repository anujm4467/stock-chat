import { Document } from 'mongoose';

import { User } from '@stock-chat/api/shared/user/domain-user';

export interface Message extends Document {
  message: string;
  user: User;
  created_at: Date;
}
