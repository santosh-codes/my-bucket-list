import { Router } from "express";
import { getTaskById } from "../controllers/task/query";
import { createTask } from "../controllers/task/mutation";

const TaskRoute = Router();

// Add Swagger annotations for the routes
TaskRoute.get("/getTaskById/:id", getTaskById);
TaskRoute.post("/createTask", createTask);

export default TaskRoute;
