const routes = require('express').Router();
const taskController = require('../task/controllers/taskcontrollers');

routes.get("/getTasks", taskController.getTasks);
routes.put("/assignTask", taskController.assignTask);
routes.get("/updateTaskStatus", taskController.updateTaskStatus);



module.exports = routes;