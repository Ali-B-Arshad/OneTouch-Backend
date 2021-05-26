const routes = require('express').Router();
const profileController = require('./controllers/profileController');

routes.get("/getOwnFacebookPages", profileController.getFacebookPages);
routes.get("/getOwnFacebookGroups", profileController.getOwnFacebookGroups);
routes.get("/getFacebookJoinedGroups", profileController.getFacebookGroups);
routes.get("/getInstaBusinessAccount", profileController.getInstaBusinessAccount);

routes.get("/getYoutubeChannels", profileController.getYoutubeChannels);
routes.get("/getLinkedInCompanyProfiles", profileController.getcompanyProfileDetails);

routes.get("/getGoogleAnalyticAccounts", profileController.getGoogleAnalyticAccounts);

routes.get("/createPinterestBoards", profileController.createPinterestBoards);

routes.get("/fetchNewPinterestBoards", profileController.fetchNewPinterestBoards);

routes.delete("/deletePinterestBoards", profileController.deletePinterestBoards);



module.exports = routes;

