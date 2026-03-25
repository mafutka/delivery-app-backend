import Product from "../models/products"

export const getAllProducts = async ({category, sort}) => {
    let query = {}

    if (category) {
        query.category = category;
    }

    let mongoQuery = Product.find(query)

    if (sort === "price_acs") {
        mongoQuery = mongoQuery.sort({price: 1})
    }

    if (sort === "price_desc") {
        mongoQuery = mongoQuery.sort({price: -1})
    }

    if (sort === "name") {
        mongoQuery = mongoQuery.sort({name: 1})
    }

    const products = await mongoQuery;

    return products;
}

