import { connect } from 'mongoose'



const db = async () => {
    const host = process.env.HOST || 'mongodb+srv://juaco:juacox2123@transporte.uaq2h.mongodb.net/usuario';
    try {
        await connect(host, {
            /** useNewUrlParser: true,
                useUnifiedTopology: true,
                useCreateIndex: true,
                useFindAndModify: false */
        }, () => {
            console.log('Base de datos online');

        });


    } catch (error) {
        console.log(error);
        throw new Error('Error a la hora de iniciar la base de datos');
    }


}



export default db;
