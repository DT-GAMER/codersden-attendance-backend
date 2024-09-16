import jwt from 'jsonwebtoken';

/**
 * Generates a JWT token.
 * 
 * @param {Object} payload - The payload to include in the token
 * @param {string} secret - The secret key to sign the token with
 * @param {string} expiresIn - Token expiration time
 * @returns {string} - The signed JWT token
 */
export const generateToken = (payload, secret, expiresIn) => {
  try {
    const token = jwt.sign(payload, secret, { expiresIn });
    return token;
  } catch (error) {
    throw new Error('Error generating token');
  }
};

/**
 * Verifies a JWT token.
 * 
 * @param {string} token - The JWT token to verify
 * @param {string} secret - The secret key to verify the token with
 * @returns {Object} - The decoded payload if valid
 */
export const verifyToken = (token, secret) => {
  try {
    const decoded = jwt.verify(token, secret);
    return decoded;
  } catch (error) {
    throw new Error('Invalid token');
  }
};
