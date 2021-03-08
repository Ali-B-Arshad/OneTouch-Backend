var routes = require('express').Router();
const trendsController = require('./controllers/trendcontrollers');
const planValidator = require('../../utils/planvalidator');

routes.get('/getGiphy', planValidator.isUserObtianedPermission('contentstudio'), trendsController.getGiphy);
routes.get('/getNewsApi', planValidator.isUserObtianedPermission('contentstudio'), trendsController.getNewsApi);
routes.get('/getPixabay', planValidator.isUserObtianedPermission('contentstudio'), trendsController.getPixabay);
routes.get('/getFlickr', planValidator.isUserObtianedPermission('contentstudio'), trendsController.getFlickr);
routes.get('/getDailyMotion', planValidator.isUserObtianedPermission('contentstudio'), trendsController.getDailyMotion);
routes.get('/getImgur', planValidator.isUserObtianedPermission('contentstudio'), trendsController.getImgur);
routes.get('/getRssFeeds', planValidator.isUserObtianedPermission('rssfeeds'), trendsController.getRssFeeds);
routes.get('/getYoutube', planValidator.isUserObtianedPermission('discovery'), trendsController.getYoutube);
routes.get('/getCurrentTrends', trendsController.getCurrentTrends);

routes.get('/getTwitter', planValidator.isUserObtianedPermission('discovery'), trendsController.getTwitter);

module.exports = routes;
