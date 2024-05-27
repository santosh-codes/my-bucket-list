import express from "express";
import TaskRoute from "./src/routes/task";
import swaggerJSDoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";

const app = express();
app.use(express.json());
app.use("/", TaskRoute);
// Define Swagger JSDoc configuration options
const swaggerOptions = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "MY BUCKET LIST",
      version: "1.0.0",
    },
  },
  apis: ["./src/controllers/task/*.ts"],
};

// Initialize Swagger JSDoc
const swaggerSpec = swaggerJSDoc(swaggerOptions);

// Serve Swagger UI
app.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));
export default app;
