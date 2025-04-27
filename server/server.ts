import express, { Application, Request, Response } from 'express';
import db from '../database/database';
import usuariosRoute from '../routes/usuario_route';

import cors from 'cors';
import path from 'path';

import http from 'http';




export default class Server {
    private static _intance: Server;
    public app: Application;
    public port: string;


    private httpServer: http.Server;


    private apiPatch = {
        usuarios: '/api/usuario',

    };

    private constructor() {
        this.app = express();
        this.app.use(express.json({ limit: '100mb' }));

        this.port = process.env.PORT || '80';
        this.httpServer = http.createServer(this.app);


        this.dbConnection();
        this.middlewares();
        this.routes();

    }
    public static get instance() {
        return this._intance || (this._intance = new this());
    }
    async dbConnection() {

        try {

            await db();
            console.log('Database online');

        } catch (error) {
            //throw new Error( error);
            console.log('error base de datos');
        }

    }
    middlewares() {

        // CORS
        this.app.use(cors());

        // Lectura del body
        this.app.use(express.json());

        // Carpeta pública
        this.app.use(express.static('public'));


    }

    routes() {
        this.app.use(this.apiPatch.usuarios, usuariosRoute);

        this.app.get('*', (req: Request, res: Response) => {
            res.sendFile(path.resolve(__dirname, 'public/index.html'));
        });
    }
    listen() {
        this.app.listen(this.port, () => {
            console.log('Servidor corriendo puerto: ' + this.port);
        });
    }

    start(callback: VoidFunction) {

        this.httpServer.listen(this.port, callback);

    }
}
