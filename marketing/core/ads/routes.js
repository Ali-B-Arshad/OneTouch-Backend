const routes = require("express").Router();

const adsManagementController = require('./controllers/adsmanagement');

routes.get('/getAdAccount', adsManagementController.getAdAccount);
routes.get('/queryAdAccount', adsManagementController.queryAdAccount);


module.exports = routes;