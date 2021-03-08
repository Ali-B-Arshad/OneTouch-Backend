const insightController = require('./controllers/insightController');
const routes = require('express').Router();

routes.put('/twtInsights', insightController.twtInsights);
routes.put('/updateTeamReport', insightController.updateTeamReport);


module.exports = routes;
