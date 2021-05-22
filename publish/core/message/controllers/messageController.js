const MessageLibs = require('../utils/messagelibs');
const config = require('config');

var helper = {};

helper.twitterDirectMessage = function (req, res) {
    var messagelibs = new MessageLibs();
    return messagelibs.twitterDirectMessage(req.body)
        .then((response) => {
            
            res.status(200).json(response);
        })
        .catch((error) => {
            
            res.status(200).json({ code: 400, status: "failed", error: error.message });
        });
};

module.exports = helper;