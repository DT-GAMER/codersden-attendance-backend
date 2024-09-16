// Set up environment variables for testing
process.env.NODE_ENV = 'test';
process.env.JWT_SECRET = 'testJWTSecret';
process.env.SALT_ROUNDS = '10';
process.env.PEPPER = 'testPepper';
process.env.MONGO_URI = 'testMongoURI';

import { MongoMemoryServer } from 'mongodb-memory-server';
import { connect, connection } from 'mongoose';

let mongoServer;

beforeAll(async () => {
  mongoServer = await MongoMemoryServer.create();
  const uri = mongoServer.getUri();
  
  await connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  });
});

afterAll(async () => {
  await connection.dropDatabase();
  await connection.close();
  await mongoServer.stop();
});
