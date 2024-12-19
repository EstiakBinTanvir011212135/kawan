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
  const result = await HabitService.getAllHabitFromDB();
  res.status(200).json({
    success: true,
    message: 'Habit is created successfully',
    data: result,
  });
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
  const { id } = req.params;
  const result = await HabitService.updateHabitIntoDB(id, req.body);
  res.status(200).json({
    success: true,
    message: 'Habit is created successfully',
    data: result,
  });
});
const updateExistsHabitDate = catchAsync(async (req, res, next) => {
  const { id } = req.params;
  const { habitId } = req.params;
  const result = await HabitService.updateExistsHabitDateIntoDB(
    id,
    habitId,
    req.body,
  );
});
export const HabitController = {
  CreteHabit,
  getAllHabit,
  getSingleHabit,
  updateHabit,
  updateExistsHabitDate,
};
