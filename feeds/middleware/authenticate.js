const config = require('config');
const Helper = require('../../library/utility/authorizeServices');
const helper = new Helper(config.get('authorize'));
const moment = require('moment');

module.exports = (req, res, next) => {
    var token = req.headers['x-access-token'];
    if (token) {
        var decodedToken = helper.verifyToken(token);
        if (decodedToken.auth === false)
            return res.status(401).send('Accesstoken is missing or invalid');
        if (decodedToken) {
            var parsedToken = JSON.parse(decodedToken);
            var expireDate = parsedToken.Activations.account_expire_date;
            var remindingDays = moment(expireDate).diff(moment(), 'days');
            req.body.userScopeId = parsedToken.user_id;
            req.body.userScopeEmail = parsedToken.email;
            req.body.userScopeName = parsedToken.first_name;
            req.body.userScopeMaxAccountCount = parsedToken.userPlanDetails.account_count;
            req.body.userScopeMaxMemberCount = parsedToken.userPlanDetails.member_count;
            req.body.userScopeAvailableNetworks = parsedToken.userPlanDetails.available_network;
            req.body.userScopeMaxScheduleCount = parsedToken.userPlanDetails.maximum_schedule;
            req.body.userScopeIsAdmin = parsedToken.is_admin_user;


            req.body.userScopeCustomReport = parsedToken.userPlanDetails.custom_report;
            req.body.userScopeTeamReport = parsedToken.userPlanDetails.team_report;
            req.body.userScopeBoardMe = parsedToken.userPlanDetails.board_me;
            req.body.userScopeShareLibrary = parsedToken.userPlanDetails.share_library;
            req.body.userScopeContentStudio = parsedToken.userPlanDetails.content_studio;
            req.body.userScopeDiscovery = parsedToken.userPlanDetails.discovery;
            req.body.userScopeRssFeeds = parsedToken.userPlanDetails.rss_feeds;
            
            if (remindingDays < 0) {

                var redirectValueFromRequest = req.query.redirectToken;
                if (redirectValueFromRequest) {
                    var decryptredRedirectToken = JSON.parse(helper.decrypt(redirectValueFromRequest));

                    var expiredDays = moment(decryptredRedirectToken.expire_date).diff(moment(), 'days');

                    if (expiredDays >= 0 && decryptredRedirectToken.isChangePlan) {
                        req.body.AppScopedRedirectUrl = decryptredRedirectToken.redirect_url;
                        next();
                    }
                    else
                        res.status(200).json({ code: 401, status: "failed", message: "Something went wrong!" });
                }
                else {
                    var redirectTokenValue = {
                        isChangePlan: true,
                        expire_date: moment.utc().add(1, 'days'),
                        redirect_url: req.originalUrl
                    };
                    var redirectToken = helper.encrypt(JSON.stringify(redirectTokenValue));
                    res.redirect(`${config.get('user_OneTouch.host_url')}/user/changePlan/?userId=${parsedToken.user_id}&currentPlan=${parsedToken.Activations.user_plan}&newPlan=0&redirectToken=${redirectToken}`);
                }
            }
            else {
                next();
            }
        }
        else {
            res.status(200).json({ code: 400, status: "failed", message: "Bad request!" });
        }
    }
    else
        res.status(200).json({ code: 401, status: "failed", message: "Accesstoken is missing or invalid!" });
};