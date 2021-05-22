const FriendLibs = require('../utils/friendlibs');
const config = require('config');
var helper = {};

helper.getTwitterFollowers = function (req, res) {
    var friendlibs = new FriendLibs();
    return friendlibs.getTwitterFollowers(req.body.userScopeId, req.query.accountId, req.query.teamId, req.query.cursorValue)
        .then((response) => {
            
            res.status(200).json({ code: 200, status: "success", response: response });
        })
        .catch((error) => {
            
            res.status(200).json({ code: 400, status: "failed", error: error.message });
        });
};

helper.getTwitterFollowing = function (req, res) {
    var friendlibs = new FriendLibs();
    return friendlibs.getTwitterFollowing(req.body.userScopeId, req.query.accountId, req.query.teamId, req.query.cursorValue)
        .then((response) => {
            
            res.status(200).json({ code: 200, status: "success", response: response });
        })
        .catch((error) => {
            
            res.status(200).json({ code: 400, status: "failed", error: error.message });
        });
};

helper.getTwitterSearchUser = function (req, res) {
    var friendlibs = new FriendLibs();
    return friendlibs.getTwitterSearchUser(req.body.userScopeId, req.query.accountId, req.query.teamId, req.query.keyword, req.query.pageId)
        .then((response) => {
            
            res.status(200).json({ code: 200, status: "success", response: response });
        })
        .catch((error) => {
            
            res.status(200).json({ code: 400, status: "failed", error: error.message });
        });
};


module.exports = helper;