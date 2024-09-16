import { hashPassword, comparePassword } from '../../../utils/hashPassword.js';
import { generateToken } from '../../../utils/generateToken.js';
import logger from '../../../utils/logger.js';
import User from '../models/userModel.js';
import { validateInput } from '../../../utils/validateInput.js';

export const signUpStudent = async (fullName, level, password, confirmPassword) => {
  try {
    const { isValid, errors } = validateInput({ fullName, level, password, confirmPassword }, ['fullName', 'level', 'password', 'confirmPassword']);
    if (!isValid) {
      throw new Error(JSON.stringify(errors));
    }

    if (password !== confirmPassword) {
      throw new Error('Passwords do not match');
    }

    const existingUser = await User.findOne({ fullName, level });
    if (existingUser) {
      throw new Error('User already exists');
    }

    const hashedPassword = await hashPassword(password);

    const newUser = new User({
      fullName,
      level,
      password: hashedPassword,
      role: 'student'
    });
    await newUser.save();

    logger.logEvent(`New student signed up: ${fullName}`, 'info');
    return { message: 'Sign up successful' };
  } catch (error) {
    logger.logError(`Sign up error: ${error.message}`);
    throw new Error(error.message);
  }
};

export const signUpTutor = async (name, password, confirmPassword) => {
  try {
    const { isValid, errors } = validateInput({ name, password, confirmPassword }, ['name', 'password', 'confirmPassword']);
    if (!isValid) {
      throw new Error(JSON.stringify(errors));
    }

    if (password !== confirmPassword) {
      throw new Error('Passwords do not match');
    }

    const existingUser = await User.findOne({ name });
    if (existingUser) {
      throw new Error('User already exists');
    }

    const hashedPassword = await hashPassword(password);

    const newUser = new User({
      name,
      password: hashedPassword,
      role: 'tutor'
    });
    await newUser.save();

    logger.logEvent(`New tutor signed up: ${name}`, 'info');
    return { message: 'Sign up successful' };
  } catch (error) {
    logger.logError(`Sign up error: ${error.message}`);
    throw new Error(error.message);
  }
};

export const loginStudent = async (fullName, password) => {
  try {
    const { isValid, errors } = validateInput({ fullName, password }, ['fullName', 'password']);
    if (!isValid) {
      throw new Error(JSON.stringify(errors));
    }

    const user = await User.findOne({ fullName, role: 'student' });
    if (!user) {
      throw new Error('User not found');
    }

    const isMatch = await comparePassword(password, user.password);
    if (!isMatch) {
      throw new Error('Invalid password');
    }

    const token = generateToken({ id: user._id, role: user.role }, process.env.JWT_SECRET, '1h');
    return { token, message: 'Login successful' };
  } catch (error) {
    logger.logError(`Login error: ${error.message}`);
    throw new Error(error.message);
  }
};

export const loginTutor = async (name, password) => {
  try {
    const { isValid, errors } = validateInput({ name, password }, ['name', 'password']);
    if (!isValid) {
      throw new Error(JSON.stringify(errors));
    }

    const user = await User.findOne({ name, role: 'tutor' });
    if (!user) {
      throw new Error('User not found');
    }

    const isMatch = await comparePassword(password, user.password);
    if (!isMatch) {
      throw new Error('Invalid password');
    }

    const token = generateToken({ id: user._id, role: user.role }, process.env.JWT_SECRET, '1h');
    return { token, message: 'Login successful' };
  } catch (error) {
    logger.logError(`Login error: ${error.message}`);
    throw new Error(error.message);
  }
};
