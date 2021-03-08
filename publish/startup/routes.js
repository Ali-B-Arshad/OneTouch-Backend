const authenticate = require('../middleware/authenticate');
const adminauthenicate = require('../middleware/adminauthenicate');

const uploads = require('../core/uploader/routes');
const scheduler = require('../core/scheduler/routes');
const publisher = require('../core/publish/routes');
const messageRoutes = require('../core/message/routes');
const adminScheduleRoutes = require('../core/scheduler/adminroutes');
const reportRoutes = require('../core/reports/routes');
const taskRoutes = require('../core/task/routes');

class Routes {

    constructor(app) {
        
        this.configureCors(app);
        app.use(authenticate);

        app.use('/upload/', uploads);
        app.use('/schedule/', scheduler);
        app.use('/publish/', publisher);
        app.use('/task', taskRoutes);
        app.use('/message/', messageRoutes);
        app.use('/reports/', reportRoutes);

        app.use(adminauthenicate);
        app.use('/v1/admin/', adminScheduleRoutes);

        app.use("/", function (req, res) {
            res.status(404).send("Woops! 404 Not Found");
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



