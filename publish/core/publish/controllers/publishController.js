const PublisherLibs = require('../utils/publishlibs');
var publishServices = {};

const config = require('config');


publishServices.publishPost = function (req, res) {
    var publishLibs = new PublisherLibs();

    // Add to publish queue
    return publishLibs.publishPost(req.body, req.query.teamId)
        .then((response) => {
            
            res.status(200).json(response);
        })
        .catch((error) => {
            
            res.status(200).json({ code: 400, status: "failed", error: error.message });
        });
};

publishServices.getDraftedPosts = function (req, res) {
    var publishLibs = new PublisherLibs();
    return publishLibs.getDraftedPosts(req.query.userScopeId, req.query.teamId, req.query.pageId)
        .then((response) => {
            
            res.status(200).json({ code: 200, status: 'success', data: response });
        })
        .catch((error) => {
            
            res.status(200).json({ code: 400, status: "failed", error: error.message });
        });
};

publishServices.getApprovalPostStatus = function (req, res) {
    var publishLibs = new PublisherLibs();
    return publishLibs.getApprovalPostStatus(req.query.userScopeId, req.query.teamId, req.query.pageId)
        .then((response) => {
            
            res.status(200).json({ code: 200, status: 'success', data: response });
        })
        .catch((error) => {
            
            res.status(200).json({ code: 400, status: "failed", error: error.message });
        });
};

publishServices.startPublish = function (postDetails, teamId, socialAccountIds) {
    var publishLibs = new PublisherLibs();
    // Call directly to publish a post to any social networks
    return publishLibs.startPublish(postDetails, teamId, socialAccountIds);
};


module.exports = publishServices;