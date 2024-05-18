import { Router } from "express";

import { addNewCategory, deleteCategory, getCategories, getCategoryById, getTotalCategories, updateCategory} from "../controllers/categories.controller.js";

const router = Router()

router.get('/categories', getCategories)

router.post('/categories', addNewCategory)

router.get('/categories/count', getTotalCategories)

router.get('/categories/:id', getCategoryById)

router.put('/categories/:id', updateCategory)

router.delete('/categories/:id', deleteCategory)

export default router