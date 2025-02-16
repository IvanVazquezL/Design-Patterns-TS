//import { LocalLogger } from "./LocalLogger";
//const logger = new LocalLogger('Main.ts');

import { LoggerAdapter } from "./logger-adapter";

const logger = new LoggerAdapter('Main.ts');

logger.writeLog('It is a log.');
logger.writeError('It is an error.');
logger.writeWarning('It is a warning.');