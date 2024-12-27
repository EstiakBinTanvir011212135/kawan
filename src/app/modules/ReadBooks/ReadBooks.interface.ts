import { Types } from 'mongoose';

export type TReadBooks = {
  user: Types.ObjectId;
  eBook: Types.ObjectId;
  favorite: boolean;
  rating: string;
  read_data: string;
  review: string;
};
