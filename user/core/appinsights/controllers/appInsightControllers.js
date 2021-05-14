const AppInsightLibs = require('../utils/appinsightlibs');
const config = require('config');
const appinsightlibs = new AppInsightLibs();

class AppInsightController {
    getAllRealtimeUsers(req, res) {
        return appinsightlibs.getAllRealtimeUsers()
            .then((result) => {
                
                res.status(200).json({ code: 200, status: 'success', data: result });
            })
            .catch((error) => {
                
                res.status(200).json({ code: 400, status: 'failed', error: error.message });
            });
    }


    getRealtimeUsersActivities(req, res) {
        return appinsightlibs.getRealtimeUsersActivities(req.query.userEmail)
            .then((response) => {
                
                res.status(200).json({ code: 200, status: 'success', data: response });
            })
            .catch((error) => {
                
                res.status(200).json({ code: 400, status: 'failed', error: error.message });
            });
    }


    getAllUser(req, res) {
        return appinsightlibs.getAllUser(req.query.startDate, req.query.endDate)
            .then((response) => {
                
                res.status(200).json({ code: 200, status: 'success', data: response.result });
            })
            .catch((error) => {
                
                res.status(200).json({ code: 400, status: 'failed', error: error.message });
            });
    }


    getUsersActivities(req, res) {
        return appinsightlibs.getUsersActivities(req.query.userEmail, req.query.pageId)
            .then((result) => {
                
                res.status(200).json({ code: 200, status: 'success', data: result });
            })
            .catch((error) => {
                
                res.status(200).json({ code: 400, status: 'failed', error: error.message });
            });
    }

    getUsersActivitiesByDate(req, res) {
        return appinsightlibs.getUsersActivitiesByDate(req.query.userEmail, req.query.startDate, req.query.endDate, req.query.pageId)
            .then((result) => {
                
                res.status(200).json({ code: 200, status: 'success', data: result });
            })
            .catch((error) => {
                
                res.status(200).json({ code: 400, status: 'failed', error: error.message });
            });
    }

    getUsersActivitiesByAction(req, res) {
        return appinsightlibs.getUsersActivitiesByAction(req.query.userEmail, req.query.action, req.query.pageId)
            .then((result) => {
                
                res.status(200).json({ code: 200, status: 'success', data: result });
            })
            .catch((error) => {
                
                res.status(200).json({ code: 400, status: 'failed', error: error.message });
            });
    }

    getUserActionCount(req, res) {
        return appinsightlibs.getUserActionCount(req.query.userEmail, req.query.startDate, req.query.endDate)
            .then((response) => {
                
                res.status(200).json({ code: 200, status: 'success', data: response.result });
            })
            .catch((error) => {
                
                res.status(200).json({ code: 400, status: 'failed', error: error.message });
            });
    }

    getTodayActionwiseCount(req, res) {
        return appinsightlibs.getTodayActionwiseCount()
            .then((response) => {
                
                res.status(200).json({ code: 200, status: 'success', data: response.result });
            })
            .catch((error) => {
                
                res.status(200).json({ code: 400, status: 'failed', error: error.message });
            });
    }
}

module.exports = new AppInsightController();