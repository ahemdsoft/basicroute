import express from 'express';

import { homepage, genarate, find, del,find2,reg } from '../controller/controller.js';
const router =express.Router();
router.get('/',homepage);
router.get('/genarate',genarate);
router.get('/find',find);    
router.get('/delete',del);
router.get('/find2',find2);
router.post('/register',reg)

export default router;