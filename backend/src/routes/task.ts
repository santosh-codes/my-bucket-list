import { Router } from "express";
import { getAllTaskById } from "../controllers/task/query";
import { createTask } from "../controllers/task/mutation";

const TaskRoute = Router();

// Add Swagger annotations for the routes
TaskRoute.get("/getAllTaskById/:id", getAllTaskById);
TaskRoute.post("/createTask", createTask);

export default TaskRoute;
