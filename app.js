import express from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'
import firebase from 'firebase'
import morgan from 'morgan'
import cookieParser from "cookie-parser"
import {firebaseConfig} from './firebaseConfig.js'
import {config} from 'dotenv'
import session from "express-session";
import FileStore from "session-file-store";
import nms from './nms.js'

const app = express();
const port = 4900;
const fs = FileStore(session)

if (app.get('env') === 'production') {
    app.use(morgan('common'));
} else { //set NODE_ENV=dev
    app.use(morgan('dev'));
}

config();

firebase.initializeApp(firebaseConfig);

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(cookieParser());
app.use(express.static('public'));
app.use(session({
    store: new fs({
        path: 'server/sessions'
    }),
    secret: "aidsubd298db9aod",
    maxAge: Date().now + (60 * 1000 * 30),
    resave: true,
    saveUninitialized: false,
}));
// app.use('/api', routes);
// app.use('/*', createInvalidRouteError);

// app.use((err, req, res, next) => {
//     createServerError(500, 'DEFCON', res, "Internal Server Error")
//     next()
// });

app.listen(port, () => console.log(`Listening on port: ${port}`));
nms.run();

export default app;