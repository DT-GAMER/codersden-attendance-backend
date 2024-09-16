import { validateInput } from '../../../utils/validateInput.js';

/**
 * Validator for student sign-up inputs.
 * Make sure full name, level, password, and confirm password are provided.
 * 
 * @param {Object} req - Express request object containing user input
 * @returns {Object} - Validation result with isValid and errors
 */
export const validateStudentSignUp = (req) => {
  const { fullName, level, password, confirmPassword } = req.body;

  const requiredFields = ['fullName', 'level', 'password', 'confirmPassword'];
  const { isValid, errors } = validateInput(req.body, requiredFields);

  if (isValid && !['Beginner', 'Intermediate'].includes(level)) {
    errors.level = 'Level must be either Beginner or Intermediate';
  }

  if (isValid && password !== confirmPassword) {
    errors.passwordMatch = 'Passwords do not match';
  }

  return { isValid: Object.keys(errors).length === 0, errors };
};

/**
 * Validator for tutor sign-up inputs.
 * name, password, and confirm password must be provided.
 * 
 * @param {Object} req - Express request object containing user input
 * @returns {Object} - Validation result with isValid and errors
 */
export const validateTutorSignUp = (req) => {
  const { name, password, confirmPassword } = req.body;

  const requiredFields = ['name', 'password', 'confirmPassword'];
  const { isValid, errors } = validateInput(req.body, requiredFields);

  if (isValid && password !== confirmPassword) {
    errors.passwordMatch = 'Passwords do not match';
  }

  return { isValid: Object.keys(errors).length === 0, errors };
};

/**
 * Validator for student login inputs.
 * Ensures full name and password are provided.
 * 
 * @param {Object} req - Express request object containing user input
 * @returns {Object} - Validation result with isValid and errors
 */
export const validateStudentLogin = (req) => {
  const requiredFields = ['fullName', 'password'];
  const { isValid, errors } = validateInput(req.body, requiredFields);

  return { isValid, errors };
};

/**
 * Validator for tutor login inputs.
 * Ensures name and password are provided.
 * 
 * @param {Object} req - Express request object containing user input
 * @returns {Object} - Validation result with isValid and errors
 */
export const validateTutorLogin = (req) => {
  const requiredFields = ['name', 'password'];
  const { isValid, errors } = validateInput(req.body, requiredFields);

  return { isValid, errors };
};