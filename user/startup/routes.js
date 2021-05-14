const authenticate = require('../middleware/authenticate');
const adminAuthenticate = require('../middleware/adminauthenicate');
const unauthorized = require("../core/unauthorized/routes");
const authorized = require("../core/authorized/routes");
const teamManagement = require("../core/team/routes");
const profile = require("../core/profiles/routes");
const payment = require("../core/payments/routes");
const appInsights = require('../core/appinsights/routes');
const admin = require('../core/admin/adminRoutes');

class Routes {
    constructor(app) {
        this.configureCors(app);
        app.use("/user/", unauthorized);
             
        app.use(authenticate);
        app.use("/authorized/", authorized);
        app.use("/team/", teamManagement);
        app.use("/profile/", profile);
        app.use("/payment/", payment);

        app.use(adminAuthenticate);
        app.use('/admin/', admin);
        app.use('/v1/appinsights/', appInsights);

        app.use("/", function (req, res) {
            res.status(404).send("404 Not Found");
        });    
    }

    configureCors(app) {
        app.use((req, res, next) => {
            res.setHeader('Access-Control-Allow-Origin', '*');
            res.setHeader('Access-Control-Allow-Methods', 'POST, PUT, DELETE, GET');
            res.setHeader('Cache-Control', 'no-cache');
            next();
        });
    }
}

module.exports = Routes;

