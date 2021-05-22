var trendServices = {};
const TrendsLib = require('../utils/trendslibs');
const { validationResult } = require('express-validator/check');
const config = require('config');

trendServices.getGiphy = (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        var errorElement = errors.array().shift();
        return res.status(200).json({ code: 400, status: "failed", error: errorElement.msg });
    } else {
        var trendsLib = new TrendsLib();
        return trendsLib.getGiphy(req.query.keyword, req.query.pageId, req.query.filter)
            .then((response) => {
                
                res.status(200).json({ code: 200, status: "success", response: response });
            })
            .catch((error) => {
                
                res.status(200).json({ code: 400, status: "failed", error: error.message });
            });
    }
};

trendServices.getNewsApi = (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        var errorElement = errors.array().shift();
        return res.status(200).json({ code: 400, status: "failed", error: errorElement.msg });
    } else {
        var trendsLib = new TrendsLib();
        trendsLib.getNewsApi(req.query.keyword, req.query.pageId, req.query.sort)
            .then((response) => {
                
                res.status(200).json({ code: 200, status: "success", response: response });
            })
            .catch((error) => {
                
                res.status(200).json({ code: 400, status: "failed", error: error.message });
            });
    }
};

trendServices.getPixabay = (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        var errorElement = errors.array().shift();
        return res.status(200).json({ code: 400, status: "failed", error: errorElement.msg });
    } else {
        var trendsLib = new TrendsLib();
        trendsLib.getPixabay(req.query.keyword, req.query.pageId, req.query.filter, req.query.sort)
            .then((response) => {
                
                res.status(200).json({ code: 200, status: "success", response: response });
            })
            .catch((error) => {
                
                res.status(200).json({ code: 400, status: "failed", error: error.message });
            });
    }
};

trendServices.getFlickr = (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        var errorElement = errors.array().shift();
        return res.status(200).json({ code: 400, status: "failed", error: errorElement.msg });
    } else {
        var trendsLib = new TrendsLib();
        trendsLib.getFlickr(req.query.keyword, req.query.pageId, req.query.sort)
            .then((response) => {
                
                res.status(200).json({ code: 200, status: "success", response: response });
            })
            .catch((error) => {
                
                res.status(200).json({ code: 400, status: "failed", error: error.message });
            });
    }
};

trendServices.getDailyMotion = (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        var errorElement = errors.array().shift();
        return res.status(200).json({ code: 400, status: "failed", error: errorElement.msg });
    } else {
        var trendsLib = new TrendsLib();
        trendsLib.getDailyMotion(req.query.pageId, req.query.filter, req.query.sort)
            .then((response) => {
                
                res.status(200).json({ code: 200, status: "success", response: response });
            })
            .catch((error) => {
                
                res.status(200).json({ code: 400, status: "failed", error: error.message });
            });
    }
};

trendServices.getImgur = (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        var errorElement = errors.array().shift();
        return res.status(200).json({ code: 400, status: "failed", error: errorElement.msg });
    } else {
        var trendsLib = new TrendsLib();
        trendsLib.getImgur(req.query.keyword, req.query.pageId, req.query.filter, req.query.sort)
            .then((response) => {
                
                res.status(200).json({ code: 200, status: "success", response: response });
            })
            .catch((error) => {
                
                res.status(200).json({ code: 400, status: "failed", error: error.message });
            });
    }
};

trendServices.getRssFeeds = (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        var errorElement = errors.array().shift();
        return res.status(200).json({ code: 400, status: "failed", error: errorElement.msg });
    } else {
        var trendsLib = new TrendsLib();
        trendsLib.getRssFeeds(req.query.rssUrl)
            .then((response) => {
                
                res.status(200).json({ code: 200, status: "success", response: response });
            })
            .catch((error) => {
                
                res.status(200).json({ code: 400, status: "failed", error: error.message });
            });
    }
};

trendServices.getYoutube = (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        var errorElement = errors.array().shift();
        return res.status(200).json({ code: 400, status: "failed", error: errorElement.msg });
    } else {
        var trendsLib = new TrendsLib();
        trendsLib.getYoutube(req.query.pageId, req.query.keyword, req.query.sort)
            .then((response) => {
                
                res.status(200).json({ code: 200, status: "success", response: response });
            })
            .catch((error) => {
                
                res.status(200).json({ code: 400, status: "failed", error: error.message });
            });
    }
};

trendServices.getTwitter = (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        var errorElement = errors.array().shift();
        return res.status(200).json({ code: 400, status: "failed", error: errorElement.msg });
    } else {
        var trendsLib = new TrendsLib();
        trendsLib.getTwitter(req.query.keyword)
            .then((response) => {
                
                res.status(200).json({ code: 200, status: "success", response: response });
            })
            .catch((error) => {
                
                res.status(200).json({ code: 400, status: "failed", error: error.message });
            });
    }
};

trendServices.getCurrentTrends = (req, res) => {
    var trendsLib = new TrendsLib();
    trendsLib.getCurrentTrends(req.query.countryCode)
        .then((response) => {
            
            res.status(200).json({ code: 200, status: "success", response: response });
        })
        .catch((error) => {
            
            res.status(200).json({ code: 400, status: "failed", error: error.message });
        });
};

module.exports = trendServices;