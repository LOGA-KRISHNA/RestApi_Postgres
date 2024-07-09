import express from 'express';
import { getOrder } from '../controllers/ordercontroller.js';

const router=express.Router();

router.post("/orders/",getOrder);

export default router;