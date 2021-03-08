const routes = require("express").Router();
const schedulerController = require('./controllers/schedulerControllers');

routes.post("/create", schedulerController.create);
routes.get('/getScheduleDetails', schedulerController.getScheduleDetails);
routes.get('/getParticularScheduleDetails', schedulerController.getParticularScheduleDetails);
routes.get('/getFilteredScheduleDetails', schedulerController.getFilteredScheduleDetails);
routes.get('/getScheduleDetailsByCategories', schedulerController.getScheduleDetailsByCategories);
routes.put('/changeScheduleStatus', schedulerController.changeScheduleStatus);
routes.put('/cancel', schedulerController.cancel);
routes.delete('/delete', schedulerController.delete);
routes.put('/edit', schedulerController.edit);
routes.post('/createAutomatedRss', schedulerController.createRssSchedule);
routes.get('/getAutomatedRss', schedulerController.getAutomatedRss);
routes.put('/updateAutomatedRss', schedulerController.updateAutomatedRss);
routes.delete('/deleteAutomatedRss', schedulerController.deleteAutomatedRss);

module.exports = routes;