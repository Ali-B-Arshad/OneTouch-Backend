const { createLogger, format, transports } = require('winston');
const { combine, timestamp, label, prettyPrint } = format;
const fs = require('fs');
require('winston-daily-rotate-file');

if (!fs.existsSync('public/logs')) {
    fs.mkdirSync('public/logs');
}
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
//         level: 'error',
//         datePattern: 'YYYY-MM-DD',
//         filename: `public/logs/userError-%DATE%.log`,
//         handleExceptions: true,
//         json: true,
//         maxSize: '1g',
//         maxFiles: '1d'
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

