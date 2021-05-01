const routes = require('express').Router();
const profileController = require('./controllers/profileController');

routes.get("/getOwnFacebookPages", profileController.getFacebookPages);
routes.get("/getOwnFacebookGroups", profileController.getOwnFacebookGroups);
routes.get("/getFacebookJoinedGroups", profileController.getFacebookGroups);
routes.get("/getInstaBusinessAccount", profileController.getInstaBusinessAccount);

routes.get("/getYoutubeChannels", profileController.getYoutubeChannels);

/**
 * @swagger
 * /v1/profile/getLinkedInCompanyProfiles:
 *   get:
 *     operationId: secured_profile_getLinkedInCompanyProfiles
 *     summary: Secured
 *     security:
 *     - AccessToken: []
 *     tags:
 *       - Profile
 *     description: To fetch the linkedIn company Profile details
 *     produces:
 *       - application/json
 *     parameters:
 *       - in: query
 *         description: Provide LinkedIn response Code
 *         name: code
 *         type: string
 *         required: true
 *     responses:
 *       200:
 *         description: Return success!
 *       404:
 *         description: Return Not Found or ErrorMessage
 *       401:
 *         $ref: "#/responses/unauthorizedError"
 */
routes.get("/getLinkedInCompanyProfiles", profileController.getcompanyProfileDetails);

/**
 * @swagger
 * /v1/profile/getGoogleAnalyticAccounts:
 *   get:
 *     operationId: secured_profile_getGoogleAnalyticAccounts
 *     summary: Secured
 *     security:
 *     - AccessToken: []
 *     tags:
 *       - Profile
 *     description: To fetch the google analytics account
 *     produces:
 *       - application/json
 *     parameters:
 *       - in: query
 *         description: Provide Google responseCode
 *         name: code
 *         type: string
 *         required: true
 *     responses:
 *       200:
 *         description: Return success!
 *       404: 
 *         description: Return Not Found or ErrorMessage
 *       401:
 *         $ref: "#/responses/unauthorizedError"
 */
routes.get("/getGoogleAnalyticAccounts", profileController.getGoogleAnalyticAccounts);

/**
 * @swagger
 * /v1/profile/createPinterestBoards:
 *   get:
 *     operationId: secured_profile_createPinterestBoards
 *     summary: Secured
 *     security:
 *     - AccessToken: []
 *     tags:
 *       - Profile
 *     description: To create a board
 *     produces:
 *       - application/json
 *     parameters:
 *       - in: query
 *         description: Provide accountId
 *         name: accountId
 *         type: string
 *       - in: query
 *         description: Provide board name
 *         name: boardName
 *         type: string
 *       - in: query
 *         description: Provide board description
 *         name: boardDescription
 *         type: string
 *     responses:
 *       200:
 *         description: Return success!
 *       404: 
 *         description: Return Not Found or ErrorMessage
 *       401:
 *         $ref: "#/responses/unauthorizedError"
 */
routes.get("/createPinterestBoards", profileController.createPinterestBoards);


/**
 * @swagger
 * /v1/profile/fetchNewPinterestBoards:
 *   get:
 *     operationId: secured_profile_fetchNewPinterestBoards
 *     summary: Secured
 *     security:
 *     - AccessToken: []
 *     tags:
 *       - Profile
 *     description: To fetch the Pinterest Boards
 *     produces:
 *       - application/json
 *     parameters:
 *       - in: query
 *         description: Provide accountId
 *         name: accountId
 *         type: string
 *     responses:
 *       200:
 *         description: Return success!
 *       404: 
 *         description: Return Not Found or ErrorMessage
 *       401:
 *         $ref: "#/responses/unauthorizedError"
 */
routes.get("/fetchNewPinterestBoards", profileController.fetchNewPinterestBoards);


/**
 * @swagger
 * /v1/profile/deletePinterestBoards:
 *   delete:
 *     operationId: secured_profile_deletePinterestBoards
 *     summary: Secured
 *     security:
 *     - AccessToken: []
 *     tags:
 *       - Profile
 *     description: To delete the particular pinterest board from Pinterest account
 *     produces:
 *       - application/json
 *     parameters:
 *       - in: query
 *         description: Provide accountId
 *         name: accountId
 *         type: string
 *       - in: query
 *         description: Provide board id
 *         name: boardId
 *         type: string
 *     responses:
 *       200:
 *         description: Return success!
 *       404: 
 *         description: Return Not Found or ErrorMessage
 *       401:
 *         $ref: "#/responses/unauthorizedError"
 */
routes.delete("/deletePinterestBoards", profileController.deletePinterestBoards);



module.exports = routes;

