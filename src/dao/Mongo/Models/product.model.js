import { model, Schema } from 'mongoose'
import mongoosePaginate from 'mongoose-paginate'
import config from '../../../config/config.js'

const collection = 'Products'
const productSchema = new Schema({
    nombre: { type: String, required: true },
    descripcion: { type: String, default: '' },
    precio: { type: Number, default: null },
    thumbnails: [{ type: String }],
    categoria: { type: String, required: true },
    status: { type: Boolean, default: true },
    color: { type: String },
    material: { type: String, default: 'Hierro' },
    fecha: { type: Date },
    stock: { type: Number, default: 0 }
})

const ProductModel = model(collection, productSchema)
productSchema.plugin(mongoosePaginate)

export default ProductModel