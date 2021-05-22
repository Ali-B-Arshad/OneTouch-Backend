const ReportLibs = require('../utils/reportlibs');

const config = require('config');

var reportServices = {};

reportServices.getTodayPostedCount = function (req, res) {
    var reportlibs = new ReportLibs();
    return reportlibs.getTodayPostedCount(req.body.userScopeId, req.query.teamId, req.query.accountId)
        .then((postCount) => {
            
            res.status(200).json({ code: 200, status: 'success', postCount: postCount });
        })
        .catch((error) => {
            
            res.status(200).json({ code: 400, status: 'failed', error: error.message });
        });
};

reportServices.getXDayPublishCount = function (req, res) {
    var reportlibs = new ReportLibs();
    return reportlibs.getXDayPublishCount(req.body.userScopeId, req.query.dayCount)
        .then((reportDetails) => {
            
            res.status(200).json({ code: 200, status: "success", reportDetails: reportDetails });
        })
        .catch((error) => {
            
            res.status(200).json({ code: 400, status: 'failed', error: error.message });
        });
};

reportServices.getAccountwisePublishCount = function (req, res) {
    var reportlibs = new ReportLibs();
    return reportlibs.getAccountwisePublishCount(req.body.userScopeId)
        .then((reportDetails) => {
            
            res.status(200).json({ code: 200, status: "success", reportDetails: reportDetails });
        })
        .catch((error) => {
            
            res.status(200).json({ code: 400, status: 'failed', error: error.message });
        });
};

reportServices.getSchedulePublishedReport = function (req, res) {
    var reportlibs = new ReportLibs();
    return reportlibs.getSchedulePublishedReport(req.query.scheduleId, req.body.userScopeId, req.query.pageId)
        .then((publishedDetails) => {
            
            res.status(200).json({ code: 200, status: "success", publishedDetails: publishedDetails });
        })
        .catch((error) => {
            
            res.status(200).json({ code: 400, status: 'failed', error: error.message });
        });
};

reportServices.getAccountPublishedReport = function (req, res) {
    var reportlibs = new ReportLibs();
    return reportlibs.getAccountPublishedReport(req.body.userScopeId, req.query.accountId, req.query.teamId, req.query.pageId)
        .then((publishedDetails) => {
            
            res.status(200).json({ code: 200, status: "success", publishedDetails: publishedDetails });
        })
        .catch((error) => {
            
            res.status(200).json({ code: 400, status: 'failed', error: error.message });
        });
};

reportServices.getTwitterMessage = function (req, res) {
    var reportlibs = new ReportLibs();
    return reportlibs.getTwitterMessage(req.body.userScopeId, req.query.accountId, req.query.teamId, req.query.pageId)
        .then((response) => {
            
            res.status(200).json({ code: 200, status: "success", count: response.length, posts: response });
        })
        .catch((error) => {
            
            res.status(200).json({ code: 400, status: 'failed', error: error.message });
        });
};

reportServices.getMessageBetweenTwoUsers = function (req, res) {
    var reportlibs = new ReportLibs();
    return reportlibs.getMessageBetweenTwoUsers(req.query.accountId, req.query.receiverId, req.query.pageId)
        .then((response) => {
            
            res.status(200).json({ code: 200, status: "success", count: response.length, posts: response });
        })
        .catch((error) => {
            
            res.status(200).json({ code: 400, status: 'failed', error: error.message });
        });
};

reportServices.getPreviouslyMessagedUsers = function (req, res) {
    var reportlibs = new ReportLibs();
    return reportlibs.getPreviouslyMessagedUsers(req.query.accountId, req.query.pageId)
        .then((response) => {
            
            res.status(200).json({ code: 200, status: "success", count: response.length, posts: response });
        })
        .catch((error) => {
            
            res.status(200).json({ code: 400, status: 'failed', error: error.message });
        });
};

module.exports = reportServices;