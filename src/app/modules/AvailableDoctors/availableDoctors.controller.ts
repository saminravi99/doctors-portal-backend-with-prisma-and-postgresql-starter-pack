import { NextFunction, Request, Response } from "express";
import { availableDoctorServices } from "./availableDoctors.services";

const createAvailableDoctor = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { ...availableDoctorData } = req.body;
        const availableDoctor = await availableDoctorServices.createAvailableDoctor(availableDoctorData);
        res.status(200).json({
            status: 'success',
            message: 'Available Doctor created successfully',
            data: availableDoctor
        });
    } catch (error) {
        next(error)
    }
};

const getAllAvailableDoctors = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const availableDoctors = await availableDoctorServices.getAllAvailableDoctors();
        res.status(200).json({
            status: 'success',
            message: 'Available Doctors fetched successfully',
            data: availableDoctors.data,
        });
    } catch (error) {
        next(error)
    }
};

const getSingleAvailableDoctor = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { id } = req.params;
        const availableDoctor = await availableDoctorServices.getSingleAvailableDoctor(id);
        res.status(200).json({
            status: 'success',
            message: 'Available Doctor fetched successfully',
            data: availableDoctor
        });
    } catch (error) {
        next(error)
    }
};

const updateAvailableDoctor = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { id } = req.params;
        const { ...availableDoctorData } = req.body;
        const availableDoctor = await availableDoctorServices.updateAvailableDoctor(id, availableDoctorData);
        res.status(200).json({
            status: 'success',
            message: 'Available Doctor updated successfully',
            data: availableDoctor
        });
    } catch (error) {
        next(error)
    }
};

const deleteAvailableDoctor = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { id } = req.params;
        const availableDoctor = await availableDoctorServices.deleteAvailableDoctor(id);
        res.status(200).json({
            status: 'success',
            message: 'Available Doctor deleted successfully',
            data: availableDoctor
        });
    } catch (error) {
        next(error)
    }
};

export const availableDoctorController = {
    createAvailableDoctor,
    getAllAvailableDoctors,
    getSingleAvailableDoctor,
    updateAvailableDoctor,
    deleteAvailableDoctor
}
