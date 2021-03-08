const routes = require('express').Router();
const accountController = require('./controllers/reportControllers');

routes.get("/getSchedulePublishedReport", accountController.getSchedulePublishedReport);


routes.get("/getAccountPublishedReport", accountController.getAccountPublishedReport);
routes.get("/getTodayPostCount", accountController.getTodayPostedCount);
routes.get("/getXDayPublishCount", accountController.getXDayPublishCount);
routes.get("/getAccountwisePublishCount", accountController.getAccountwisePublishCount);
routes.get("/getTwitterMessage", accountController.getTwitterMessage);
routes.get("/getMessageBetweenTwoUsers", accountController.getMessageBetweenTwoUsers);
routes.get("/getPreviouslyMessagedUsers", accountController.getPreviouslyMessagedUsers);




module.exports = routes;