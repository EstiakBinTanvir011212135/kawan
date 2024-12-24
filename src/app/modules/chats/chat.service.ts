import { TChat } from './chat.interface';
import { Chat } from './chat.model';

const createChatIntoDB = async (payload: TChat) => {
  const result = await Chat.create(payload);
  console.log(payload);
  return null;
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
