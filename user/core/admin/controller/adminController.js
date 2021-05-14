const moment = require('moment');
const schedule = require('node-schedule');
const AdminLibs = require('../../admin/utils/adminlibs');
const logger = require('../../../utils/logger');
const config = require('config');

const adminLibs = new AdminLibs();

class AdminController {

    constructor() {
        this.saveMonthlyUserStats();
    }

    saveMonthlyUserStats() {
        logger.info("Cron setup intialized for monthly user stats...");
        schedule.scheduleJob('55 23 28 * *', function () {
            logger.info(`Cron started to save monthly user stats and started at ${moment()}`);

            return adminLibs.findTodayUserStats()
                .then(() => {
                    logger.info(`Cron save monthly user stats and finished at ${moment()}`);
                })
                .catch((error) => {
                    logger.info(`Cron process errored while save monthly user stats at ${moment()}`);
                });
        });
    }

    getAppUserStats(req, res) {
        return adminLibs.getAppUserInfo()
            .then((Response) => {
                
                res.status(200).json({ code: 200, status: "success", data: Response });
            })
            .catch((error) => {
                
                res.status(200).json({ code: 400, status: "failed", error: error.message });
            });
    }

    getMonthlyUserStats(req, res) {
        return adminLibs.getMonthlyUserStats(req.query.month, req.query.year)
            .then((Response) => {
                
                res.status(200).json({ code: 200, status: "success", data: Response });
            })
            .catch((error) => {
                
                res.status(200).json({ code: 400, status: "failed", error: error.message });
            });
    }

    getUsers(req, res) {
        return adminLibs.getFilteredUsers(req.query.filterType, req.query.planId, req.query.paymentStatus, req.query.nameOrEmail, req.query.pageId)
            .then((fulldetails) => {
                
                res.status(200).json({ code: 200, status: "success", userfullDetails: fulldetails });
            })
            .catch((error) => {
                
                res.status(200).json({ code: 400, status: "failed", error: error.message });
            });
    }

    getRecentSignup(req, res) {
        return adminLibs.getRecentSignup(req.query.filterType, req.query.startDate, req.query.endDate, req.query.pageId)
            .then((response) => {
                
                res.status(200).json({ code: 200, status: "success", count: response.count, accounts: response.accounts });
            })
            .catch((error) => {
                
                res.status(200).json({ code: 400, status: "failed", error: error.message });
            });
    }

    getUserPaymentHistory(req, res) {
        return adminLibs.getUserPaymentHistory(req.query.userId)
            .then((fulldetails) => {
                
                res.status(200).json({ code: 200, status: "success", paymentDetails: fulldetails });
            })
            .catch((error) => {
                
                res.status(200).json({ code: 400, status: "failed", error: error.message });
            });
    }

    updateUserlock(req, res) {
        return adminLibs.updateUserlock(req.query.userId, req.query.options)
            .then((result) => {
                
                res.status(200).json({ code: 200, status: "success", message: result });
            })
            .catch((error) => {
                
                res.status(200).json({ code: 400, status: "failed", error: error.message });
            });
    }

    updatePlanForTrail(req, res) {
        return adminLibs.updatePlanForTrail(req.query.userId, req.query.planId, req.query.dayCount)
            .then((result) => {
                
                res.status(200).json({ code: 200, status: "success", message: result });
            })
            .catch((error) => {
                
                res.status(200).json({ code: 400, status: "failed", error: error.message });
            });
    }

    updateTwoStepOptions(req, res) {
        return adminLibs.updateTwoStepOptions(req.query.userId, req.query.options)
            .then((result) => {
                
                res.status(200).json({ code: 200, status: "success", message: result });
            })
            .catch((error) => {
                
                res.status(200).json({ code: 400, status: "failed", error: error.message });
            });
    }

    getPackages(req, res) {
        return adminLibs.getPackages()
            .then((packages) => {
                
                res.status(200).json({ code: 200, status: "success", packages: packages });
            })
            .catch((error) => {
                
                res.status(200).json({ code: 400, status: "failed", error: error.message });
            });
    }

    addPackage(req, res) {
        return adminLibs.addPackage(req.body)
            .then((result) => {
                
                res.status(200).json({ code: 200, status: "success", message: "Package successfully created", packageInfo: result });
            }).catch((error) => {
                
                res.status(200).json({ code: 400, status: "failed", error: error.message });
            });
    }

    editPackage(req, res) {
        return adminLibs.editPackage(req.body.package, req.query.planId)
            .then((packageDetails) => {
                
                res.status(200).json({ code: 200, status: 'success', packageDetails: packageDetails });
            })
            .catch(function (error) {
                
                res.status(200).json({ code: 400, status: "failed", error: error });
            });
    }

    updatePackageActivations(req, res) {
        return adminLibs.updatePackageActivations(req.query.planId, req.query.options)
            .then((result) => {
                
                res.status(200).json({ code: 200, status: "success", message: result });
            })
            .catch((error) => {
                
                res.status(200).json({ code: 400, status: "failed", error: error.message });
            });
    }

    createCoupon(req, res) {
        return adminLibs.createCoupon(req.body.userScopeId, req.body.CouponInfo)
            .then((result) => {
                
                res.status(200).json({ code: 200, status: "success", message: result });
            })
            .catch((error) => {
                
                res.status(200).json({ code: 400, status: "failed", error: error.message });
            });
    }

    changeCouponStatus(req, res) {
        return adminLibs.changeCouponStatus(req.query.couponCode, req.query.status)
            .then((couponDetails) => {
                
                res.status(200).json({ code: 200, status: 'success', couponDetails: couponDetails });
            })
            .catch(function (error) {
                
                res.status(200).json({ code: 400, status: "failed", error: error.message });
            });
    }

    getCoupons(req, res) {
        return adminLibs.getCoupons()
            .then((coupons) => {
                
                res.status(200).json({ code: 200, status: "success", coupons: coupons });
            }).catch((error) => {
                
                res.status(200).json({ code: 400, status: "failed", error: error.message });
            });
    }

    getCouponInfo(req, res) {
        return adminLibs.getCouponInfo(req.query.user)
            .then((user) => {
                
                res.status(200).json({ code: 200, status: "success", user: user.length > 0 ? user : [] });
            })
            .catch((error) => {
                
                res.status(200).json({ code: 400, status: "failed", error: error.message });
            });
    }

    getUnverifiedPayments(req, res) {
        return adminLibs.getUnverifiedPayments(req.query.paymentMode)
            .then((result) => {
                
                res.status(200).json({ code: 200, status: "success", data: result.length > 0 ? result : [] });
            })
            .catch((error) => {

                
                res.status(200).json({ code: 400, status: "failed", error: error.message });
            });
    }

    verifyPayment(req, res) {
        return adminLibs.verifyPayment(req.query.paymentId, req.body.userScopeName)
            .then((result) => {

                
                res.status(200).json({ code: 200, status: "success", data: result });
            })
            .catch((error) => {
                
                res.status(200).json({ code: 400, status: "failed", error: error.message });
            });
    }
}

module.exports = new AdminController();
