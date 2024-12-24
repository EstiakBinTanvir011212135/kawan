import { model, Schema } from 'mongoose';
import { TChat } from './chat.interface';

const ChatSchema = new Schema<TChat>(
  {
    FromEmail: {
      type: Schema.Types.ObjectId,
      required: [true, 'From Email is required'],
      ref: 'user',
    },
    ToEmail: {
      type: String,
      required: [true, 'To Email is required'],
    },
    Message: {
      type: String,
      required: [true, 'To Email is required'],
    },
    isRead: {
      type: Boolean,
      default: false,
    },
    IsDelete: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  },
);

export const Chat = model<TChat>('chat', ChatSchema);
