import { Types } from 'mongoose';

export type TReadBooks = {
  UserEmail: string; //user id must be needed
  eBook: Types.ObjectId; //ebook id must be needed
  favorite: boolean;
  read_data: string;

  //* all those value come from the EBOOK

  title?: string;
  cover?: string;
  author?: string;
  rating?: number;
  category?: string;
  quickSummery?: string;
  aboutAuthor?: string;
  audio?: File;
  book?: File;
};
