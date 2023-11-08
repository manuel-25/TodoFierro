import { model, Schema } from 'mongoose'
import config from '../../../config/config.js'

const collection = 'products'
const productSchema = new Schema({
    nombre: { type: String, required: true },
    descripcion: { type: String },
    precio:{ type: Number, default: null },
    thumbnail: { type: String },
    categoria: { type: String, required: true },
    status: {type: Boolean, default: true},
    color: { type: String }
})

const ProductModel = model(collection, productSchema)
export default ProductModel