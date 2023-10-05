import express from 'express'
import { doctorController } from './Doctors.controller'

const router = express.Router()

router.post('/create-doctor', doctorController.createDoctor)
router.get('/', doctorController.getAllDoctors)
router.get('/:id', doctorController.getSingleDoctor)
router.patch('/:id', doctorController.updateDoctor)
router.delete('/:id', doctorController.deleteDoctor)

export const doctorRoutes = router
