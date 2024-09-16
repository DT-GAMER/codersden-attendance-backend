/**
 * Validates user input for signup and login forms.
 * 
 * @param {Object} input - The user input to validate
 * @param {Array} requiredFields - List of required fields
 * @returns {Object} - An object containing isValid and errors
 */
export const validateInput = (input, requiredFields) => {
  let errors = {};
  
  requiredFields.forEach(field => {
    if (!input[field] || input[field].trim() === '') {
      errors[field] = `${field} is required`;
    }
  });
  
  const isValid = Object.keys(errors).length === 0;
  
  return { isValid, errors };
};
