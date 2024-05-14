import { Router } from "express";
import { getAllTask } from "../controllers/task/query";

const TaskRoute = Router();

// Add Swagger annotations for the routes
TaskRoute.get("/getAllTask", getAllTask);

export default TaskRoute;
