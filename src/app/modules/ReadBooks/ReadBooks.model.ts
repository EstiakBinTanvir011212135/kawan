import { model, Schema } from 'mongoose';
import { TReadBooks } from './ReadBooks.interface';
import validator from 'validator';

const ReadBookSchema = new Schema<TReadBooks>({
  // here we take the email cause this user can add book multiple time to remove the uni error add the email
  UserEmail: {
    type: String,
    required: [true, 'From Email is required'],
    validate: {
      validator: (value: string) => validator.isEmail(value),
      message: '{value} is not valid ',
    },
  },

  eBook: {
    type: Schema.Types.ObjectId,
    required: [true, 'book id is must be needed'],
    ref: 'ebook',
  },
  favorite: {
    type: Boolean,
    default: false,
  },
  read_data: {
    type: String,
  },
  title: {
    type: String,
  },
  cover: {
    type: String,
  },
  author: {
    type: String,
  },
  rating: {
    type: Number,
  },
  category: {
    type: String,
  },
  quickSummery: {
    type: String,
  },
  aboutAuthor: {
    type: String,
  },
  audio: {
    type: String,
  },
});

export const ReadBook = model<TReadBooks>('readbook', ReadBookSchema);
