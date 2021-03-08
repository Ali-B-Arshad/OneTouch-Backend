const config = require('config');
const MongoConnect = require('../../library/mongoose/connect');
const db = require('../../library/sequelize-cli/models/index');
const logger = require('../utils/logger');

class DbConnect {
    initialize() {
        return new Promise((resolve, reject) => {
            console.log("Starting")
            var mongoConnect = new MongoConnect();
            mongoConnect.mongoConfiguration = config.get('mongo');
            return mongoConnect.initialize()
                .then(() => {
                    console.log('Mongo Database has been connected.');
                    db.sequelize.sync({ force: false })
                        .then(() => {
                            console.log('Sequelize Database has been connected.')
                            resolve('Database Connected');
                        })
                        .catch((error) => {
                            console.log(error);
                            logger.error(`Mysql issues : ${error}`);
                            reject(new Error(`Mysql issues : ${error}`));
                        });
                })
                .catch((error) => {
                    logger.error(`Mongo issues : ${error}`);
                    reject(new Error(`Mongo issues : ${error}`));
                });
        });
    }
}

module.exports = DbConnect;