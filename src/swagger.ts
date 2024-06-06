import swaggerJsdoc from 'swagger-jsdoc';

const options = {
  swaggerDefinition: {
    openapi: '3.0.0',
    info: {
      title: 'TourAxis',
      version: '1.0.0',
      description: 'Tour Axis API',
    },
    servers: [
      {
        url: `http://localhost:${process.env.PORT || 3000}`, // Change this to your server URL
        description: 'Development Server',
      },
    ],
  },
  apis: ['./routes/*.ts'], // Change the path based on your project structure
};

const specs = swaggerJsdoc(options);

export default specs;
