import { createProduct } from './../controller/product.js'
import express from 'express';

const router = express.Router();
router.post('/productCreate',createProduct);
export default router;