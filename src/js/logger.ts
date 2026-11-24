import winston from 'winston';
import "winston-daily-rotate-file";
//const { combine, timestamp, json } = winston.format;

// const getLabel = function (callingModule) {
//     var parts = callingModule.filename.split('/');
//     return parts[parts.length - 2] + '/' + parts.pop();
// };

export const logger: winston.Logger  = winston.createLogger({
    levels: {
        fatal: 0,
        error: 1,
        warn: 2,
        info: 3,
        debug: 4,
        trace: 5,
    },
    transports: [
        new winston.transports.Console({
            json: true,
            timestamp: true,
            depth: true,
            colorize: true
        }),
        new winston.transports.DailyRotateFile({
            filename: "app.log",
        }),
    ],
    format: winston.format.combine(
        winston.format.label({
            label: `Label️`,
        }),
        winston.format.timestamp({
            format: 'DD-MMM-YYYY HH:mm:ss.SSS',
        }),
        winston.format.align(),
        winston.format.printf(
            (info) =>
                `${info.level}: ${info.label} : ${[info.timestamp]}: ${info.message}`
        )
    )

});

