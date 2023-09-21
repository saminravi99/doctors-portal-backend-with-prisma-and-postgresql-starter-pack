/* eslint-disable @typescript-eslint/no-explicit-any */
import { Specialization } from "@prisma/client";
import prisma from "../../shared/prisma";




const createSpecialization = async (specialization: Specialization): Promise<Specialization> => {
    const result = await prisma.specialization.create({
        data: specialization
    });
    return result;
};

const getAllSpecializations = async (): Promise<Specialization[] | any> => {
    const result = await prisma.specialization.findMany();
    const total = await prisma.specialization.count();
    return {
        meta: {
            total
        },
        data: result
    };
};

const getSingleSpecialization = async (id: string): Promise<Specialization | null> => {
    const result = await prisma.specialization.findUnique({
        where: {
            id: id
        }
    });
    return result;
};

const updateSpecialization = async (id: string, specialization: Specialization): Promise<Specialization> => {
    const result = await prisma.specialization.update({
        where: {
            id: id
        },
        data: specialization
    });
    return result;
};

const deleteSpecialization = async (id: string): Promise<Specialization> => {
    const result = await prisma.specialization.delete({
        where: {
            id: id
        }
    });
    return result;
};

export const specializationServices = {
    createSpecialization,
    getAllSpecializations,
    getSingleSpecialization,
    updateSpecialization,
    deleteSpecialization
}