const PaymentLibs = require('../utils/paymentlibs');
const config = require('config');
const paymentLibs = new PaymentLibs();

class PaymentController {

    getPaymentRedirectUrl(req, res) {
        return paymentLibs.getPaymentRedirectUrl(req.body.userScopeId, req.body.userScopeName, req.query.newPlanId, req.query.paymentMode, req.query.couponCode)
            .then((redirectUrl) => {
                
                res.status(200).json({ code: 200, status: 'success', redirectUrl: redirectUrl });
            })
            .catch((error) => {
                
                res.status(200).json({ code: 400, status: 'failed', error: error.message });
            });
    }

    paypalPaymentSuccess(req, res) {
        return paymentLibs.paypalPaymentSuccess(req.body.userScopeId, req.query.token, req.query.payerId)
            .then((result) => {
                
                res.status(200).json(result);
            })
            .catch((error) => {
                
                res.status(200).json({ code: 400, status: 'failed', error: error.message });
            });
    }


    payUMoneyPaymentSuccess(req, res) {
        return paymentLibs.payUMoneyPaymentSuccess(req.body.userScopeId, req.body.PaymentDetails)
            .then((result) => {
                
                res.status(200).json(result);
            })
            .catch((error) => {
                
                res.status(200).json({ code: 400, status: 'failed', error: error.message });
            });
    }

    getMyLastPaymentInfo(req, res) {
        return paymentLibs.getMyLastPaymentInfo(req.body.userScopeId)
            .then((result) => {
                
                res.status(200).json(result);
            })
            .catch((error) => {
                
                res.status(200).json({ code: 400, status: 'failed', error: error.message });
            });
    }

    getFullPaymentHistory(req, res) {
        return paymentLibs.getFullPaymentHistory(req.body.userScopeId)
            .then((result) => {
                
                res.status(200).json({ code: 200, status: 'success', data: result });
            })
            .catch((error) => {
                
                res.status(200).json({ code: 400, status: 'failed', error: error.message });
            });
    }

    paymentInvoiceDownloader(req, res) {
        return paymentLibs.paymentInvoiceDownloader(req.body.userScopeId)
            .then((result) => {
                
                res.status(200).json({ code: 200, status: 'success', data: result });
            })
            .catch((error) => {
                
                res.status(200).json({ code: 400, status: 'failed', error: error.message });
            });
    }

    paypalNotify(req, res) {
        res.status(200).json({ code: 200, status: 'success', message: "Paypal Notify Status " });
    }

}

module.exports = new PaymentController();