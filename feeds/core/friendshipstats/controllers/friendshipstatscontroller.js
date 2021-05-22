const FeedLibs = require('../utils/friendshipstatslibs');
const config = require('config');

class FrienshipStatController {

    getFbProfileStats(req, res) {
        var feedLibs = new FeedLibs();
        return feedLibs.getFbProfileStats(req.body.userScopeId, req.query.accountId, req.query.teamId)
            .then((response) => {
                
                res.status(200).json({ code: 200, status: "success", friendShipStats: response });
            })
            .catch((error) => {
                
                res.status(200).json({ code: 400, status: "failed", message: error.message });
            });
    }

    getFbPageStats(req, res) {
        var feedLibs = new FeedLibs();
        return feedLibs.getFbPageStats(req.body.userScopeId, req.query.accountId, req.query.teamId)
            .then((response) => {
                
                res.status(200).json({ code: 200, status: "success", friendShipStats: response });
            })
            .catch((error) => {
                
                res.status(200).json({ code: 400, status: "failed", message: error.message });
            });
    }

    getTwtProfileStats(req, res) {
        var feedLibs = new FeedLibs();
        return feedLibs.getLookUp(req.body.userScopeId, req.query.accountId, req.query.teamId)
            .then((response) => {
                
                res.status(200).json({ code: 200, status: "success", friendShipStats: response });
            })
            .catch((error) => {
                
                res.status(200).json({ code: 400, status: "failed", message: error.message });
            });
    }

    getInstaProfileStats(req, res) {
        var feedLibs = new FeedLibs();
        return feedLibs.getInstaProfileStats(req.body.userScopeId, req.query.accountId, req.query.teamId)
            .then((response) => {
                
                res.status(200).json({ code: 200, status: "success", friendShipStats: response });
            })
            .catch((error) => {
                
                res.status(200).json({ code: 400, status: "failed", message: error.message });
            });
    }

    getLinkedInProfileStats(req, res) {
        var feedLibs = new FeedLibs();
        return feedLibs.getLinkedInProfileStats(req.body.userScopeId, req.query.accountId, req.query.teamId)
            .then((response) => {
                
                res.status(200).json({ code: 200, status: "success", friendShipStats: response });
            })
            .catch((error) => {
                
                res.status(200).json({ code: 400, status: "failed", message: error.message });
            });
    }

    getYoutubeProfileStats(req, res) {
        var feedLibs = new FeedLibs();
        return feedLibs.getYoutubeProfileStats(req.body.userScopeId, req.query.accountId, req.query.teamId)
            .then((response) => {
                
                res.status(200).json({ code: 200, status: "success", friendShipStats: response });
            })
            .catch((error) => {
                
                res.status(200).json({ code: 400, status: "failed", message: error.message });
            });
    }

    getPinterestProfileStats(req, res) {
        var feedLibs = new FeedLibs();
        return feedLibs.getPinterestProfileStats(req.body.userScopeId, req.query.accountId, req.query.teamId)
            .then((response) => {
                
                res.status(200).json({ code: 200, status: "success", friendShipStats: response });
            })
            .catch((error) => {
                
                res.status(200).json({ code: 400, status: "failed", message: error.message });
            });
    }

    getInstaBusinessProfileStats(req, res) {
        var feedLibs = new FeedLibs();
        return feedLibs.getInstaBusinessProfileStats(req.body.userScopeId, req.query.accountId, req.query.teamId)
            .then((response) => {
                
                res.status(200).json({ code: 200, status: "success", friendShipStats: response });
            })
            .catch((error) => {
                
                res.status(200).json({ code: 400, status: "failed", message: error.message });
            });
    }

}

module.exports = new FrienshipStatController();