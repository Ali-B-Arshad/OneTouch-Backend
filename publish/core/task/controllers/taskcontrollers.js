
const TaskLibs = require('../utils/tasklibs');

const config = require('config');

class TaskController {

    getTasks(req, res) {
        var taskLibs = new TaskLibs();
        return taskLibs.getTaskDetails(req.query.userScopeId, req.query.teamId, req.query.pageId)
            .then((result) => {
                
                res.status(200).json(result);
            })
            .catch((error) => {
                
                res.status(200).json({ code: 400, status: "failed", error: error.message });
            });
    }

    assignTask(req, res) {
        var taskLibs = new TaskLibs();
        return taskLibs.assignTask(req.query.userScopeId, req.query.taskId, req.query.assigningUserId, req.query.teamId)
            .then((result) => {
                
                res.status(200).json(result);
            })
            .catch((error) => {
                
                res.status(200).json({ code: 400, status: "failed", error: error.message });
            });
    }

    updateTaskStatus(req, res) {
        var taskLibs = new TaskLibs();
        return taskLibs.updateTaskStatus(req.query.userScopeId, req.query.taskId, req.query.status, req.query.teamId)
            .then((result) => {
                
                res.status(200).json(result);
            })
            .catch((error) => {
                
                res.status(200).json({ code: 400, status: "failed", error: error.message });
            });
    }

}

module.exports = new TaskController();