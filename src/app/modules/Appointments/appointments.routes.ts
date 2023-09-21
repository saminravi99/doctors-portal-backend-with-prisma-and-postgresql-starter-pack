import express from 'express';
import { appointmentController } from './appointments.controller';

const router = express.Router();

router.post('/create-appointment', appointmentController.createAppointment);
router.get('/', appointmentController.getAllAppointments);
router.get('/:id', appointmentController.getSingleAppointment);
router.patch('/:id', appointmentController.updateAppointment);
router.delete('/:id', appointmentController.deleteAppointment);

export const appointmentRoutes = router;
