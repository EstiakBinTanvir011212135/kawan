import catchAsync from '../../utils/catchAcync';
import { HabitService } from './habit.service';

const CreteHabit = catchAsync(async (req, res, next) => {
  const result = await HabitService.createHabitIntoDB(req.body);
  res.status(200).json({
    success: true,
    message: 'Habit is created successfully',
    data: result,
  });
});

const getAllHabit = catchAsync(async (req, res, next) => {
  //   const result = await HabitService.createHabitIntoDB(req.body);
  //   res.status(200).json({
  //     success: true,
  //     message: 'Habit is created successfully',
  //     data: result,
  //   });
});

const getSingleHabit = catchAsync(async (req, res, next) => {
  //   const result = await HabitService.createHabitIntoDB(req.body);
  //   res.status(200).json({
  //     success: true,
  //     message: 'Habit is created successfully',
  //     data: result,
  //   });
});

const updateHabit = catchAsync(async (req, res, next) => {
  //   const result = await HabitService.createHabitIntoDB(req.body);
  //   res.status(200).json({
  //     success: true,
  //     message: 'Habit is created successfully',
  //     data: result,
  //   });
});

export const HabitController = {
  CreteHabit,
  getAllHabit,
  getSingleHabit,
  updateHabit,
};
