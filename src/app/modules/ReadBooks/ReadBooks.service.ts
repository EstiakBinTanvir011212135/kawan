import { ReadBook } from './ReadBooks.model';

const createReadBookIntoDB = async (payload: TEBook) => {
  const result = await ReadBook.create(payload);
  return result;
};

export const ReadBookService = {
  createReadBookIntoDB,
};
