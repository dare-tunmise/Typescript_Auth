import express from 'express';
import http from 'http';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import compression from 'compression';
import cors from 'cors';
import mongoose from 'mongoose'
import { error } from 'console';

const app = express();

app.use(cors({
    credentials: true,
}))

app.use(compression());
app.use(cookieParser());
app.use(bodyParser.json());

const server = http.createServer(app);

server.listen(8080, ()=> {
    console.log(`server running  on  http://localhost:8080/`);
})

const MONGO_URI ='mongodb+srv://daretunmise:daretunmise@nodetuts.gabgh.mongodb.net/miniproj?retryWrites=true&w=majority&appName=nodetuts';

mongoose.Promise = Promise;
mongoose.connect(MONGO_URI);
mongoose.connection.on('error', (error: Error) => console.log(error));


