const winston = require('winston');

interface ILoggerAdapter {
    file: string;

    writeLog: (message: string) => void;
    writeError: (message: string) => void;
    writeWarning: (message: string) => void;
}

export class LoggerAdapter implements ILoggerAdapter {
    file: string;
    private logger: any;

    constructor(file: string) {
        this.file = file;
        this.logger = winston.createLogger({
            level: 'info', // Minimum log level to display
            format: winston.format.simple(),
            transports: [
                new winston.transports.Console(), // Log to console
            ],
        });
    }

    writeLog(message: string): void {
        this.logger.info(`[${this.file} log] ${message}`);
    }

    writeError(message: string): void {
        this.logger.error(`[${this.file} error] ${message}`);
    }

    writeWarning(message: string): void {
        this.logger.warn(`[${this.file} warning] ${message}`);
    } 
}