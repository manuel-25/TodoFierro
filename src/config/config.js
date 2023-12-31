import dotenv from 'dotenv'
import MongoSingleton from './MongoSingleton.js'

dotenv.config({
    path: `./.env.development`
})

const config = {
    MONGO_URL: process.env.LINK_MONGO || '',
    APP_URL: 'http://localhost:8069',
    connectDB: async () => MongoSingleton.getInstance()
}

export default config