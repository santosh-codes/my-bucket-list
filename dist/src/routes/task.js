"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const task_1 = require("../controllers/task");
const TaskRoute = (0, express_1.Router)();
TaskRoute.get("/getAllTask", task_1.getAllTask);
TaskRoute.delete("/task/:taskId"), task_1.deleteTask;
exports.default = TaskRoute;
