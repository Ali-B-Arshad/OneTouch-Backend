const routes = require("express").Router();
const unauthorizedUserController = require('./controllers/usercontroller');

// Module Definitions for user services
routes.get("/checkUserNameAvailability", unauthorizedUserController.checkUserNameAvailability);
routes.get("/checkEmailAvailability", unauthorizedUserController.checkEmailAvailability);

//Auth
routes.put("/register", unauthorizedUserController.register);
routes.post("/login", unauthorizedUserController.login);
routes.get("/Sociallogin", unauthorizedUserController.socialLogin);
routes.get("/auth/facebook/callback", unauthorizedUserController.facebookCallback);
routes.get("/auth/google/callback", unauthorizedUserController.googleCallback);

routes.get("/paypal/successDetails/", unauthorizedUserController.paypalSuccess);
routes.get('/verifyEmail', unauthorizedUserController.verifyEmail);
routes.get('/forgotPassword', unauthorizedUserController.forgotPassword);
routes.get('/verifyPasswordToken', unauthorizedUserController.verifyPasswordToken);
routes.post('/resetPassword', unauthorizedUserController.resetPassword);
routes.get("/getMailActivationLink", unauthorizedUserController.getActivationLink);
routes.get('/twoStepLogin', unauthorizedUserController.twoStepLogin);
routes.post('/twoStepLoginSuccess', unauthorizedUserController.twoStepLoginSuccess);
routes.post('/twoStepLoginValidate', unauthorizedUserController.twoStepLoginValidate)

module.exports = routes;