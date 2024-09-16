import { 
    signUpStudent, 
    signUpTutor, 
    loginStudent, 
    loginTutor 
} from '../services/authService.js';

/**
 * Sign up a new student.
 * 
 * @param {Object} req - The request object
 * @param {Object} res - The response object
 */
export const signUpStudentController = async (req, res) => {
  const { fullName, level, password, confirmPassword } = req.body;

  try {
    const result = await signUpStudent(fullName, level, password, confirmPassword);
    res.status(201).json(result);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

/**
 * Sign up a new tutor.
 * 
 * @param {Object} req - The request object
 * @param {Object} res - The response object
 */
export const signUpTutorController = async (req, res) => {
  const { name, password, confirmPassword } = req.body;

  try {
    const result = await signUpTutor(name, password, confirmPassword);
    res.status(201).json(result);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

/**
 * Log in a student.
 * 
 * @param {Object} req - The request object
 * @param {Object} res - The response object
 */
export const loginStudentController = async (req, res) => {
  const { fullName, password } = req.body;

  try {
    const result = await loginStudent(fullName, password);
    res.status(200).json(result);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

/**
 * Log in a tutor.
 * 
 * @param {Object} req - The request object
 * @param {Object} res - The response object
 */
export const loginTutorController = async (req, res) => {
  const { name, password } = req.body;

  try {
    const result = await loginTutor(name, password);
    res.status(200).json(result);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};