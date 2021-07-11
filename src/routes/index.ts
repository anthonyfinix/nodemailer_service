import express, { Router } from 'express';
// utility routes
import error from './error_handler';
import not_found from './not_found';
import expressJson from '../middlewares/expressJson';
import error_handler from './error_handler';
import urlEncoded from '../middlewares/urlEncoded';

import test from '../controllers/test';

const router: Router = express.Router();
router.get('/',(req,res)=>res.send('mailer service'))
router.post('/test',[urlEncoded(),error_handler,expressJson()],test);
router.use(error_handler);
router.use(not_found);
router.use(error);

export default router;