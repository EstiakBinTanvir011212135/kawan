import catchAsync from '../../utils/catchAcync';
import { EBookService } from './EBook.service';

const createEbook = catchAsync(async (req, res) => {
  const result = await EBookService.createEBookIntoDB(req.body);
  res.status(200).json({
    success: true,
    message: 'Habit is created successfully',
    data: result,
  });
});

export const EBookController = {
  createEbook,
};
