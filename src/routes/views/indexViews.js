import { Router } from "express";
import viewController from "../../controllers/viewController.js";

const {
    renderIndex
} = viewController

const router = Router()

router.get('/', renderIndex)

export default router