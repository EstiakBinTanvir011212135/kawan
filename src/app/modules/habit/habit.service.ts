import { THabit } from './habit.interface';
import { Habit } from './habit.model';

const createHabitIntoDB = async (payload: THabit) => {
  const result = await Habit.create(payload);
  return result;
};

const getAllHabitFromDB = async (payload: THabit) => {
  //   const result = await Habit.create(payload);
  //   return result;
};

const getSingleHabitFromDB = async (payload: THabit) => {
  //   const result = await Habit.create(payload);
  //   return result;
};

const updateHabitIntoDB = async (payload: THabit) => {
  //   const result = await Habit.create(payload);
  //   return result;
};

export const HabitService = {
  createHabitIntoDB,
  getAllHabitFromDB,
  getSingleHabitFromDB,
  updateHabitIntoDB,
};
