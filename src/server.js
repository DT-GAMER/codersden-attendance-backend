import app from './index.js';
import { PORT as _PORT, NODE_ENV } from './config/env.js';
import { logEvent } from './utils/logger.js';
import { EventEmitter } from 'events';

EventEmitter.defaultMaxListeners = 20;


const PORT = _PORT || 3000;

app.listen(PORT, () => {
  const url = `http://localhost:${PORT}`;
  logEvent(`Server is running in ${NODE_ENV} mode on port ${PORT}. Access it at ${url}`);
  console.log(`Server running on port ${PORT}. Access it at ${url}`);
});

export default app;
