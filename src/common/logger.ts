import winston from 'winston';

export const logger = winston.createLogger();

process.on('unhandledRejection', (reason, p) => {
  logger.warn('Possibly Unhandled Rejection at: Promise ', p, ' reason: ', reason);
});