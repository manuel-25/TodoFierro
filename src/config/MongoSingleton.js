import mongoose from "mongoose";
import config from './config.js';

class MongoSingleton {
    static #instance;

    constructor() {
        mongoose.connect(config.MONGO_URL);

        // Manejar el evento de conexión exitosa
        mongoose.connection.on('connected', () => {
            console.log('Conectado a la base de datos MongoDB');
        });

        // Manejar el evento de error de conexión
        mongoose.connection.on('error', (err) => {
            console.error('Error de conexión a la base de datos MongoDB:', err);
        });

        // Manejar el evento de desconexión
        mongoose.connection.on('disconnected', () => {
            console.log('Desconectado de la base de datos MongoDB');
        });
    }

    static getInstance() {
        if (this.#instance) {
            return this.#instance;
        } else {
            this.#instance = new MongoSingleton();
        }
    }
}

export default MongoSingleton;
