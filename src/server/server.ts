import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import helmet from 'helmet';
import compression from 'compression';

import enviroments from '../configuration/enviroment';


export default class Server {
    private _app: express.Application;
    private port: number | string;

    constructor(){
        this.init_app();
        this.port = enviroments.PORT;
    }

    private init_app(){
        this._app = express();

        this._app.use(bodyParser.urlencoded({extended:false}));
        this._app.use(bodyParser.json());
        
        this._app.use(cors());
        this._app.use(helmet());
        this._app.use(compression());
        this._app.use(cors());
    }

    public start(){
        this._app.listen(this.port,() => {
            console.log(`Server is running in the port ${this.port}`);
        });
    }
}