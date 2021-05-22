const LikeCommentLibs = require('../utils/likecommentlibs');
const config = require('config');


class LikeCommentController {

    facebookLike(req, res) {
        var likeCommentLibs = new LikeCommentLibs();
        return likeCommentLibs.facebookLike(req.body.userScopeId, req.query.accountId, req.query.teamId, req.query.postId)
            .then((response) => {
                if (response.success) {
                    
                    res.status(200).json({ code: 200, status: "success", message: "Successfully liked." });
                }
                else
                    throw new Error("Sorry! Something went wrong with fb api.");
            })
            .catch((error) => {
                
                res.status(200).json({ code: 400, status: "failed", error: error.message });
            });
    }

    facebookComment(req, res) {
        var likeCommentLibs = new LikeCommentLibs();
        return likeCommentLibs.facebookComment(req.body.userScopeId, req.query.accountId, req.query.teamId, req.query.postId, req.query.comment)
            .then((response) => {
                
                res.status(200).json({ code: 200, status: "success", message: "Successfully commented.", commentedId: response.id });
            })
            .catch((error) => {
                
                res.status(200).json({ code: 400, status: "failed", error: error.message });
            });
    }

    twitterLike(req, res) {
        var likeCommentLibs = new LikeCommentLibs();
        return likeCommentLibs.twitterLike(req.body.userScopeId, req.query.accountId, req.query.teamId, req.query.tweetId)
            .then((response) => {
                
                res.status(200).json({ code: 200, status: "success", message: response });
            })
            .catch((error) => {
                
                res.status(200).json({ code: 400, status: "failed", error: error.message });
            });
    }

    twitterDislike(req, res) {
        var likeCommentLibs = new LikeCommentLibs();
        return likeCommentLibs.twitterDislike(req.body.userScopeId, req.query.accountId, req.query.teamId, req.query.tweetId)
            .then((response) => {
                
                res.status(200).json({ code: 200, status: "success", message: response });
            })
            .catch((error) => {
                
                res.status(200).json({ code: 400, status: "failed", error: error.message });
            });
    }

    twitterComment(req, res) {
        var likeCommentLibs = new LikeCommentLibs();
        return likeCommentLibs.twitterComment(req.body.userScopeId, req.query.accountId, req.query.teamId, req.query.tweetId, req.query.comment)
            .then((response) => {
                
                res.status(200).json({ code: 200, status: "success", message: `Successfully commented and commented id is ${response.commentId}.` });
            })
            .catch((error) => {
                
                res.status(200).json({ code: 400, status: "failed", error: error.message });
            });
    }

    twitterDeleteComment(req, res) {
        var likeCommentLibs = new LikeCommentLibs();
        return likeCommentLibs.twitterDeleteComment(req.body.userScopeId, req.query.accountId, req.query.teamId, req.query.tweetId)
            .then((response) => {
                
                res.status(200).json({ code: 200, status: "success", message: response });
            })
            .catch((error) => {
                
                res.status(200).json({ code: 400, status: "failed", error: error.message });
            });
    }

    youtubeLike(req, res) {
        var likeCommentLibs = new LikeCommentLibs();
        return likeCommentLibs.youtubeLike(req.body.userScopeId, req.query.accountId, req.query.teamId, req.query.videoId, req.query.rating)
            .then((response) => {
                
                res.status(200).json({ code: 200, status: "success", message: response });
            })
            .catch((error) => {
                
                res.status(200).json({ code: 400, status: "failed", error: error.message });
            });
    }

    youtubeComment(req, res) {
        var likeCommentLibs = new LikeCommentLibs();
        return likeCommentLibs.youtubeComment(req.body.userScopeId, req.query.accountId, req.query.teamId, req.query.videoId, req.query.comment)
            .then((response) => {
                
                res.status(200).json({ code: 200, status: "success", message: response });
            })
            .catch((error) => {
                
                res.status(200).json({ code: 400, status: "failed", error: error.message });
            });
    }

    youtubeReplyComment(req, res) {
        var likeCommentLibs = new LikeCommentLibs();
        return likeCommentLibs.youtubeReplyComment(req.body.userScopeId, req.query.accountId, req.query.teamId, req.query.commentId, req.query.comment)
            .then((response) => {
                
                res.status(200).json({ code: 200, status: "success", message: response });
            })
            .catch((error) => {
                
                res.status(200).json({ code: 400, status: "failed", error: error.message });
            });
    }

    instabusinesscomment(req, res) {
        var likeCommentLibs = new LikeCommentLibs();
        return likeCommentLibs.instabusinesscomment(req.body.userScopeId, req.query.accountId, req.query.teamId, req.query.mediaId)
            .then((response) => {
                
                res.status(200).json({ code: 200, status: "success", message: response });
            })
            .catch((error) => {
                
                res.status(200).json({ code: 400, status: "failed", error: error.message });
            });
    }

    instabusinesscommentreply(req, res) {
        var likeCommentLibs = new LikeCommentLibs();
        return likeCommentLibs.instabusinesscommentreply(req.body.userScopeId, req.query.accountId, req.query.teamId, req.query.commentId, req.query.comment)
            .then((response) => {
                
                res.status(200).json({ code: 200, status: "success", message: response });
            })
            .catch((error) => {
                
                res.status(200).json({ code: 400, status: "failed", error: error.message });
            });
    }

}
module.exports = new LikeCommentController();