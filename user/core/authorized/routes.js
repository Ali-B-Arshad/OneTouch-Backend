const routes = require("express").Router();

const authorizedUserController = require('./controllers/usercontroller');

routes.post('/changePassword', authorizedUserController.changePassword);
routes.get('/changePlan', authorizedUserController.changePlan);
routes.get('/changePaymentType', authorizedUserController.changePaymentType);
routes.get('/changeTwoStepOptions', authorizedUserController.change2StepOptions);

routes.get('/getUserInfo', authorizedUserController.getUserInfo);

routes.post('/updateProfileDetails', authorizedUserController.UpdateProfileDetails);
routes.put('/changeShortenStatus', authorizedUserController.changeShortenStatus);
routes.get('/getShortenUrl', authorizedUserController.getShortenUrl);

module.exports = routes;