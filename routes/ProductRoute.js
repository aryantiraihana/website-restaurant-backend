// untuk handle routingnya

import express from "express";
// import controller
import {
    getProducts, 
    getProductById,
    createProduct,
    updateProduct,
    deleteProduct,
} from "../controllers/ProductController.js";

// membuat router baru menggunakan fungsi express.Router()
const router = express.Router();

//endpoint baru
router.get('/products', getProducts);
router.get('/products/:id', getProductById);
router.post('/products', createProduct);
router.patch('/products/:id', updateProduct);
router.delete('/products/:id', deleteProduct);

export default router;