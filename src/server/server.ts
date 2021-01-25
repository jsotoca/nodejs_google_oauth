import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import helmet from 'helmet';
import compression from 'compression';
import passport from 'passport';
import cookieSession from 'cookie-session';
import enviroments from '../configuration/enviroment';
import { routers } from '../routers/index.router';
require('../auth/passport.setup');
export default class Server {
    private _app: express.Application;
    private port: number | string;

    constructor(){
        this.initApp();
        this.initRouters();
        this.port = enviroments.PORT;
    }

    private initApp(){
        this._app = express();

        this._app.use(bodyParser.urlencoded({extended:false}));
        this._app.use(bodyParser.json());

        this._app.use(cookieSession({
            name: 'passport',
            keys: ['key1', 'key2']
        }));
        
        this._app.use(cors());
        this._app.use(helmet());
        this._app.use(compression());
        this._app.use(cors());

        this._app.use(passport.initialize());
        this._app.use(passport.session());
    }

    private initRouters(){
        this._app.use(routers);
    }

    public start(){
        this._app.listen(this.port,() => {
            console.log(`Server is running in the port ${this.port}`);
        });
    }
}