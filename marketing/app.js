const express = require('express');
const morgan = require('morgan');
const helmet = require('helmet');
const cors = require('cors');
const bodyParser = require("body-parser");
const cookieParser = require('cookie-parser');
const logger = require('./utils/logger');
const DbConnect = require('./startup/dbconnect');
const Routes = require('./startup/routes');
const config = require('config');
const app = express();
const server = require('http').Server(app);

class App {

    constructor() {
        app.use(morgan("dev", { "stream": logger.stream }));
        app.use(helmet());
        app.use(express.json({ limit: '100mb' }));
        app.use(express.urlencoded({ extended: false }));
        app.use(express.static('public'));
        app.use(express.static('../../media'));
        app.use(cookieParser());
        var corsOptions = {
            origin: 'https://localhost:3000',
            optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
        }
        app.use(cors(corsOptions));

        app.use(bodyParser.json());

        process.on('unhandledRejection', (reason, promise) => {
            logger.debug(reason);
        });

        process.on('uncaughtException', (error) => {
            logger.debug(error);
        });

        var dbConnect = new DbConnect();

        return dbConnect.initialize()
            .then(() => {
                var routes = new Routes(app);
                return routes;
            })
            .then(() => {
                let port = config.get('user_OneTouch.port');
                server.listen(port, () => {
                    logger.info(`service listening on ${config.get('user_OneTouch.host_url')} with ${process.env.NODE_ENV} Environment!`);
                });
            })
            .catch((error) => {
                logger.error(error.message);
            });
    }
}

module.exports = new App();










