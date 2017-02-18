import http from 'http';
import express from 'express';
import TeacherController from './controller/TeacherController';
import Logger from './common/Logger';

class AppServer {
  constructor() {
    this.logger = new Logger();
  }

  bootstrap() {
    return new AppServer();
  }

  setupAndRun() {
    this.app = express();
    this.app.server = http.createServer(this.app);
    this.setupRoutes();
    this.runServer();
  }

  setupRoutes() {
    this.logger.info('AppServer: Start setupRoutes');
    this.app.use('/teacher', new TeacherController());
    this.logger.info('AppServer: End setupRoutes');
  }

  runServer() {
    this.logger.info('AppServer: Start runServer');
    this.app.server.listen(5001);
    this.logger.info('AppServer: End runServer');
  }
}

let server = new AppServer();
server.bootstrap().setupAndRun();