import { Schema } from 'mongoose';
import { TReadBooks } from './ReadBooks.interface';

const ReadBooks = new Schema<TReadBooks>({
  user: {
    type: Schema.Types.ObjectId,
    required: [true, 'User id is required'],
    unique: true,
    ref: 'user',
  },
  eBook: {
    type: Schema.Types.ObjectId,
    required: [true, 'book id is required'],
  },
});
