const ScheduleLib = require('../utils/schedulerlibs');

const config = require('config');

var scheduleServices = {};

scheduleServices.create = function (req, res) {
    var scheduleLib = new ScheduleLib();
    return scheduleLib.create(req.body.userScopeId, req.body.userScopeName, req.body.postInfo, req.body.userScopeMaxScheduleCount)
        .then((response) => {
            
            res.status(200).json(response);
        })
        .catch((error) => {
            
            res.status(200).json({ code: 400, status: "failed", error: error.message });
        });
};

scheduleServices.getScheduleDetails = (req, res) => {
    var scheduleLib = new ScheduleLib();
    return scheduleLib.getScheduleDetails(req.body.userScopeId, req.query.fetchPageId)
        .then((response) => {
            
            res.status(200).json(response);
        })
        .catch((error) => {
            
            res.status(200).json({ code: 400, status: "failed", error: error.message });
        });
};

scheduleServices.getParticularScheduleDetails = (req, res) => {
    var scheduleLib = new ScheduleLib();
    return scheduleLib.getParticularScheduleDetails(req.body.userScopeId, req.query.scId)
        .then((response) => {
            
            res.status(200).json({ code: 200, status: "success", data: response });
        })
        .catch((error) => {
            
            res.status(200).json({ code: 400, status: "failed", error: error.message });
        });
};


scheduleServices.getFilteredScheduleDetails = (req, res) => {

    var scheduleLib = new ScheduleLib();
    return scheduleLib.getFilteredScheduleDetails(req.body.userScopeId, req.query.scheduleStatus, req.query.fetchPageId)
        .then((response) => {
            
            res.status(200).json(response);
        })
        .catch((error) => {
            
            res.status(200).json({ code: 400, status: "failed", error: error.message });
        });
};

scheduleServices.getScheduleDetailsByCategories = (req, res) => {

    var scheduleLib = new ScheduleLib();
    return scheduleLib.getScheduleDetailsByCategories(req.body.userScopeId, req.query.scheduleStatus, req.query.scheduleCategory, req.query.fetchPageId)
        .then((response) => {
            analyticsServices.registerEvents({
                category: req.body.userScopeEmail,
                action: configruation.publiser_service_events.event_action.Scheduler,
                label: configruation.publiser_service_events.schedule_event_label.filtered_schedule_details_with_category.replace('{{user}}', req.body.userScopeName).replace('{{status}}', req.query.scheduleStatus).replace('{{category}}', req.query.scheduleCategory == 1 ? "daywise" : "normal").replace('{{id}}', req.body.userScopeId)
            });
            res.status(200).json(response);
        })
        .catch((error) => {
            analyticsServices.registerEvents({
                category: req.body.userScopeEmail,
                action: configruation.publiser_service_events.event_action.Scheduler,
                label: configruation.publiser_service_events.schedule_event_label.filtered_schedule_details_with_category_failed.replace('{{user}}', req.body.userScopeName).replace('{{status}}', req.query.scheduleStatus).replace('{{category}}', req.query.scheduleCategory == 1 ? "daywise" : "normal").replace('{{id}}', req.body.userScopeId)
            });
            res.status(200).json({ code: 400, status: "failed", error: error.message });
        });
};

scheduleServices.edit = function (req, res) {
    var scheduleLib = new ScheduleLib();
    return scheduleLib.edit(req.body.userScopeId, req.body.userScopeName, req.query.teamId, req.query.scheduleId, req.body.postInfo)
        .then((response) => {
            
            res.status(200).json(response);
        })
        .catch((error) => {
            
            res.status(200).json({ code: 400, status: "failed", error: error.message });
        });
};

scheduleServices.changeScheduleStatus = function (req, res) {
    var scheduleLib = new ScheduleLib();
    return scheduleLib.changeScheduleStatus(req.body.userScopeId, req.body.userScopeName, req.query.scheduleId, req.query.scheduleStatus, req.query.userScopeMaxScheduleCount)
        .then((response) => {
            
            res.status(200).json(response);
        })
        .catch((error) => {
            
            res.status(200).json({ code: 400, status: "failed", error: error.message });
        });
};

scheduleServices.delete = function (req, res) {
    var scheduleLib = new ScheduleLib();
    return scheduleLib.delete(req.body.userScopeId, req.query.scheduleId)
        .then((response) => {
            
            res.status(200).json(response);
        })
        .catch((error) => {
            
            res.status(200).json({ code: 400, status: "failed", error: error.message });
        });
};

scheduleServices.cancel = function (req, res) {
    var scheduleLib = new ScheduleLib();
    return scheduleLib.cancelScheduleDetails(req.body.userScopeId, req.query.scheduleId)
        .then((response) => {
            
            res.status(200).json(response);
        })
        .catch((error) => {
            
            res.status(200).json({ code: 400, status: "failed", error: error.message });
        });
};

// Admin routes
scheduleServices.startDaywiseSchedule = (req, res) => {
    var scheduleLib = new ScheduleLib();
    return scheduleLib.startDaywiseSchedule()
        .then((response) => {
            
            res.status(200).json(response);
        })
        .catch((error) => {
            
            res.status(200).json({ code: 400, status: "failed", error: error.message });
        });
};

scheduleServices.startTodaySchedule = (req, res) => {
    var scheduleLib = new ScheduleLib();
    return scheduleLib.runTodaySchedule()
        .then((response) => {
            
            res.status(200).json(response);
        })
        .catch((error) => {
            
            res.status(200).json({ code: 400, status: "failed", error: error.message });
        });
};

scheduleServices.startSchedulerCron = (req, res) => {
    var scheduleLib = new ScheduleLib();
    return scheduleLib.startSchedulerCron()
        .then((response) => {
            
            res.status(200).json(response);
        })
        .catch((error) => {
            
            res.status(200).json({ code: 400, status: "failed", error: error.message });
        });
};

scheduleServices.deleteAllSchedules = (req, res) => {
    var scheduleLib = new ScheduleLib();
    return scheduleLib.removeAllScheduleInfo()
        .then((response) => {
            
            res.status(200).json({ code: 200, status: "success", data: response });
        })
        .catch((error) => {
            
            res.status(200).json({ code: 400, status: "failed", error: error.message });
        });
};
module.exports = scheduleServices;