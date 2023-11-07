import mongoose from "mongoose"
import config from './config.js'

class MongoSingleton {
    static #instance
    constructor() {
        mongoose.connect(config.MONGO_URL)
    }

    static getInstance() {
        if(this.#instance) {
            return this.#instance;
        } else {
            this.#instance = new MongoSingleton()
        }
    }
}

export default MongoSingleton