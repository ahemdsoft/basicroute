import express from 'express';

import { homepage, genarate, find, del } from '../controller/controller.js';
const router =express.Router();
router.get('/',homepage);
router.get('/genarate',genarate);
router.get('/find',find);    
router.get('/delete',del);

export default router;