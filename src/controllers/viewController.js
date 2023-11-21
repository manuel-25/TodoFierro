

class viewController {
    async renderIndex(req, res, next) {
        try {
            return res.render('index', {
                title: 'Home',
                style: 'index.css',
                script: 'index.js'
            })
        } catch (err) {
            next(err)
        }
    }

    async renderCatalog(req, res, next) {
        try {
            const limit = parseInt(req.query.limit) || null
            const page = parseInt(req.query.page) || null
            const name = req.query.name || ''
            const category = req.query.category || ''
            let data = null
        
            //Build url
            const url = new URL('http://localhost:3000/api/products')
            url.searchParams.append('limit', limit)
            url.searchParams.append('page', page)
            url.searchParams.append('name', name)
            const response = await fetch(url)

            if (response.status === 200) {
                data = await response.json()
            }

            return res.render('products/catalog', {
                title: 'Catalogo',
                style: 'catalog.css',
                script: 'catalog.js',
                data: data?.response,
                category
            })
        } catch (err) {
            next(err)
        }
    }

    async renderDetail(req, res, next) {
        try {
            const pid = req.params.pid
            let data

            const response = await fetch(`http://localhost:3000/api/products/${pid}`)
            if (response.status === 200) {
                data = await response.json()
            }

            return res.render('products/productDetail', {
                title: 'Detalle',
                style: 'productDetail.css',
                script: 'productDetail.js',
                data: data.response
            })
        } catch (error) {
            next(error)
        }
    }    
}

export default new viewController()