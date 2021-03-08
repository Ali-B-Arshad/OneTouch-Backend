const routes = require('express').Router();
const paymentControllers = require('./controllers/paymentControllers');

routes.get('/getPaymentRedirectUrl', paymentControllers.getPaymentRedirectUrl);

routes.get('/paypalPaymentSuccess', paymentControllers.paypalPaymentSuccess);

routes.post('/payUMoneyPaymentSuccess', paymentControllers.payUMoneyPaymentSuccess);
routes.get('/getMyLastPaymentInfo', paymentControllers.getMyLastPaymentInfo);
routes.get('/getFullPaymentHistory', paymentControllers.getFullPaymentHistory);

routes.get('/paymentInvoiceDownloader', paymentControllers.paymentInvoiceDownloader);

routes.get('/paypalNotify', paymentControllers.paypalNotify);

module.exports = routes;