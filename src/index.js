import express from 'express';
import connectDB from './config/db.js';
import setupSwagger from './config/swagger.js';
import { PORT as _PORT } from './config/env.js';
import corsMiddleware from './middlewares/corsMiddleware.js';
import rateLimiter from './middlewares/rateLimiter.js';
import notFound from './middlewares/notFound.js';
import errorHandler from './middlewares/errorHandler.js';
import authRoutes from './modules/auth/routes/authRoutes.js';

const app = express();

// Trust the proxy
app.set('trust proxy', 1);

// Middleware for parsing JSON
app.use(express.json());

// CORS middleware
app.use(corsMiddleware);

// Rate limiter middleware
app.use('/api/auth', rateLimiter);

// Connect to the database
connectDB();

// Setup Swagger
setupSwagger(app);

// Import and use routes
app.use('/api/v1', authRoutes);

// Default route
app.get('/', (req, res) => {
  res.status(200).json({ message: 'Welcome to the Coder’s Den Attendance Management System API' });
});

// Handle 404 errors
app.use(notFound);

// Global error handler
app.use((err, req, res, next) => {
  errorHandler(err, res);
});

export default app;
