import cors from 'cors';

const corsOptions = {
  origin: (origin, callback) => {
    const whitelist = process.env.CORS_WHITELIST.split(',');
    if (!origin || whitelist.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  credentials: true
};

export default cors(corsOptions);
