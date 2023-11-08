import { Router } from "express"
import productController from "../../controllers/productController.js"

const router = Router()

router.get('/', productController.getProducts)
router.post('/', productController.createProduct)

export default router
