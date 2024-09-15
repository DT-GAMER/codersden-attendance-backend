import rateLimit from 'express-rate-limit';
import { logEvent } from '../utils/logger';


const loginRateLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes window
  max: 5, // Block after 5 failed login attempts
  message: 'Too many login attempts from this IP, please try again after 15 minutes',
  standardHeaders: true, 
  legacyHeaders: false, 
  handler: (req, res, next, options) => {
    logEvent(`Brute-force attack detected from IP ${req.ip}`, 'security');
    res.status(options.statusCode).json({ message: options.message });
  }
});

export default loginRateLimiter;
