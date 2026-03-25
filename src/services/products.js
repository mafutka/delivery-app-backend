import Product from "../models/products.js"

export const getAllProducts = async ({ category, sort }) => {
  let query = {}

  if (category) {
    query.category = category
  }

  let mongoQuery = Product.find(query).populate("shopId")

  if (sort === "price_asc") {
    mongoQuery = mongoQuery.sort({ price: 1 })
  }

  if (sort === "price_desc") {
    mongoQuery = mongoQuery.sort({ price: -1 })
  }

  if (sort === "name") {
    mongoQuery = mongoQuery.sort({ name: 1 })
  }

  const skip = (page - 1) * limit

  mongoQuery = mongoQuery.skip(skip).limit(Number(limit))

  const products = await mongoQuery

  return products
}
