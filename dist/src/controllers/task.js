"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteTask = exports.getAllTask = void 0;
const constants_1 = require("../../constants");
/**
 * @swagger
 * /getAllTask:
 *   get:
 *     summary: Retrieve all tasks
 *     responses:
 *       200:
 *         description: Successful operation
 */
const getAllTask = (req, res) => {
    try {
        res.send(constants_1.data);
    }
    catch (error) {
        res.status(500).json({
            message: error.message || "Internal Server Error",
        });
    }
};
exports.getAllTask = getAllTask;
/**
 * @swagger
 * /task/{taskId}:
 *   delete:
 *     summary: Delete a task by ID
 *     parameters:
 *       - in: path
 *         name: taskId
 *         schema:
 *           type: string
 *         required: true
 *     responses:
 *       200:
 *         description: Task deleted successfully
 */
const deleteTask = (req, res) => {
    try {
        const taskId = req.params.taskId;
        res.json({
            taskId: taskId,
            message: "Deleted Successfully",
        });
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            message: error.message || "Internal Server Error",
        });
    }
};
exports.deleteTask = deleteTask;
