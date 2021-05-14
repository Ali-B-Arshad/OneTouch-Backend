const config = require('config');
const ProfileLibs = require('../utils/profilelibs');


const profileLibs = new ProfileLibs();

class ProfileController {

    getFacebookPages(req, res) {  
        return profileLibs.getFacebookPages(req.query.code)
            .then((response) => {
                
                res.status(200).json({ code: 200, status: "success", pages: response.pages, availablePages: response.availablePages });
            })
            .catch((error) => {
                
                res.status(200).json({ code: 400, status: "failed", error: error.message });
            });
    }

    getFacebookGroups(req, res) {   
        return profileLibs.getFacebookGroups(req.body.userScopeId, req.query.accountId, req.query.teamId)
            .then((groups) => {
                analyticsServices.registerEvents({
                    category: req.body.userScopeEmail,
                    action: configruation.user_service_events.event_action.Profiles,
                    label: configruation.user_service_events.profile_event_label.facebook_group_details.replace("{{profileId}}", req.query.accountId).replace("{{teamId}}", req.query.teamId).replace('{{user}}', req.body.userScopeName).replace('{{id}}', req.body.userScopeId)
                });
                res.status(200).json({ code: 200, status: "success", group: groups });
            })
            .catch((error) => {
                analyticsServices.registerEvents({
                    category: req.body.userScopeEmail,
                    action: configruation.user_service_events.event_action.Profiles,
                    label: configruation.user_service_events.profile_event_label.facebook_group_details_failed.replace("{{profileId}}", req.query.accountId).replace("{{teamId}}", req.query.teamId).replace('{{user}}', req.body.userScopeName).replace('{{id}}', req.body.userScopeId)
                });
                res.status(200).json({ code: 400, status: "failed", message: error.message });
            });
    }

    getOwnFacebookGroups(req, res) {       
        return profileLibs.getOwnFacebookGroups(req.query.code)
            .then((response) => {
                
                res.status(200).json({ code: 200, status: "success", groups: response.groups, availableGroups: response.availableGroups });
            })
            .catch((error) => {
                
                res.status(200).json({ code: 400, status: "failed", error: error.message });
            });
    }

    getInstaBusinessAccount(req, res) {    
        return profileLibs.getInstaBusinessAccount(req.query.code)
            .then((response) => {
                
                res.status(200).json({ code: 200, status: "success", pages: response.pages, availablePages: response.availablePages });
            })
            .catch((error) => {
                
                res.status(200).json({ code: 400, status: "failed", error: error.message });
            });
    }

    getcompanyProfileDetails(req, res) {    
        return profileLibs.getcompanyProfileDetails(req.query.code)
            .then((response) => {
                
                res.status(200).json({ code: 200, status: "success", company: response.company, availablePages: response.availablePages });
            })
            .catch((error) => {
                
                res.status(200).json({ code: 400, status: "failed", error: error.message });
            });
    }

    getYoutubeChannels(req, res) {       
        return profileLibs.getYoutubeChannels(req.query.code)
            .then((response) => {
                
                res.status(200).json({ code: 200, status: "success", channels: response.channels, availableChannels: response.availableChannels });
            })
            .catch((error) => {
                
                res.status(200).json({ code: 400, status: "failed", error: error.message });
            });
    }

    getGoogleAnalyticAccounts(req, res) {     
        return profileLibs.getGoogleAnalyticAccounts(req.query.code)
            .then((response) => {
                
                res.status(200).json({ code: 200, status: "success", AnalyticAccounts: response.AnalyticAccounts, availableAccounts: response.availableAccounts });
            })
            .catch((error) => {
                
                res.status(200).json({ code: 400, status: "failed", error: error.message });
            });
    }


    fetchNewPinterestBoards(req, res) {    
        return profileLibs.getSocialAccountInfo(req.query.accountId)
            .then((socialAccounts) => {
                if (!socialAccounts)
                    throw new Error("Sorry, The requested account not found.");
                else
                    return profileLibs.getNewBoards(req.query.accountId, socialAccounts.access_token);
            })
            .then((message) => {
                
                res.status(200).json(message);
            })
            .catch((error) => {
                
                res.status(200).json({ code: 400, status: 'failed', error: error.message });
            });
    }

    createPinterestBoards(req, res) {  
        return profileLibs.createPinterestBoards(req.query.accountId, req.query.boardName, req.query.boardDescription)
            .then((response) => {
                
                res.status(200).json({ code: 200, status: 'success', message: response });
            })
            .catch((error) => {
                
                res.status(200).json({ code: 400, status: 'failed', error: error.message });
            });
    }

    deletePinterestBoards(req, res) {
        return profileLibs.deletePinterestBoards(req.query.accountId, req.query.boardId)
            .then((response) => {
                
                res.status(200).json({ code: 200, status: 'success', message: response });
            })
            .catch((error) => {
                
                res.status(200).json({ code: 400, status: 'failed', error: error.message });
            });
    }
}


module.exports = new ProfileController();