import { Router } from "express";

const router = Router()

router.get('/', (req, res, next) => {
    res.send('Hola mundoo che')
})

export default router