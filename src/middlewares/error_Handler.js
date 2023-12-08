//import { logger } from "../config/logger.js"

const errorHandler = (err, req, res, next) => {
    console.error(err)
    console.error(`status: ${err.status || 500} method: ${req.method} path: ${req.url} message: ${err.message}`)
    if (err.stack) {
        console.error(`Error stack trace: ${err.stack}`);
    }
    res.send({
        status: err.status || 500,
        message: err.message
    })
    /*return res.render('error', {
        title: 'Error',
        style: 'error.css',
        script: '',
        error: {
            status: err.status || 500,
            message: err.message
        }
    })*/
}

export default errorHandler