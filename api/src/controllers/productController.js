import { Products } from "../models/productModel.js";

//create products
export const createProducts = async (req, res) => {
  try {
    const newProduct = new Products({
      image: req.body.image,
      title: req.body.title,
      price: req.body.price,
    });
    await newProduct.save();
    res.send(newProduct);
  } catch (error) {
    res.status(500).json({ message: error });
  }
};

//get products
export const getProducts = async (req, res) => {
  try {
    const products = await Products.find();
    res.send(products);
    res.status(200);
  } catch (error) {
    res.status(500).json({ message: error });
  }
};

//get product by id
export const getProductsById = async (req, res) => {
  try {
    const { id } = req.params;
    const product = await Products.findById(id);
    if (!product) {
      res.status(404).json({ message: "not found" });
    }
    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({ message: error });
  }
};

//delete product
export const deleteProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedProduct = await Products.findByIdAndDelete(id);
    if (!deletedProduct) return res.status(404).json({ message: "product not found" });
    console.log(deleteProduct);
    res.status(200).json({ message: "product deleted", deletedProduct });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

//update product
export const updateProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const updatedProduct = await Products.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    if (!updatedProduct) {
      res.status(404).json({ message: "product not found" });
    }
    res
      .status(200)
      .json({ message: "product updated", product: updatedProduct });
  } catch (error) {
    res.status(500).json({ message: error });
  }
};
