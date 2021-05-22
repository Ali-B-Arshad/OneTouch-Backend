const { createLogger, format, transports } = require('winston');
const { combine, timestamp, label, prettyPrint } = format;
const fs = require('fs');


var transportsLogger = [];

transportsLogger.push(
    new transports.Console({
        level: 'info',
        format: format.combine(
            format.colorize(),
            format.simple()
        )
    })
)

// transportsLogger.push(
//     new transports.DailyRotateFile({
//         level: process.env.ENV === 'apidevelopment' ? 'debug' : 'info',
//         datePattern: 'YYYYMMDD',
//         filename: 'public/logs/library%DATE%.log',
//         handleExceptions: true,
//         json: true,
//         maxSize: '1g',
//         maxFiles: '3d'
//     })
// );


var logger = createLogger({
    format: combine(
        timestamp(),
        prettyPrint()
    ),
    transports: transportsLogger,
    exitOnError: false
});

logger.stream = {
    write: function(message, encoding){
        logger.info(message);
    }
};

module.exports = logger;