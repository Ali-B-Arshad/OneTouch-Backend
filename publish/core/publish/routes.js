const routes = require("express").Router();
const accountController = require('./controllers/publishController');

routes.post("/publishPosts", accountController.publishPost);
routes.get("/getDraftedPosts", accountController.getDraftedPosts);
routes.get("/getApprovalPostStatus", accountController.getApprovalPostStatus);

module.exports = routes;