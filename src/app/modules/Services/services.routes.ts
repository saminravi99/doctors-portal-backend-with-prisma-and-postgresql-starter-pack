import express from 'express';
import { serviceController } from './services.controller';

const router = express.Router();

router.post('/create-service', serviceController.createService);
router.get('/', serviceController.getAllServices);
router.get('/:id', serviceController.getSingleService);
router.patch('/:id', serviceController.updateService);
router.delete('/:id', serviceController.deleteService);

export const serviceRoutes = router;
