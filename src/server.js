import app, { use, listen } from './index';
import { PORT as _PORT, NODE_ENV } from './config/env';
import { logEvent } from './utils/logger';
//  we will import middlewares and other configurations we need to run the server


use((err, _req, res) => {
  const statusCode = err.statusCode || 500;
  res.status(statusCode).json({
    message: err.message || 'Internal Server Error',
    error: process.env.NODE_ENV === 'development' ? err : {},
  });
  logEvent(`Error: ${err.message}`, 'error');
});

//  we will listen to the port specified in the environment variables
const PORT = _PORT || 3000;

listen(PORT, () => {
  logEvent(`Server is running in ${NODE_ENV} mode on port ${PORT}`);
  console.log(`Server running on port ${PORT}`);
});

export default app;
