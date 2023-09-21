import express from 'express';
import { timeSlotsController } from './timeSlots.controller';

const router = express.Router();

router.post('/create-time-slot', timeSlotsController.createTimeSlot);
router.get('/', timeSlotsController.getAllTimeSlots);
router.get('/:id', timeSlotsController.getSingleTimeSlot);
router.patch('/:id', timeSlotsController.updateTimeSlot);
router.delete('/:id', timeSlotsController.deleteTimeSlot);

export const timeSlotsRoutes = router;
