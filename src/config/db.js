import { connect } from 'mongoose';
import { logError, logEvent } from '../utils/logger.js';
import { MONGO_URI } from './env.js';

const connectDB = async () => {
  try {
    await connect(MONGO_URI, {
    });
    logEvent('Connected to MongoDB');
    console.log('MongoDB Connected');
  } catch (err) {
    logError(`Error connecting to MongoDB: ${err.message}`);
    console.error('Error connecting to MongoDB', err);
    process.exit(1);
  }
};


export default connectDB;
