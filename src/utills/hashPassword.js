import bcrypt from 'bcrypt';

const pepper = process.env.PEPPER;

/**
 * Hashes the password using bcrypt, with a salt and pepper.
 * 
 * @param {string} password - The plain text password to hash
 * @returns {Promise<string>} - The hashed password
 */
export const hashPassword = async (password) => {
  try {
    
    const pepperedPassword = password + pepper;
    
    const salt = await bcrypt.genSalt(10);
    
    const hashedPassword = await bcrypt.hash(pepperedPassword, salt);
    
    return hashedPassword;
  } catch (error) {
    throw new Error('Error hashing password');
  }
};

/**
 * Compares a plain text password with a hashed password.
 * 
 * @param {string} password - The plain text password
 * @param {string} hashedPassword - The hashed password to compare with
 * @returns {Promise<boolean>} - Whether the passwords match
 */
export const comparePassword = async (password, hashedPassword) => {
  try {
    
    const pepperedPassword = password + pepper;

    const isMatch = await bcrypt.compare(pepperedPassword, hashedPassword);
    
    return isMatch;
  } catch (error) {
    throw new Error('Error comparing passwords');
  }
};
