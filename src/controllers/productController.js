import ProductManagerDao from "../dao/Mongo/ProductManager.js"

class ProductController {
    async getProducts(req, res, next) {
        try {
            console.log(ProductManagerDao.getProducts())
        } catch (err) {
            console.log(err)
        }
    }

    async createProduct(req, res, next) {
        try {
            const product = await ProductManagerDao.createProduct(req.body)
            console.log(product)
            return res.status(201).send({
                success: true,
                message: 'Created!',
                data: product
            })
        } catch (err) {
            console.error(err)
        }
    }
}

export default ProductController