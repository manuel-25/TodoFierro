import mongoose from "mongoose";
import config from './config.js';

class MongoSingleton {
    static #instance;

    constructor() {
        mongoose.connect(config.MONGO_URL);

        mongoose.connection.on('connected', () => {
            console.log('Conectado a la base de datos MongoDB')
        })

        mongoose.connection.on('error', (err) => {
            console.error('Error de conexión a la base de datos MongoDB:', err)
        })

        mongoose.connection.on('disconnected', () => {
            console.log('Desconectado de la base de datos MongoDB')
        })
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
