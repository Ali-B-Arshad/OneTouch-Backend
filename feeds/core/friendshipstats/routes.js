const routes = require('express').Router();
const feedController = require('./controllers/friendshipstatscontroller');

routes.get("/getFbProfileStats", feedController.getFbProfileStats);
routes.get("/getFbPageStats", feedController.getFbPageStats);
routes.get("/getTwtProfileStats", feedController.getTwtProfileStats);
routes.get("/getInstaProfileStats", feedController.getInstaProfileStats);
routes.get("/getLinkedInProfileStats", feedController.getLinkedInProfileStats);

routes.get("/getYoutubeProfileStats", feedController.getYoutubeProfileStats);
routes.get("/getPinterestProfileStats", feedController.getPinterestProfileStats);
routes.get("/getInstaBusinessProfileStats", feedController.getInstaBusinessProfileStats);



module.exports = routes;