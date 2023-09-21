import { NextFunction, Request, Response } from "express";
import { paymentServices } from "./payments.services";

const createPayment = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { ...paymentData } = req.body;
        const payment = await paymentServices.createPayment(paymentData);
        res.status(200).json({
            status: 'success',
            message: 'Payment created successfully',
            data: payment
        });
    } catch (error) {
        next(error)
    }
};

const getAllPayments = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const payments = await paymentServices.getAllPayments();
        res.status(200).json({
            status: 'success',
            message: 'Payments fetched successfully',
            data: payments.data,
        });
    } catch (error) {
        next(error)
    }
};

const getSinglePayment = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { id } = req.params;
        const payment = await paymentServices.getSinglePayment(id);
        res.status(200).json({
            status: 'success',
            message: 'Payment fetched successfully',
            data: payment
        });
    } catch (error) {
        next(error)
    }
};

const updatePayment = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { id } = req.params;
        const { ...paymentData } = req.body;
        const payment = await paymentServices.updatePayment(id, paymentData);
        res.status(200).json({
            status: 'success',
            message: 'Payment updated successfully',
            data: payment
        });
    } catch (error) {
        next(error)
    }
};

const deletePayment = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { id } = req.params;
        const payment = await paymentServices.deletePayment(id);
        res.status(200).json({
            status: 'success',
            message: 'Payment deleted successfully',
            data: payment
        });
    } catch (error) {
        next(error)
    }
};

export const paymentController = {
    createPayment,
    getAllPayments,
    getSinglePayment,
    updatePayment,
    deletePayment
}
