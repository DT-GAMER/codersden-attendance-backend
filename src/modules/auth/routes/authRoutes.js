import express from 'express';
import { 
    signUpStudentController, 
    signUpTutorController, 
    loginStudentController, 
    loginTutorController 
} from '../controllers/authController.js';
import loginRateLimiter from '../../../middlewares/rateLimiter.js';

const router = express.Router();

router.post('/signup/student', async (req, res, next) => {
  try {
    await signUpStudentController(req, res);
  } catch (error) {
    next(error);
  }
});

router.post('/signup/tutor', async (req, res, next) => {
  try {
    await signUpTutorController(req, res);
  } catch (error) {
    next(error);
  }
});

router.post('/login/student', loginRateLimiter, async (req, res, next) => {
  try {
    await loginStudentController(req, res);
  } catch (error) {
    next(error);
  }
});

router.post('/login/tutor', loginRateLimiter, async (req, res, next) => {
  try {
    await loginTutorController(req, res);
  } catch (error) {
    next(error);
  }
});

export default router;