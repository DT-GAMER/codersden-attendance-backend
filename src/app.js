// src/app.js
const express = require("express");
const swaggerUi = require("swagger-ui-express");
const swaggerJsDoc = require("swagger-jsdoc");
const swaggerOptions = require("./swagger");
const exampleRoute = require("./routes/test");

const app = express();

// Middleware
app.use(express.json());

// Swagger setup
const swaggerDocs = swaggerJsDoc(swaggerOptions);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs));

// Define routes here
app.use("/api", exampleRoute);

module.exports = app;
