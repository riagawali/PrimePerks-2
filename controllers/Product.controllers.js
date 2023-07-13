// const Product = require("../model/Product");

// const getProducts = async (req, res) => {
//   try {
//     const products = await Product.find();
//     res.json(products);
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ message: "Failed to fetch products" });
//   }
// };

// const createProduct = async (req, res) => {
//   try {
//     const { name, description, pricePerMonth, paused } = req.body;
//     const product = new Product({ name, description, pricePerMonth, paused });
//     await product.save();
//     res.json({ message: "Product created successfully" });
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ message: "Failed to create product" });
//   }
// };

// module.exports = {
//   getProducts,
//   createProduct,
// };

const productService = require("../services/productService");

const getProducts = async (req, res) => {
  try {
    const products = await productService.getProducts();
    res.json(products);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: error.message });
  }
};

const createProduct = async (req, res) => {
  try {
    const { name, description, price, duration } = req.body;
    const productData = { name, description, price, duration };
    const product = await productService.createProduct(productData);
    res.json({ message: "Product created successfully", product });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getProducts,
  createProduct,
};
