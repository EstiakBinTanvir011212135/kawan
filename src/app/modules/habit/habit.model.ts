import { model, Schema } from 'mongoose';
import { THabit } from './habit.interface';

const HabitSchema = new Schema<THabit>(
  {
    HabitName: {
      type: String,
      required: [true, 'Habit name is required'],
    },
    user: {
      type: Schema.Types.ObjectId,
      required: [true, 'User id is required'],
      unique: true,
      ref: 'user',
    },
    Description: {
      type: String,
      required: [true, 'Description is required'],
    },
    status: {
      type: String,
      enum: ['TODO', 'InPROGRESS', 'COMPLETE'],
      default: 'TODO',
    },
    StartDate: {
      type: Date,
    },
    EndDate: {
      type: Date,
    },
  },
  {
    timestamps: true,
  },
);

export const Habit = model<THabit>('habit', HabitSchema);
