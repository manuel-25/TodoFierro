import config from "../config/config.js"

class viewController {
    async renderIndex(req, res, next) {
        try {
            let featuredData
            let latestData

            const featured = await fetch(`${config.APP_URL}/api/products?limit=${8}&isFeatured=${true}`)
            const latest = await fetch(`${config.APP_URL}/api/products?limit=${8}&latest=true&sortBy=date`)

            if (featured.status === 200) {
                featuredData = await featured.json()
            }

            if (latest.status === 200) {
                latestData = await latest.json()
            }

            //console.log('featuredData', featuredData.response.docs)
            return res.render('index', {
                title: 'Home',
                style: 'index.css',
                script: 'index.js',
                featuredData: featuredData?.response,
                latestData: latestData?.response
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
            const latest = req.query.latest || ''
            const isFeatured = req.query.isFeatured || ''
            const sortBy = req.query.sortBy || ''
            const sortOrder = req.query.sortOrder || 'desc'

 
            let data = null
        
            const response = await fetch(`${config.APP_URL}/api/products?limit=${limit}&page=${page}&name=${name}&latest=${latest}&isFeatured=${isFeatured}&sortBy=${sortBy}&sortOrder=${sortOrder}`)

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

            const response = await fetch(`${config.APP_URL}/api/products/${pid}`)
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