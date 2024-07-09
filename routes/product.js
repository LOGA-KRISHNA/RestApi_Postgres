import express from 'express';
import { getProducts, getSingleProducts } from '../controllers/productcontroller.js';

const router=express.Router();

router.get('/products/',getProducts);
router.get('/products/:id/',getSingleProducts);


export default router;

