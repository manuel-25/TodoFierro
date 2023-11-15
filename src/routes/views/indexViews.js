import { Router } from "express";
import viewController from "../../controllers/viewController.js";

const {
    renderIndex, renderCatalog
} = viewController

const router = Router()

router.get('/', renderIndex)
router.get('/catalogo', renderCatalog)

export default router