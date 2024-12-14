import { model, Schema } from 'mongoose';
import { THealth } from './healthAndNutrition.interface';
import { User } from '../user/user.model';
import { calculateBMI } from '../utils/calculetBMI';

const healthySchema = new Schema<THealth>(
  {
    user: {
      type: Schema.Types.ObjectId,
      required: [true, 'User id is required'],
      unique: true,
      ref: 'user',
    },
    BMI: {
      type: String,
    },
    hight: {
      type: String,
    },
    weight: {
      type: String,
    },
    suggestion: {
      type: String,
    },
    fitnessLevel: {
      type: String,
      enum: ['stay-healthy', 'gain-weight', 'lose-wight'],
      default: 'stay-healthy',
    },
  },
  {
    timestamps: true,
  },
);

// this is when user first time create the of the user update the user
// Pre save hook to calculate BMI
// this is when create the user
healthySchema.pre('save', async function (next) {
  if (!this.user) {
    throw new Error('User is required');
  }

  try {
    // Get user data (height and weight)
    const user = await User.findById(this.user);

    if (!user || !user.hight || !user.weight) {
      throw new Error('User height or weight is missing');
    }
    // const bmi = user.weight / (user.hight * 2); // number
    // const BMICalculation = bmi.toFixed(2);
    // const BMI = BMICalculation.toString(); //convert in string
    // calculateBMI(user?.hight, user?.weight);

    this.BMI = calculateBMI(user?.hight, user?.weight);
    this.hight = user?.hight;
    this.weight = user?.weight;
    console.log(this);
    // Proceed with the save operation
    next();
  } catch (error: any) {
    return next(error);
  }
});

// we need the data when use is update

export const Health = model<THealth>('healths', healthySchema);
