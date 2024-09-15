import express, { json } from 'express';
import connectDB from './config/db';
import setupSwagger from './config/swagger';
import { logEvent } from './utils/logger';
import { PORT as _PORT, NODE_ENV } from './config/env';

const app = express();

app.use(json());

import rateLimiter from './middleware/rateLimiter';
app.use('/api/auth', rateLimiter);

connectDB();


setupSwagger(app);

// Import routes
app.use();

// Default route
app.get('/', (res) => {
  res.status(200).json({ message: 'Welcome to the Coder’s Den Attendance Management System API' });
});


const PORT = _PORT;
app.listen(PORT, () => {
  logEvent(`Server running in ${NODE_ENV} mode on port ${PORT}`);
  console.log(`Server running on port ${PORT}`);
});
