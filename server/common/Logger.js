import 'babel-polyfill';
let winston = require('winston');
let dateFormatForLogger = require('dateformat');

export default class Logger {    
	constructor() {
        let formatTimeStamp = dateFormatForLogger(new Date(), "dd-mmm-yyyy hh:MM:ss.l");

        this.logger = new (winston.Logger)({
            level: 'info',
            exitOnError: false,
            handleExceptions: true,
            json: true,
            transports: [
                new (winston.transports.Console)({
                    timestamp: formatTimeStamp,
                    handleExceptions: false,
                    json: false,
                    colorize: true
                })
            ]
        });
	}

	debug(message) {
        this.logger.debug(message);
    }

    info(message) {
        this.logger.info(message);
    }

    warn(message) {
        this.logger.warn(message);
    }

    error(message) {
        this.logger.error(message);
    }
}