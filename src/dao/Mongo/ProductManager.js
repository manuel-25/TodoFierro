import ProductModel from "./Models/product.model.js"

class ProductManagerDao {
    constructor() {
        this.ProductModel = ProductModel
    }

    async getAll() {
        return await ProductModel.find({}).explain('executionStats')
    }

    async paginate(query, config) {
        return await ProductModel.paginate(query, config)
    }

    async getById(productId) {
        return await ProductModel.findById(productId)
    }

    async create(data) {
        return await ProductModel.create(data)
    }

    async update(productId, data, config) {
        return await ProductModel.findByIdAndUpdate(productId, data, config)
    }

    async delete(productId) {
        return await ProductModel.findByIdAndDelete(productId)
    }
}

export default ProductManagerDao