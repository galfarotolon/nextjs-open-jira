import mongoose from 'mongoose';


/*
0 = disconnected
1 = connected
2 = connecting
3 = disconnecting
*/


const mongoConnection = {
    isConnected: 0
}

export const connect = async() => {
    if (mongoConnection.isConnected === 1) {
        console.log('Conectado')
        return;
    }

    if (mongoose.connections.length > 0 ){
        mongoConnection.isConnected = mongoose.connections[0].readyState;

        if (mongoConnection.isConnected === 1){
            console.log('Usando conexion anterior');
            return;
        }

        await mongoose.disconnect();
    }

    await mongoose.connect(process.env.MONGO_URL || '')
    mongoConnection.isConnected = 1;
    console.log('Conectado a MongoDB:', process.env.MONGO_URL)
}

export const disconnect = async() => {

    if (mongoConnection.isConnected === 0){

        await mongoose.disconnect();
        console.log('Desconectado de MongoDB')
    }

}