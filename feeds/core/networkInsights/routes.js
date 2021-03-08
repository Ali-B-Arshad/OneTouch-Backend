var routes = require('express').Router();
var routes = require('express').Router();
const networkSightController = require('./controllers/networkInsightControllers');


routes.get('/getFacebookPageInsights', networkSightController.facebookPageInsights);
routes.get('/getYoutubeInsights', networkSightController.getYoutubeInsights);
routes.get('/getLinkedInCompanyInsights', networkSightController.getLinkedInCompanyInsights);
routes.get('/getInstagramBusinessInsights', networkSightController.getInstagramBusinessInsights);
routes.get('/getTwitterInsights', networkSightController.getTwitterInsights);
routes.get('/getTeamInsights', networkSightController.getTeamInsights);

module.exports = routes;



