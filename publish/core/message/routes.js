const routes = require("express").Router();
const messageController = require('./controllers/messageController');

routes.post("/twitter", messageController.twitterDirectMessage);


module.exports = routes;