import {logger} from '../common/logger';
import {ExpressConfig} from './Express';
import config from 'config';

export class Application {
  
  server: unknown;
  express: ExpressConfig;

  constructor () {
    this.express = new ExpressConfig();

    const port = config.get('ports.http');

    this.server = this.express.app.listen(port, () => {
      logger.info(`      

          ┏┓┏┓┏┓┏┓┏┓      
          ┣┫┃┃┣  ┃┃       
          ┛┗┣┛┗┛┗┛┗┛      
                          
        - - - - - - -     
        Server started!   

        HTTP: http://localhost:${port}                
        API Docs: http://localhost:${port}/docs       
        API Spec: http://localhost:${port}/swagger    
        - - - - - - -                                
      `);
    });
  }

}