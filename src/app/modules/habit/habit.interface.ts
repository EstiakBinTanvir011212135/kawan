import { Types } from 'mongoose';

export type THabit = {
  HabitName: string;
  user: Types.ObjectId;
  Description: string;
  status: 'TODO' | 'InPROGRESS' | 'COMPLETE';
  StartDate: Date;
  EndDate?: Date;
  Progress: string;
  LastPerformed: string;
};
