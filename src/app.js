import express from 'express'

const app = express()
const PORT = process.env.PORT || 3000
const router = express.Router()

app.use('/', router)

app.listen(PORT, () => {
    console.log('El servidor esta corriendo en el puerto: ', PORT)
})

router.get('/', (req, res) => {
    res.send('Hola mundoo')
})