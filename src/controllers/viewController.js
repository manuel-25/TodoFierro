class viewController {
    async renderIndex(req, res, next) {
        try {
            return res.render('index', {
                title: 'Home',
                style: 'index.css',
                script: 'index.js'
            })
        } catch (err) {
            console.error(err)
        }
    }
}

export default new viewController()