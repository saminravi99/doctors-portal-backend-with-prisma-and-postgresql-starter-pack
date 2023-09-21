import { NextFunction, Request, Response } from "express";
import { specializationServices } from "./specializations.services";


const createSpecialization = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { ...specializationData } = req.body;
        const specialization = await specializationServices.createSpecialization(specializationData);
        res.status(200).json({
            status: 'success',
            message: 'Specialization created successfully',
            data: specialization
        });
    } catch (error) {
        next(error)
    }
};
const getAllSpecializations = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const specializations = await specializationServices.getAllSpecializations();
        res.status(200).json({
            status: 'success',
            message: 'Specializations fetched successfully',
            data: specializations.data,
        });
    } catch (error) {
        next(error)
    }
};
const getSingleSpecialization = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { id } = req.params;
        const specialization = await specializationServices.getSingleSpecialization(id);
        res.status(200).json({
            status: 'success',
            message: 'Specialization fetched successfully',
            data: specialization
        });
    } catch (error) {
        next(error)
    }
};
const updateSpecialization = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { id } = req.params;
        const { ...specializationData } = req.body;
        const specialization = await specializationServices.updateSpecialization(id, specializationData);
        res.status(200).json({
            status: 'success',
            message: 'Specialization updated successfully',
            data: specialization
        });
    } catch (error) {
        next(error)
    }
};
const deleteSpecialization = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { id } = req.params;
        const specialization = await specializationServices.deleteSpecialization(id);
        res.status(200).json({
            status: 'success',
            message: 'Specialization deleted successfully',
            data: specialization
        });
    } catch (error) {
        next(error)
    }
};


export const specializationController = {
    createSpecialization,
    getAllSpecializations,
    getSingleSpecialization,
    updateSpecialization,
    deleteSpecialization
}