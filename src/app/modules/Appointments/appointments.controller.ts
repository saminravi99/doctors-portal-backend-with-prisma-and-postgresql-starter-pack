import { NextFunction, Request, Response } from "express";
import { appointmentServices } from "./appointments.services";

const bookAppointment = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { patientId, availableServiceId, appointmentDate } = req.body;
        const appointment = await appointmentServices.bookAppointment(patientId, availableServiceId, appointmentDate);
        res.status(200).json({
            status: 'success',
            message: 'Appointment created successfully',
            data: appointment
        });
    } catch (error) {
        next(error)
    }
};
const startAppointment = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { id } = req.params;
        const appointment = await appointmentServices.startAppointment(id);
        res.status(200).json({
            status: 'success',
            message: 'Appointment started successfully',
            data: appointment
        });
    } catch (error) {
        next(error)
    }
};
const cancelAppointment = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { id } = req.params;
        const appointment = await appointmentServices.cancelAppointment(id);
        res.status(200).json({
            status: 'success',
            message: 'Appointment created successfully',
            data: appointment
        });
    } catch (error) {
        next(error)
    }
};
const finishAppointment = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { id } = req.params;
        const appointment = await appointmentServices.finishAppointment(id);
        res.status(200).json({
            status: 'success',
            message: 'Appointment completed successfully',
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
            message: 'Appointments cancelled successfully',
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
    bookAppointment,
    startAppointment,
    cancelAppointment,
    finishAppointment,
    getAllAppointments,
    getSingleAppointment,
    updateAppointment,
    deleteAppointment
}
