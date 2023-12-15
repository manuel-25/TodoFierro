import config from "../config/config.js"

class viewController {
    async renderIndex(req, res, next) {
        try {
            const [featuredResponse, latestResponse] = await Promise.all([
                fetch(`${config.APP_URL}/api/products?limit=${8}&isFeatured=${true}`),
                fetch(`${config.APP_URL}/api/products?limit=${8}&latest=true&sortBy=date`)
            ]);
    
            const featuredData = (featuredResponse.status === 200) ? await featuredResponse.json() : null;
            const latestData = (latestResponse.status === 200) ? await latestResponse.json() : null;
    
            return res.render('index', {
                title: 'Home',
                style: 'index.css',
                script: 'index.js',
                featuredData: featuredData?.response,
                latestData: latestData?.response
            });
        } catch (err) {
            next(err);
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