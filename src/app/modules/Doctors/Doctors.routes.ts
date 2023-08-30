import express from 'express'
import { doctorController } from './Doctors.controller'
const router = express.Router()

router.post('/create-doctor', doctorController.createDoctor)
router.get('/', doctorController.getDoctors)
router.get('/:id', doctorController.getDoctor)

export const doctorRoutes = router
