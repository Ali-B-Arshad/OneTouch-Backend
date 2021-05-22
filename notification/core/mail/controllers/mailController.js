const moment = require('moment');
const schedule = require('node-schedule');
const logger = require('../../../utils/logger');
const MailLibs = require("../utils/mailLibs");

const config = require('config');
const mailLibs = new MailLibs();

class MailController {

    constructor() {
        this.setupMailServicesCrons();
    }

    setupMailServicesCrons() {
        logger.info("Cron setup intialized for mail services...");

        schedule.scheduleJob('20 0 * * *', () => {
            logger.info(`Cron started to notify all user's whose plan going to expire within 7 days, started time ${moment()}`);
            return mailLibs.sendExpireAlert()
                .then(() => {
                    logger.info(`Cron process completed for notify all user's whose plan going to expire within 7 days, completed time ${moment()}`);
                })
                .catch((error) => {
                    logger.info(`Cron process errored while notifying user's whose plan going to expire within 7 days, stopped time ${moment()}`);
                });
        });

        schedule.scheduleJob('0 1 * * *', () => {
            logger.info(`Cron started to notify all user's whose plan already expired, started time ${moment()}`);
            return mailLibs.sendExpiredInitimation()
                .then(() => {
                    logger.info(`Cron process completed for notify all user's whose plan already expired, completed time ${moment()}`);
                })
                .catch((error) => {
                    logger.info(`Cron process errored while notifying user's whose plan already expired, stopped time ${moment()}`);
                });
        });

        schedule.scheduleJob('0 2 * * *', () => {
            logger.info(`Cron started to notify all user's who didnt login application in last 3 days, started time ${moment()}`);
            return mailLibs.sendLoginReminder()
                .then(() => {
                    logger.info(`Cron process completed for notify all user's who didnt login application in last 3 days, completed time ${moment()}`);
                })
                .catch((error) => {
                    logger.info(`Cron process errored while notifying user's who didnt login application in last 3 days, stopped time ${moment()}`);
                });
        });

        logger.info("Cron setup completed for mail services...");
    }



    sendExpireAlert(req, res) {
        return mailLibs.sendExpireAlert()
            .then(() => {
                
                res.status(200).json({ code: 200, status: "success", result: "Added to mail service queue, It will take few minutes to complete." });
            })
            .catch((error) => {
                
                res.status(200).json({ code: 400, status: "failed", error: error.message });
            });
    }

    sendExpiredInitimation(req, res) {
        return mailLibs.sendExpiredInitimation()
            .then(() => {
                
                res.status(200).json({ code: 200, status: "success", result: "Added to mail service queue, It will take few minutes to complete." });
            })
            .catch((error) => {
                
                res.status(200).json({ code: 400, status: "failed", error: error.message });
            });
    }

    sendLoginReminder(req, res) {
        return mailLibs.sendLoginReminder()
            .then(() => {
                
                res.status(200).json({ code: 200, status: "success", result: "Added to mail service queue, It will take few minutes to complete." });
            })
            .catch((error) => {
                
                res.status(200).json({ code: 400, status: "failed", error: error.message });
            });
    }

    sendCustomNotifications(req, res) {
        return mailLibs.sendCustomNotifications(req.body.notificationDetails)
            .then(() => {
                
                res.status(200).json({ code: 200, status: "success", result: "Added to mail service queue, It will take few minutes to complete." });
            })
            .catch((error) => {
                
                res.status(200).json({ code: 400, status: "failed", error: error.message });
            });
    }

    getUsersMailedInfo(req, res) {
        return mailLibs.getUsersMailedInfo(req.query.days, req.query.notifyType, req.query.email)
            .then((message) => {
                
                res.status(200).json({ code: 200, status: "success", result: message });
            })
            .catch((error) => {
                
                res.status(200).json({ code: 400, status: "failed", error: error.message });
            });
    }
}


module.exports = new MailController();




