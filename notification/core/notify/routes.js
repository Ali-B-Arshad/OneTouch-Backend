const routes = require('express').Router();
const config = require('config');
const Helper = require('../../../library/utility/authorizeServices');
const notificationControllers = require('./controllers/notifyControllers');

const helper = new Helper(config.get('authorize'));
const logger = require('../../utils/logger');

module.exports = (io) => {
    routes.get('/sendTeamNotification', (req, res) => {

        try {
            var decryptredMessage = JSON.parse(helper.decrypt(req.query.notificationDetails));
            io.sockets.to(req.query.teamId).emit('notification', decryptredMessage);
            logger.info(`\n${JSON.stringify(decryptredMessage)}\n`);
        } catch (error) {
            logger.info(`\n${error}\n`);
        }
        res.status(200).json({ code: 200, status: 'success' });
    });

    routes.get('/sendUserNotification', (req, res) => {

        var data = {};
        try {
            logger.info("Started ...");
            logger.info(`Message : \n ${req.query.notificationDetails}`);
            var decryptedMessage = helper.decrypt(req.query.notificationDetails);
            logger.info(`decryptedMessage : \n ${decryptedMessage}`);
            var decryptredMessage = JSON.parse(helper.decrypt(req.query.notificationDetails));
            logger.info(`\n${JSON.stringify(decryptredMessage)}\n`);

            io.sockets.in(req.query.userId).emit('notification', decryptredMessage);
            data.message = { code: 200, status: 'success' };
            data.code = 200;
        } catch (error) {
            logger.info(`\n${error.message}\n`);
            data.message = { code: 400, status: 'failed', message: error.message };
            data.code = 400;
        }
        res.status(data.code).json(data.message);
    });


    routes.get('/getUserNotification', notificationControllers.getUsersNotifications);

    routes.get('/getTeamNotification', notificationControllers.getTeamsNotifications);

    routes.put('/updateNotificationStatus', notificationControllers.updateNotificationStatus);

    routes.put('/markAllUserNotificationsAsRead', notificationControllers.markAllUserNotificationsAsRead);

    routes.delete('/deleteParticularNotification', notificationControllers.deleteParticularNotification);

    routes.delete('/clearAllUserNotifications', notificationControllers.clearAllUserNotifications);

    return routes;
};