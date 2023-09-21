import express from 'express';
import { availableServiceController } from './availableServices.controller';

const router = express.Router();

router.post('/create-available-service', availableServiceController.createAvailableService);
router.get('/', availableServiceController.getAllAvailableServices);
router.get('/:id', availableServiceController.getSingleAvailableService);
router.patch('/:id', availableServiceController.updateAvailableService);
router.delete('/:id', availableServiceController.deleteAvailableService);

export const availableServiceRoutes = router;
