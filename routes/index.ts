import express, { Router } from 'express';
import apiRoutes from '@/routes/api';
import webRoutes from '@/routes/web';   

const router: Router = express.Router();

router.use('/api', apiRoutes);
router.use('/', webRoutes);

export default router;