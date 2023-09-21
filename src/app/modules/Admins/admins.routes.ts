import express from 'express';
import { adminController } from './admins.controller';

const router = express.Router();

router.post('/create-admin', adminController.createAdmin);
router.get('/', adminController.getAllAdmins);
router.get('/:id', adminController.getSingleAdmin);
router.patch('/:id', adminController.updateAdmin);
router.delete('/:id', adminController.deleteAdmin);

export const adminRoutes = router;
