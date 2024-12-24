import { Types } from 'mongoose';

export type TChat = {
  FromEmail: Types.ObjectId;

  ToEmail: string;

  Message: string;

  isRead?: boolean;

  IsDelete?: boolean;
};
