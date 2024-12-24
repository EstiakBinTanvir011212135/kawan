import { User } from '../user/user.model';
import { TChat } from './chat.interface';
import { Chat } from './chat.model';

const createChatIntoDB = async (payload: TChat) => {
  console.log(payload);

  // check those email exists or not
  const formEmailExists = await User.findOne({ email: payload.FromEmail });
  if (!formEmailExists) {
    throw new Error('this email dose not exists');
  }
  const toEmailExists = await User.findOne({ email: payload.ToEmail });
  if (!toEmailExists) {
    throw new Error('this email dose not exists');
  }

  const result = await Chat.create(payload);
  return result;
};

const getAllChatFromDB = async () => {
  const result = await Chat.create();
  return result;
};

const deleteChatFormDB = async () => {
  const result = await Chat.create();
  return result;
};

export const ChatService = {
  createChatIntoDB,
  getAllChatFromDB,
  deleteChatFormDB,
};
