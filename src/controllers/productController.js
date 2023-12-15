import { productService } from "../Service/index.js"

class ProductController {
  async getProducts(req, res, next) {
    try {
        const limit = !isNaN(parseInt(req.query.limit)) ? parseInt(req.query.limit) : 8;
        const page = !isNaN(parseInt(req.query.page)) ? parseInt(req.query.page) : 1;
        const searchTerm = req.query.name ?? '';
        const validSortFields = ['name', 'price', 'date']
        const sortBy = validSortFields.includes(req.query.sortBy) ? req.query.sortBy : '';
        const sortOrder = req.query.sortOrder === 'desc' ? -1 : 1;

        const keywords = searchTerm.trim().split(/\s+/);
        let query = { status: true };

        if (keywords.length > 0) {
            query.$or = keywords.map(keyword => ({
                $or: [
                    { name: new RegExp(keyword, 'i') },
                    { category: new RegExp(keyword, 'i') },
                    { material: new RegExp(keyword, 'i') }
                ]
            }));
        }

        if (req.query.category) {
            query.category = new RegExp(req.query.category, 'i');
        }

        if (req.query.isFeatured) {
            query.isFeatured = true;
        }

        // Agregar opción para los últimos productos (8 productos más recientes)
        if (req.query.latest) {
            query.date = { $exists: true };

            // Solo aplicar ordenación si el sortBy es 'date'
            if (sortBy === 'date') {
                const results = await productService.paginate(query, { limit, page, sort: { [sortBy]: sortOrder } });

                if (!results || results?.error) {
                    return res.status(404).send({
                        status: 404,
                        response: results.error || 'Products pagination error!'
                    });
                }

                return res.status(200).send({
                    status: 200,
                    response: results
                });
            }
        }

        // Si no es el caso de 'latest', simplemente consulta sin ordenación
        const results = await productService.paginate(query, { limit, page });

        if (!results || results?.error) {
            return res.status(404).send({
                status: 404,
                response: results.error || 'Products pagination error!'
            });
        }

        return res.status(200).send({
            status: 200,
            response: results
        });

    } catch (error) {
        next(error);
    }
}

  
  
  

  async getFeatured(req, res, next) {
    try {
      
    } catch (err) {
      next(err)
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
    } catch (err) {
      next(err)
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