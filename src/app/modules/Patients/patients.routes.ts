import express from 'express';
import { patientController } from './patients.controller';

const router = express.Router();

router.post('/create-patient', patientController.createPatient);
router.get('/', patientController.getAllPatients);
router.get('/:id', patientController.getSinglePatient);
router.patch('/:id', patientController.updatePatient);
router.delete('/:id', patientController.deletePatient);

export const patientRoutes = router;
