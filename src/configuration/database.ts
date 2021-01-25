import mysql from 'mysql';
import enviroments from './enviroment';


export default class MySQL {
    private static _instance: MySQL;
    private _cnn: mysql.Connection;

    constructor(){
        try {
            this._cnn = mysql.createConnection({
                host: enviroments.DB_HOST,
                database: enviroments.DB_NAME,
                user: enviroments.DB_USER,
                password: enviroments.DB_PASS,
            });
            this._cnn.connect();
        } catch (error) {
            throw error;
        }
    }

    public static get instance(){
        return this._instance || (this._instance = new this());
    }

    public static get cnn(){
        return this.instance._cnn;
    }

    public static doQuery(query: string, values: any){
        return new Promise((resolve,reject) => {
            this.instance._cnn.query(
                query,
                values,
                (err,results) => {
                    if(err) reject(err);
                    else resolve(results);
                }
            );
        });
    }

}