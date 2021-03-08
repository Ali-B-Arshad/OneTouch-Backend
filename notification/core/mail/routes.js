const controllers = require('./controllers/mailController');
const routes = require('express').Router();



routes.post('/sendExpireAlert', controllers.sendExpireAlert);
routes.post('/sendExpiredInitimation', controllers.sendExpiredInitimation);
routes.post('/sendLoginReminder', controllers.sendLoginReminder);

// routes.post('/sendCustomNotifications', controllers.sendCustomNotifications);
routes.get('/getUsersMailedInfo', controllers.getUsersMailedInfo);

module.exports = routes;