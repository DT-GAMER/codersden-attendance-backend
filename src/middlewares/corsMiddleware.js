import cors from 'cors';

const corsOptions = {
  origin: (origin, callback) => {
    const whitelistEnv = process.env.CORS_WHITELIST;
    if (whitelistEnv) {
      if (whitelistEnv === '*') {
        callback(null, true); // Allow all origins
      } else {
        const whitelist = whitelistEnv.split(',');
        if (!origin || whitelist.includes('*') || whitelist.includes(origin)) {
          callback(null, true);
        } else {
          callback(new Error('Not allowed by CORS'));
        }
      }
    } else {
      callback(new Error('CORS_WHITELIST environment variable is not defined'));
    }
  },
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH', 'OPTIONS'],
  credentials: true
};

export default cors(corsOptions);
