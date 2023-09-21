import express from 'express';
import { availableDoctorController } from './availableDoctors.controller';

const router = express.Router();

router.post('/create-available-doctor', availableDoctorController.createAvailableDoctor);
router.get('/', availableDoctorController.getAllAvailableDoctors);
router.get('/:id', availableDoctorController.getSingleAvailableDoctor);
router.patch('/:id', availableDoctorController.updateAvailableDoctor);
router.delete('/:id', availableDoctorController.deleteAvailableDoctor);

export const availableDoctorRoutes = router;
