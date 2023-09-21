import express from 'express';
import { paymentController } from './payments.controller';

const router = express.Router();

router.post('/create-payment', paymentController.createPayment);
router.get('/', paymentController.getAllPayments);
router.get('/:id', paymentController.getSinglePayment);
router.patch('/:id', paymentController.updatePayment);
router.delete('/:id', paymentController.deletePayment);

export const paymentRoutes = router;
