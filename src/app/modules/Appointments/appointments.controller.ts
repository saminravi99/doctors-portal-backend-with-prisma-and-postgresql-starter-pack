import { NextFunction, Request, Response } from "express";
import { appointmentServices } from "./appointments.services";

const createAppointment = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { ...appointmentData } = req.body;
        const appointment = await appointmentServices.createAppointment(appointmentData);
        res.status(200).json({
            status: 'success',
            message: 'Appointment created successfully',
            data: appointment
        });
    } catch (error) {
        next(error)
    }
};

const getAllAppointments = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const appointments = await appointmentServices.getAllAppointments();
        res.status(200).json({
            status: 'success',
            message: 'Appointments fetched successfully',
            data: appointments.data,
        });
    } catch (error) {
        next(error)
    }
};

const getSingleAppointment = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { id } = req.params;
        const appointment = await appointmentServices.getSingleAppointment(id);
        res.status(200).json({
            status: 'success',
            message: 'Appointment fetched successfully',
            data: appointment
        });
    } catch (error) {
        next(error)
    }
};

const updateAppointment = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { id } = req.params;
        const { ...appointmentData } = req.body;
        const appointment = await appointmentServices.updateAppointment(id, appointmentData);
        res.status(200).json({
            status: 'success',
            message: 'Appointment updated successfully',
            data: appointment
        });
    } catch (error) {
        next(error)
    }
};

const deleteAppointment = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { id } = req.params;
        const appointment = await appointmentServices.deleteAppointment(id);
        res.status(200).json({
            status: 'success',
            message: 'Appointment deleted successfully',
            data: appointment
        });
    } catch (error) {
        next(error)
    }
};

export const appointmentController = {
    createAppointment,
    getAllAppointments,
    getSingleAppointment,
    updateAppointment,
    deleteAppointment
}
