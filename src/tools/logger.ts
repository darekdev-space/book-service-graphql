import winston from 'winston';
import {TIMESTAMP_FORMAT} from '../constans';

const logger = winston.createLogger({
    format: winston.format.combine(
        winston.format.timestamp({format: TIMESTAMP_FORMAT}),
        winston.format.colorize(),
        winston.format.simple()
    ),
    transports: [new winston.transports.Console()],
});

export default logger;
