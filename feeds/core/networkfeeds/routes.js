const routes = require('express').Router();
const feedController = require('./controllers/feedControllers');

routes.get("/getFacebookFeeds", feedController.getFacebookFeeds);
routes.get("/getRecentFbFeeds", feedController.getRecentFbFeeds);

routes.get("/getTweets", feedController.getTweets);
routes.get("/getRecentTweets", feedController.getRecentTweets);
routes.get("/getHomeTimeLineTweets", feedController.getHomeTimeLineTweets);
routes.get("/getMentionTimeLineTweets", feedController.getMentionTimeLineTweets);
routes.get("/getTweetsByKeyword", feedController.getTweetsByKeyword);

routes.get("/getlinkedInCompanyFeeds", feedController.getCompanyUpdates);
routes.get("/getPinterestPins", feedController.getPinterestPins);
routes.get("/getYoutubeFeeds", feedController.getYoutubeFeeds);
routes.get("/getInstagramFeeds", feedController.getInstagramFeeds);
routes.get("/getRecentInstagramFeeds", feedController.getRecentInstagramFeeds);
routes.get("/getRecentInstagramBusinessFeeds", feedController.getInstagramBusinessFeeds);

module.exports = routes;
