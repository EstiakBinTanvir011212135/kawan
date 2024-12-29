import catchAsync from '../../utils/catchAcync';
import { ReadBookService } from './ReadBooks.service';

const createReadBook = catchAsync(async (req, res) => {
  const result = await ReadBookService.createReadBookIntoDB(req.body);
  res.status(200).json({
    success: true,
    message: 'You  select this Book  successfully',
    data: result,
  });
});

export const ReadBookController = {
  createReadBook,
};
