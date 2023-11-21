import { productService } from "../Service/index.js"

class ProductController {
    async getProducts(req, res, next) {
      try {
        const limit = !isNaN(parseInt(req.query.limit)) ? parseInt(req.query.limit) : 6
        const page = !isNaN(parseInt(req.query.page)) ? parseInt(req.query.page) : 1
        const searchTerm = req.query.name || ''
    
        // Modifica para dividir en palabras clave correctamente
        const keywords = searchTerm.trim().split(/\s+/)
        let query = {}
    
        if (keywords.length > 0) {
          // Construye consulta con filtros de título y categoria si hay palabras clave
          query.$or = keywords.map(keyword => ({
            $or: [
              { name: new RegExp(keyword, 'i') },
              { category: new RegExp(keyword, 'i') },
              { material: new RegExp(keyword, 'i') }
            ]
          }))
        }
    
        const results = await productService.paginate(query, { limit, page, lean: true })
        if (!results || results?.error) {
          return res.status(404).send({
            status: 404,
            response: results.error || 'Products pagination error!'
          })
        }
    
        return res.status(200).send({
          status: 200,
          response: results
        })
      } catch (error) {
        next(error)
      }
  }

  async getProduct(req, res, next) {
    try {
      const productId = req.params.pid
      const product = await productService.getById(productId)

      if (!product) {
        return res.status(404).send({
          status: 404,
          response: `Failed to get product ${productId}`
        })
      }
      return res.status(200).send({
        status: 200,
        response: product
      })
    } catch (error) {
      next(error)
    }
  }

  async createProduct(req, res, next) {
    try {
      const productData = req.body
      const product = await productService.create(productData)
      console.log(product)
      if(!product) {
        return res.status(404).json({
          success: false,
          message: 'Product not found',
        })
      }
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