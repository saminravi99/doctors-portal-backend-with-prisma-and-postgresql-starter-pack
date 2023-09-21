import { NextFunction, Request, Response } from "express";
import { availableServiceServices } from "./availableServices.services";

const createAvailableService = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { ...availableServiceData } = req.body;
        const availableService = await availableServiceServices.createAvailableService(availableServiceData);
        res.status(200).json({
            status: 'success',
            message: 'Available Service created successfully',
            data: availableService
        });
    } catch (error) {
        next(error)
    }
};

const getAllAvailableServices = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const availableServices = await availableServiceServices.getAllAvailableServices();
        res.status(200).json({
            status: 'success',
            message: 'Available Services fetched successfully',
            data: availableServices.data,
        });
    } catch (error) {
        next(error)
    }
};

const getSingleAvailableService = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { id } = req.params;
        const availableService = await availableServiceServices.getSingleAvailableService(id);
        res.status(200).json({
            status: 'success',
            message: 'Available Service fetched successfully',
            data: availableService
        });
    } catch (error) {
        next(error)
    }
};

const updateAvailableService = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { id } = req.params;
        const { ...availableServiceData } = req.body;
        const availableService = await availableServiceServices.updateAvailableService(id, availableServiceData);
        res.status(200).json({
            status: 'success',
            message: 'Available Service updated successfully',
            data: availableService
        });
    } catch (error) {
        next(error)
    }
};

const deleteAvailableService = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { id } = req.params;
        const availableService = await availableServiceServices.deleteAvailableService(id);
        res.status(200).json({
            status: 'success',
            message: 'Available Service deleted successfully',
            data: availableService
        });
    } catch (error) {
        next(error)
    }
};

export const availableServiceController = {
    createAvailableService,
    getAllAvailableServices,
    getSingleAvailableService,
    updateAvailableService,
    deleteAvailableService
}
