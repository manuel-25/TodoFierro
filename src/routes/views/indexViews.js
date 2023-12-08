import { Router } from "express";
import viewController from "../../controllers/viewController.js";

const {
    renderIndex, renderCatalog,
    renderDetail
} = viewController

const router = Router()

router.get('/', renderIndex)
router.get('/catalogo', renderCatalog)
router.get('/detalle/:pid', renderDetail)

export default router