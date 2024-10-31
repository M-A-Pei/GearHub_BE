const db = require('../libs/prismaClient')

async function createProduct(product) {
    return await db.products.create({
        data: {...product, price: +product.price}
    })
}

async function getProducts() {
    return await db.products.findMany()
}

async function getProductsByCategory(category) {
    return await db.products.findMany({
        where: {
            category
        }
    })
}

async function searchProduct(name) {
    return await db.products.findMany({
        where: {
            name: {
                contains: name
            }
        }
    })
}

module.exports =  { createProduct, getProducts, getProductsByCategory, searchProduct }