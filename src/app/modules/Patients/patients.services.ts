import { Patient } from "@prisma/client";
import prisma from "../../shared/prisma";

const createPatient = async (patient: Patient): Promise<Patient> => {
    const result = await prisma.patient.create({
        data: patient
    });
    return result;
};

const getAllPatients = async (): Promise<Patient[] | any> => {
    const result = await prisma.patient.findMany();
    const total = await prisma.patient.count();
    return {
        meta: {
            total
        },
        data: result
    };
};

const getSinglePatient = async (id: string): Promise<Patient | null> => {
    const result = await prisma.patient.findUnique({
        where: {
            id: id
        }
    });
    return result;
};

const updatePatient = async (id: string, patient: Patient): Promise<Patient> => {
    const result = await prisma.patient.update({
        where: {
            id: id
        },
        data: patient
    });
    return result;
};

const deletePatient = async (id: string): Promise<Patient> => {
    const result = await prisma.patient.delete({
        where: {
            id: id
        }
    });
    return result;
};

export const patientServices = {
    createPatient,
    getAllPatients,
    getSinglePatient,
    updatePatient,
    deletePatient
}
