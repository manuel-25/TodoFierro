import express from 'express'
import router from './routes/index.js'
import logger from 'morgan'
import methodOverride from 'method-override'

const app = express()
const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
    console.log('El servidor esta corriendo en el puerto: ', PORT)
})

//Template engine
app.set('view engine', 'ejs')

app.use('/public', express.static('public'))
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use('/', router)

app.use(logger('dev'))
app.use(methodOverride('_method'))