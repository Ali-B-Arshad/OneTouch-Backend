const routes = require('express').Router();
const webhookController = require('../webhooks/controllers/webhookcontrollers');

routes.post('/startTwitterWebhook', webhookController.startTwitterWebhook);
routes.delete('/stopTwitterWebhook', webhookController.stopTwitterWebhook);

routes.get('/getTwitterSubscriptionList', webhookController.getTwitterSubscriptionList);

module.exports = routes;