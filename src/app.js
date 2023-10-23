import express from 'express'
import router from './routes/index.js'
import logger from 'morgan'
import methodOverride from 'method-override'
import { __dirname, __filename } from './utils.js'
import expressLayouts from 'express-ejs-layouts'

const app = express()
const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
    console.log('El servidor esta corriendo en el puerto: ', PORT)
})

//Template engine
app.set('view engine', 'ejs')
app.set('views', __dirname + '/views')

// Configura la plantilla base (layout)
app.set('layout', 'partials/layout');
app.use(expressLayouts)

app.use('/public', express.static('public'))
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use('/', router)

app.use(logger('dev'))
app.use(methodOverride('_method'))