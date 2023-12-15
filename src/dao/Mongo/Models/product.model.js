import { model, Schema } from 'mongoose'
import mongoosePaginate from 'mongoose-paginate-v2'

const collection = 'Products'
const productSchema = new Schema({
    name: { type: String, required: true, index: true },
    description: { type: String, default: '' },
    price: { type: Number, default: null },
    thumbnails: [{ type: String }],
    category: { type: String, required: true, index: true },
    status: { type: Boolean, default: true },
    color: { type: [String], default: ['Blanco', 'Negro'] },
    material: { type: [String], default: ['Hierro','Caño'] },
    date: { type: Date, default: Date.now, index: true },
    stock: { type: Number, default: 0 },
    isFeatured: { type: Boolean, default: false }
})


productSchema.plugin(mongoosePaginate)

const ProductModel = model(collection, productSchema)
export default ProductModel
