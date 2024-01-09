import express from 'express'
import { createProducts, deleteProduct, getProducts, getProductsById, updateProduct } from '../controllers/productController.js';
const router = express.Router();

router.post('/product',createProducts)
router.get('/product',getProducts)
router.get('/product/:id',getProductsById)
router.delete('/product/:id',deleteProduct)
router.put('/product/:id',updateProduct)

export default router