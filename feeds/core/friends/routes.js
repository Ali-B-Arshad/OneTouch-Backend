const routes = require('express').Router();
const friendsController = require('./controllers/friendsController');

routes.get("/getTwitterFollowers", friendsController.getTwitterFollowers);
routes.get("/getTwitterFollowing", friendsController.getTwitterFollowing);
routes.get("/getTwitterSearchUser", friendsController.getTwitterSearchUser);


module.exports = routes;