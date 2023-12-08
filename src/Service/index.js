import ProductManagerDao from "../dao/Mongo/ProductManager.js";

const productService = new ProductManagerDao()

export {
    productService
}