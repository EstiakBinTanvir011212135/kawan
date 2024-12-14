import { User } from '../user/user.model';
import { THealth } from './healthAndNutrition.interface';
import { Health } from './healthAndNutrition.model';

const createHealthIntoDB = async (payload: THealth) => {
  const result = await Health.create(payload);
  return result;
};

const getAllHealthFromDB = async () => {
  const result = await Health.find().populate('user');
  return result;
};

const getSingleHealthFormDB = async (id: string) => {
  /* 1st  find the user exists 
  2nd 
  
  */

  const result = await Health.findById(id);
  return result;
};

const updateHealthIntoDB = async (id: string, payload: Partial<THealth>) => {
  //  first find the heath id & the id of the user
  // if the user update the user hight and the wight then
  // update the BMI and the hight and the wight in the user collection
  // add the hight and the wight value in the health collection
  console.log(payload);
  const isUserExists = User.findById(id);
  if (!isUserExists) {
    console.log('this user dose not exists');
  }

  return null;
};

export const HealthServices = {
  createHealthIntoDB,
  getAllHealthFromDB,
  getSingleHealthFormDB,
  updateHealthIntoDB,
};
