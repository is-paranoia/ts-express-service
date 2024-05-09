import winston from 'winston';
import config from 'config';
import expressWinston from 'express-winston';
import {logger} from '../common/logger';
import {Application} from 'express';

const level = config.get('loglevel');

export function configureLogging(app: Application) {
  if (level === 'info') {
    logger.add(
      new winston.transports.Console({
        level: 'verbose',
        format: winston.format.combine(
          //winston.format.colorize(),
          winston.format.prettyPrint()
        ),
        handleExceptions: true
      })
    );
  }

  configureExpress(app);
}

function configureExpress(app: Application) {
  // error logging
  if(level === 'debug') {
    app.use(expressWinston.errorLogger({
      transports: [
        new winston.transports.Console({
          format: winston.format.combine(
            winston.format.json(),
            winston.format.colorize()
          )
        })
      ]
    }));
  }

  // request logging
  if(level === 'info') {
    app.use(expressWinston.logger({
      transports: [
        new winston.transports.Console({
          format: winston.format.combine(
            winston.format.json(),
            winston.format.colorize()
          )
        })
      ]
    }));
  }
}