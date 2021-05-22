const NetworkInsightLibs = require('../utils/networkinsightlibs');

const config = require('config');

class NetworkInsightController {

    facebookPageInsights(req, res) {

        var networkInsightLibs = new NetworkInsightLibs();
        return networkInsightLibs.facebookPageInsights(req.body.userScopeId, req.query.accountId, req.query.teamId, req.query.filterPeriod, req.query.since, req.query.until)
            .then((response) => {
                
                res.status(200).json({ code: 200, status: "success", result: response });
            })
            .catch((error) => {
                
                res.status(200).json({ code: 400, status: "failed", error: error.message });
            });
    }

    getYoutubeInsights(req, res) {
        var networkInsightLibs = new NetworkInsightLibs();
        return networkInsightLibs.getYoutubeInsights(req.body.userScopeId, req.query.accountId, req.query.teamId, req.query.filterPeriod, req.query.since, req.query.until)
            .then((response) => {
                
                res.status(200).json({ code: 200, status: "success", result: response });
            })
            .catch((error) => {
                
                res.status(200).json({ code: 400, status: "failed", error: error.message });
            });
    }

    getLinkedInCompanyInsights(req, res) {
        var networkInsightLibs = new NetworkInsightLibs();
        return networkInsightLibs.getLinkedInCompanyInsights(req.body.userScopeId, req.query.accountId, req.query.teamId, req.query.filterPeriod, req.query.since, req.query.until)
            .then((response) => {
                
                res.status(200).json({ code: 200, status: "success", result: response });
            })
            .catch((error) => {
                
                res.status(200).json({ code: 400, status: "failed", error: error.message });
            });
    }

    getInstagramBusinessInsights(req, res) {
        var networkInsightLibs = new NetworkInsightLibs();
        return networkInsightLibs.getInstagramBusinessInsights(req.body.userScopeId, req.query.accountId, req.query.teamId, req.query.filterPeriod, req.query.since, req.query.until)
            .then((response) => {
                
                res.status(200).json({ code: 200, status: "success", result: response });
            })
            .catch((error) => {
                
                res.status(200).json({ code: 400, status: "failed", error: error.message });
            });
    }

    getTwitterInsights(req, res) {
        var networkInsightLibs = new NetworkInsightLibs();
        return networkInsightLibs.getTwitterInsights(req.body.userScopeId, req.query.accountId, req.query.teamId, req.query.filterPeriod, req.query.since, req.query.until)
            .then((response) => {
                
                res.status(200).json({ code: 200, status: "success", result: response });
            })
            .catch((error) => {
                
                res.status(200).json({ code: 400, status: "failed", error: error.message });
            });
    }

    getTeamInsights(req, res) {
        var networkInsightLibs = new NetworkInsightLibs();
        return networkInsightLibs.getTeamInsights(req.body.userScopeId, req.query.teamId, req.query.filterPeriod, req.query.since, req.query.until)
            .then((response) => {
                
                res.status(200).json({ code: 200, status: "success", result: response });
            })
            .catch((error) => {
                
                res.status(200).json({ code: 400, status: "failed", error: error.message });
            });
    }
}
module.exports = new NetworkInsightController();

