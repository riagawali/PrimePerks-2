const Product = require("../model/Product");

const getProducts = async () => {
  try {
    const products = await Product.find();
    return products;
  } catch (error) {
    throw new Error("Failed to fetch products");
  }
};

const createProduct = async (productData) => {
  try {
    console.log(productData);
    const product = new Product(productData);
    await product.save();
    return product;
  } catch (error) {
    throw new Error("Failed to create product");
  }
};

module.exports = {
  getProducts,
  createProduct,
};
