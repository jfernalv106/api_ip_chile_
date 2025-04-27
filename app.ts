import dotenv from 'dotenv';
import Server from './server/server';


dotenv.config();

const server: Server = Server.instance;


// Rutas de servicios





server.start(() => {
    console.log(`Servidor corriendo en el puerto ${server.port}`);
});

//server.listen();
