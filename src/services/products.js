import Product from "../models/products.js"

// export const getAllProducts = async () => {
//   try {
//     // Повертаємо всі продукти без фільтрів
//     const products = await Product.find().populate("shopId");
//     return products;
//   } catch (error) {
//     console.log("Error fetching products:", error);
//     throw error;
//   }
// };

export const getAllProducts = async ({ category, sort, page = 1, limit = 10 }) => {
  let query = {}

  if (category) {
    query.category = category
    console.log(category)
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

  const pageNumber = Number(page) || 1
const limitNumber = Number(limit) || 10

const skip = (pageNumber - 1) * limitNumber

  mongoQuery = mongoQuery.skip(skip).limit(Number(limit))

  const products = await mongoQuery

  return products
}
