import mongoose from 'mongoose';
import { User } from '../user/user.model';
import { THealth } from './healthAndNutrition.interface';
import { Health } from './healthAndNutrition.model';
import { string } from 'zod';

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
  // here we have to pass the hight and the weight in the user
  //  first find the heath id & the id of the user
  // if the user update the user hight and the wight then
  // update the BMI and the hight and the wight in the user collection
  // add the hight and the wight value in the health collection
  if (payload.hight && typeof payload.hight !== 'string') {
    throw new Error('Hight must be a string.');
  }
  if (payload.weight && typeof payload.weight !== 'string') {
    throw new Error('weight must be a string.');
  }
  if (payload.fitnessLevel && typeof payload.fitnessLevel !== 'string') {
    throw new Error('weight must be a string.');
  }
  console.log(payload);
  const updatedHealth = await Health.findOneAndUpdate({ _id: id }, payload, {
    new: true, // Return the updated user document
  });

  console.log(updatedHealth);

  return updatedHealth;
};

export const HealthServices = {
  createHealthIntoDB,
  getAllHealthFromDB,
  getSingleHealthFormDB,
  updateHealthIntoDB,
};
