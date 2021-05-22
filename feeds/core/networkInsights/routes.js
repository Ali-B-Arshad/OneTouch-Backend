var routes = require('express').Router();
var routes = require('express').Router();
const networkSightController = require('./controllers/networkInsightControllers');


routes.get('/getFacebookPageInsights', networkSightController.facebookPageInsights); //Working
routes.get('/getYoutubeInsights', networkSightController.getYoutubeInsights);  //Working Partially
routes.get('/getLinkedInCompanyInsights', networkSightController.getLinkedInCompanyInsights);
routes.get('/getInstagramBusinessInsights', networkSightController.getInstagramBusinessInsights); //Working
routes.get('/getTwitterInsights', networkSightController.getTwitterInsights);  //Working
routes.get('/getTeamInsights', networkSightController.getTeamInsights);

module.exports = routes;



