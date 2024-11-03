const express = require('express');
const kue = require('kue');
const kueUiExpress = require('kue-ui-express');

// Create Kue queue
const queue = kue.createQueue({
  redis: {
    host: process.env.KUE_REDIS_HOST || 'redis',
    port: process.env.KUE_REDIS_PORT || 6379,
  }
});

const app = express();
const PORT = 3050;

// Mount Kue UI
kueUiExpress(app, '/kue/', '/api');
app.use('/api/', kue.app);

// Start the server
app.listen(PORT, () => {
  console.log(`Kue dashboard running on http://localhost:${PORT}`);
});
