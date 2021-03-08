const routes = require('express').Router();
const adminController = require('./controller/adminController');

routes.get('/getAppUserStats', adminController.getAppUserStats);
routes.get('/getMonthlyUserStats', adminController.getMonthlyUserStats);
routes.get('/getUsers', adminController.getUsers);
routes.get('/getRecentSignup', adminController.getRecentSignup);

routes.get('/getUserPaymentHistory', adminController.getUserPaymentHistory);

routes.put('/updateUserlock', adminController.updateUserlock);

routes.put('/updatePlanForTrail', adminController.updatePlanForTrail);
routes.put('/updateTwoStepOptions', adminController.updateTwoStepOptions);
routes.get('/getPackages', adminController.getPackages);
routes.post('/addPackage', adminController.addPackage);

routes.put('/editPackage', adminController.editPackage);

routes.put('/updatePackageActivations', adminController.updatePackageActivations);
routes.post('/createcoupons', adminController.createCoupon);
routes.post('/changeCouponStatus', adminController.changeCouponStatus);

routes.get('/getCoupons', adminController.getCoupons);
routes.post('/getCouponInfo', adminController.getCouponInfo);
routes.get('/getUnverifiedPayments', adminController.getUnverifiedPayments);
routes.put('/verifyPayment', adminController.verifyPayment);

module.exports = routes;