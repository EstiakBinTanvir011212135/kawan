import { model, Schema } from 'mongoose';
import { TUser } from './user.interface';
import { calculateHight } from '../utils/calculetHight';

const UserSchema = new Schema<TUser>(
  {
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    photo: {
      type: String,
    },
    gender: {
      type: String,
      enum: {
        values: ['male', 'female', 'other'],
        message: '{VALUE} is not valid',
      },
    },
    bloodGroup: {
      type: String,
      enum: ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'],
    },
    weight: {
      type: String,
    },
    hight: {
      type: String,
    },
    dateOfBirth: {
      type: String,
    },
    contactNo: {
      type: String,
    },
  },
  {
    timestamps: true,
  },
);

//*  this will convert the hight into m
// Pre-findOneAndUpdate middleware for updates
UserSchema.pre('findOneAndUpdate', async function (next) {
  const update = this.getUpdate();

  if (update && typeof update.hight === 'string') {
    let updateHight = await calculateHight(update.hight);
    update.hight = updateHight;
    this.setUpdate(update); // Apply the updated value
  }

  next();
});

export const User = model<TUser>('user', UserSchema);
