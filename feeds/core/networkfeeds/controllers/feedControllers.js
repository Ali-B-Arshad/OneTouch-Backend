const FeedLibs = require('../utils/feedlibs');
const config = require('config');


class FeedController {

    getFacebookFeeds(req, res) {
        var feedLibs = new FeedLibs();
        return feedLibs.getFacebookFeeds(req.body.userScopeId, req.query.accountId, req.query.teamId, req.query.pageId)
            .then((response) => {
                
                res.status(200).json({ code: 200, status: "success", count: response.length, posts: response });
            })
            .catch((error) => {
                
                res.status(200).json({ code: 400, status: "failed", message: error.message });
            });
    }

    getRecentFbFeeds(req, res) {
        var feedLibs = new FeedLibs();
        console.log("Get FB Feeds")
        return feedLibs.getRecentFbFeeds(req.body.userScopeId, req.query.accountId, req.query.teamId, req.query.pageId, req.query.socialAccountId)
            .then((response) => {
                console.log(response)
                
                res.status(200).json({ code: 200, status: "success", count: response.length, posts: response });
            })
            .catch((error) => {
                
                res.status(200).json({ code: 400, status: "failed", message: error.message });
            });
    }

    getTweets(req, res) {
        var feedLibs = new FeedLibs();
        return feedLibs.getTweets(req.body.userScopeId, req.query.accountId, req.query.teamId, req.query.pageId)
            .then((response) => {
                
                res.status(200).json({ code: 200, status: "success", count: response.length, posts: response });
            })
            .catch((error) => {
                
                res.status(200).json({ code: 400, status: "failed", message: error.message });
            });

    }

    getRecentTweets(req, res) {
        var feedLibs = new FeedLibs();
        return feedLibs.getRecentTweets(req.body.userScopeId, req.query.accountId, req.query.teamId, req.query.pageId)
            .then((response) => {
                
                res.status(200).json({ code: 200, status: "success", data: { count: response.length, posts: response } });
            })
            .catch((error) => {
                
                res.status(200).json({ code: 400, status: "failed", message: error.message });
            });

    }

    getYoutubeFeeds(req, res) {
        var feedLibs = new FeedLibs();
        return feedLibs.getYoutubeFeeds(req.body.userScopeId, req.query.accountId, req.query.teamId, req.query.pageId)
            .then((response) => {
                
                res.status(200).json({ code: 200, status: "success", count: response.length, posts: response });
            })
            .catch((error) => {
                
                res.status(200).json({ code: 400, status: "failed", message: error.message });
            });
    }

    getHomeTimeLineTweets(req, res) {
        var feedLibs = new FeedLibs();
        return feedLibs.getHomeTimeLineTweets(req.body.userScopeId, req.query.accountId, req.query.teamId)
            .then((tweets) => {
                
                res.status(200).json({ code: 200, status: "success", timelineTweets: tweets });
            })
            .catch((error) => {
                
                res.status(200).json({ code: 400, status: "failed", message: error.message });
            });
    }

    getTweetsByKeyword(req, res) {
        var feedLibs = new FeedLibs();
        return feedLibs.getTweetsByKeyword(req.body.userScopeId, req.query.accountId, req.query.teamId, req.query.keyword)
            .then((tweets) => {
                
                res.status(200).json({ code: 200, status: "success", timelineTweets: tweets });
            })
            .catch((error) => {
                
                res.status(200).json({ code: 400, status: "failed", message: error.message });
            });
    }

    getMentionTimeLineTweets(req, res) {
        var feedLibs = new FeedLibs();
        return feedLibs.getMentionTimeLineTweets(req.body.userScopeId, req.query.accountId, req.query.teamId)
            .then((tweets) => {
                
                res.status(200).json({ code: 200, status: "success", timelineTweets: tweets });
            })
            .catch((error) => {
                
                res.status(200).json({ code: 400, status: "failed", message: error.message });
            });
    }

    getCompanyUpdates(req, res) {
        var feedLibs = new FeedLibs();
        return feedLibs.getCompanyUpdates(req.body.userScopeId, req.query.accountId, req.query.teamId)
            .then((feeds) => {
                
                res.status(200).json({ code: 200, status: "success", count: feeds.length, feeds: feeds });
            })
            .catch((error) => {
                
                res.status(200).json({ code: 400, status: "failed", message: error.message });
            });
    }

    getPinterestPins(req, res) {

        var feedLibs = new FeedLibs();
        return feedLibs.getPinterestPins(req.body.userScopeId, req.query.accountId, req.query.teamId, req.query.boardId)
            .then((response) => {
                
                res.status(200).json({ code: 200, status: "success", pins: response });
            })
            .catch((error) => {
                
                res.status(200).json({ code: 400, status: "failed", message: error.message });
            });

    }

    getInstagramFeeds(req, res) {
        var feedLibs = new FeedLibs();
        return feedLibs.getInstaFeedsFromDB(req.body.userScopeId, req.query.accountId, req.query.teamId, req.query.pageId)
            .then((response) => {
                
                res.status(200).json({ code: 200, status: "success", count: response.length, feeds: response });
            })
            .catch((error) => {
                
                res.status(200).json({ code: 400, status: "failed", message: error.message });
            });
    }

    getRecentInstagramFeeds(req, res) {
        var feedLibs = new FeedLibs();
        return feedLibs.getRecentInstagramFeeds(req.body.userScopeId, req.query.accountId, req.query.teamId, req.query.pageId)
            .then((response) => {
                
                res.status(200).json({ code: 200, status: "success", count: response.length, feeds: response });
            })
            .catch((error) => {
                
                res.status(200).json({ code: 400, status: "failed", message: error.message });
            });
    }

    getInstagramBusinessFeeds(req, res) {
        var feedLibs = new FeedLibs();
        return feedLibs.getInstagramBusinessFeeds(req.query.accountId, req.body.userScopeId, req.query.teamId, req.query.pageId) 
            .then((response) => {
                
                res.status(200).json({ code: 200, status: "success", count: response.length, posts: response });
            })
            .catch((error) => {
                
                res.status(200).json({ code: 400, status: "failed", message: error.message });
            });
    }
}
module.exports = new FeedController();