import http from 'http';
import express from 'express';
import TeacherController from './controller/TeacherController';

class AppServer {
  constructor() {
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
    this.app.use('/teacher', new TeacherController());
  }

  runServer() {
      console.log('SERVER: Start Running Server');
      this.app.server.listen(5001);
      console.log('SERVER: Done Running Server');
  }
}

let server = new AppServer();
server.bootstrap().setupAndRun();