import app from "./app";
import dotenv from "dotenv";
import TaskRoute from "./src/routes/task";
import swaggerUi from "swagger-ui-express";
import swaggerJSDoc from "swagger-jsdoc";
import { Run } from "./db/index";

dotenv.config();
Run();
const PORT = process.env.PORT || 8000;

// Define Swagger JSDoc configuration options
const swaggerOptions = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "MY BUCKET LIST",
      version: "1.0.0",
    },
  },
  apis: ["./src/controllers/*.ts"],
};

// Initialize Swagger JSDoc
const swaggerSpec = swaggerJSDoc(swaggerOptions);

// Serve Swagger UI
app.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.use("/", TaskRoute);

app.listen(PORT, () => {
  console.log(`Application is running at Port:${process.env.PORT}`);
});
