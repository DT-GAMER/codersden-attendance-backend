import swaggerJsdoc from 'swagger-jsdoc';
import { serve, setup } from 'swagger-ui-express';


const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Coder’s Den Attendance Management System API',
      version: '1.0.0',
      description: 'API documentation for Coder’s Den Attendance Management System',
    },
    servers: [
      {
        url: 'http://localhost:3000', 
        description: 'Development server',
      },
    ],
  },
  apis: ['./routes/*.js'], 
};

const swaggerSpec = swaggerJsdoc(options);

const setupSwagger = (app) => {
  app.use('/api-docs', serve, setup(swaggerSpec));
  console.log('Swagger docs available at /api-docs');
};

export default setupSwagger;
