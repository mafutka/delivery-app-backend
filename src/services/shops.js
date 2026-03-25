import Shop from "../models/shop.js";

export const getAllShops = async ({ minRating, maxRating }) => {
  let query = {};

  if (minRating && maxRating) {
    query.rating = {
      $gte: Number(minRating),
      $lte: Number(maxRating),
    };
  }

  return await Shop.find(query);
};