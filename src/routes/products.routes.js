import { Router } from "express";

import { getProducts, getProductById, getTotalProducts, addNewProduct, updateProduct, deleteProduct} from "../controllers/products.controller.js";

const router = Router()

router.get('/products', getProducts)

router.post('/products', addNewProduct)

router.get('/products/count', getTotalProducts)

router.get('/products/:id', getProductById)

router.put('/products/:id', updateProduct)

router.delete('/products/:id', deleteProduct)

export default router