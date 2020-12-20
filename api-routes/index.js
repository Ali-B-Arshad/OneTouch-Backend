const express = require("express");
let auth = require("./routes/auth");
let socialPlatforms = require("./routes/socialplatformsroutes")
let instaPlatforms = require("./routes/instaplatformroutes")

module.exports = () => {
    app = express.Router();
    auth(app);
    socialPlatforms(app);
    instaPlatforms(app);
    return app
}
//exports.authRouter = auth;
//exports.socialPlatformsRouter = socialPlatforms