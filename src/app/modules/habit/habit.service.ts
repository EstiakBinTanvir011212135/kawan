import mongoose from 'mongoose';
import { THabit } from './habit.interface';
import { Habit } from './habit.model';

const createHabitIntoDB = async (payload: THabit) => {
  const result = await Habit.create(payload);

  return result;
};

const getAllHabitFromDB = async () => {
  const result = await Habit.find();
  return result;
};

const getSingleHabitFromDB = async (payload: THabit) => {
  //   const result = await Habit.create(payload);
  //   return result;
};

const updateHabitIntoDB = async (id: string, payload: Partial<THabit>) => {
  const { DailyPractice, ...remainingHabitData } = payload;
  const session = await mongoose.startSession();
  try {
    session.startTransaction();

    //* session-1
    const UpdateHabitData = await Habit.findByIdAndUpdate(
      id,
      remainingHabitData,
      {
        new: true,
        runValidators: true,
        session,
      },
    );

    if (!UpdateHabitData) {
      throw new Error('failed to update the Habit data ');
    }

    //  here the new start Date on the specific habit
    if (DailyPractice && Array.isArray(DailyPractice)) {
      for (const practice of DailyPractice) {
        await Habit.updateOne(
          { _id: id },
          {
            $push: {
              DailyPractice: {
                StartDate: practice.StartDate,
              },
            },
          },
          { session },
        );
      }
    }

    await session.commitTransaction();
    await session.endSession();

    const result = await Habit.findById(id);
    return result;
  } catch (error) {
    await session.abortTransaction();
    await session.endSession();
    throw new Error('Failed to update the habit ');
  }
};

const updateExistsHabitDateIntoDB = async (
  id: string,
  habitId: string,
  payload: Partial<THabit>,
) => {
  const { DailyPractice } = payload;
  const habitExists = await Habit.findById(id);

  if (!habitExists) {
    throw new Error(' This is not a valid id ');
  }
  if (DailyPractice && Array.isArray(DailyPractice)) {
    for (const practice of DailyPractice) {
      await Habit.updateOne(
        { _id: id },
        {
          $push: {
            DailyPractice: {
              EndDate: practice.EndDate,
            },
          },
        },
      );
    }
  }

  console.log(id);
  console.log(habitId);
};

export const HabitService = {
  createHabitIntoDB,
  getAllHabitFromDB,
  getSingleHabitFromDB,
  updateHabitIntoDB,
  updateExistsHabitDateIntoDB,
};
