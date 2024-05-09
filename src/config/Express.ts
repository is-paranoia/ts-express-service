import express from 'express';
import routes from '../routes';
import cors from 'cors';
import {configureSwagger} from './Swagger';
import bodyParser from 'body-parser';
import {configureLogging} from './Logging';

export class ExpressConfig {

  app: express.Express;

  constructor () {
    this.app = express();

    configureSwagger(this.app);
    configureLogging(this.app);

    this.app.use(cors());
    this.app.use(bodyParser.json());
    this.app.use(bodyParser.urlencoded({extended: false}));

    this.app.use(routes);
  }
}