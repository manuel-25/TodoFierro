import { Router } from "express"
import productController from "../../controllers/productController.js"

const router = Router()

router.get('/', productController.getProducts)
router.get('/:pid', productController.getProduct)

router.post('/', productController.createProduct)

export default router
