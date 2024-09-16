import cors from 'cors';

const corsOptions = {
  origin: (origin, callback) => {
    const whitelistEnv = process.env.CORS_WHITELIST;
    if (whitelistEnv) {
      const whitelist = whitelistEnv.split(',');
      if (whitelist.includes('*') || !origin || whitelist.indexOf(origin) !== -1) {
        callback(null, true);
      } else {
        callback(new Error('Not allowed by CORS'));
      }
    } else {
      callback(new Error('CORS_WHITELIST environment variable is not defined'));
    }
  },
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  credentials: true
};

export default cors(corsOptions);
