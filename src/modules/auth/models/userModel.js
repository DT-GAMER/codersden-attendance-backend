import mongoose from 'mongoose';
import bcrypt from 'bcrypt';
import { hashPassword } from '../../../utils/hashPassword.js';

const userSchema = new mongoose.Schema(
  {
    fullName: {
      type: String,
      required: [true, 'Full name is required'],
      trim: true
    },
    level: {
      type: String,
      required: [true, 'Level is required'],
      trim: true
    },
    password: {
      type: String,
      required: [true, 'Password is required'],
      minlength: [6, 'Password should be at least 6 characters long'],
      select: false
    },
    role: {
      type: String,
      enum: ['student', 'tutor'],
      required: [true, 'User role is required'],
      default: 'student'
    },
    active: {
      type: Boolean,
      default: true,
      select: false
    },
    createdAt: {
      type: Date,
      default: Date.now
    }
  },
  {
    timestamps: true
  }
);

userSchema.pre('save', async function (next) {
  if (!this.isModified('password')) return next();
  this.password = await hashPassword(this.password);
  next();
});

userSchema.methods.correctPassword = async function (enteredPassword, storedPassword) {
  return await bcrypt.compare(enteredPassword, storedPassword);
};

userSchema.statics.findById = async function (id) {
  return this.findOne({ _id: id });
};

userSchema.methods.toJSON = function () {
  const userObject = this.toObject();
  delete userObject.password;
  return userObject;
};

const UserModel = mongoose.model('User', userSchema);

export default UserModel;