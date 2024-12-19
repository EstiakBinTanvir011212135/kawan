import { Types } from 'mongoose';

export type TDailyPractice = {
  StartDate: Date;
  EndDate?: Date;
};

export type THabit = {
  HabitName: string;
  user: Types.ObjectId;
  Description: string;
  DailyPractice: TDailyPractice[];
  Progress?: string;
  LastPerformed?: string;
};
