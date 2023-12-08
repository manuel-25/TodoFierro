import { Router } from "express"
import productRoutes from './productRoutes.js'

const router = Router()

router.use('/products', productRoutes)

export default router