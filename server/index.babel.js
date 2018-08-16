import path from 'path';
import express from 'express';
import bodyParser from 'body-parser';
import morgan from 'morgan';
import cors from 'cors';
import controller from './db/controller'
// import session from 'express-session';
// import './db';
// import router from './routes/index';
console.log(controller.addHash)

// const fs = require('fs');
const DIST_DIR = path.join(__dirname, '../dist');
const PORT = 8000;
const app = express();

const corsOption = {
  origin: true,
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  credentials: true,
  exposedHeaders: ['x-auth-token']
};

app.use(cors(corsOption));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(express.static(DIST_DIR));

app.get('/', (req, res) => {
  res.sendFile(path.join(DIST_DIR, 'index.html'));
});

app.post('/', controller.addHash, controller.addRoute, controller.addMethod, controller.addMiddleware, controller.addTimes)
app.post('/test', controller.addHash, controller.addRoute, controller.addMethod, controller.addMiddleware, controller.addTimes)

app.listen(PORT, () => `Listening on port ${PORT}`);
