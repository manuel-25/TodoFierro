import { productService } from "../Service/index.js"

class ProductController {
    async getProducts(req, res, next) {
        try {
            const results = await productService.getAll()
            return res.status(200).send({
                success: true,
                data: results
            })
        } catch (err) {
            console.log(err)
        }
    }

    async createProduct(req, res, next) {
        try {
            const product = await productService.create(req.body)
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

const productController = new ProductController()

export default productController