"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = __importDefault(require("./app"));
const dotenv_1 = __importDefault(require("dotenv"));
const task_1 = __importDefault(require("./src/routes/task"));
const swagger_ui_express_1 = __importDefault(require("swagger-ui-express"));
const swagger_jsdoc_1 = __importDefault(require("swagger-jsdoc"));
dotenv_1.default.config();
const PORT = process.env.PORT || 8000;
// Define Swagger JSDoc configuration options
const swaggerOptions = {
    definition: {
        openapi: "3.0.0",
        info: {
            title: "Your API Title",
            version: "1.0.0",
        },
    },
    apis: ["./src/routes/task.ts"],
};
// Initialize Swagger JSDoc
const swaggerSpec = (0, swagger_jsdoc_1.default)(swaggerOptions);
// Serve Swagger UI
app_1.default.use("/docs", swagger_ui_express_1.default.serve, swagger_ui_express_1.default.setup(swaggerSpec));
app_1.default.use("/api", task_1.default);
app_1.default.listen(PORT, () => {
    console.log(`Application is running at Port:${process.env.PORT}`);
});
