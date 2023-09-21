import { Appointment } from "@prisma/client";
import prisma from "../../shared/prisma";

const createAppointment = async (appointment: Appointment): Promise<Appointment> => {
    const result = await prisma.appointment.create({
        data: appointment
    });
    return result;
};

const getAllAppointments = async (): Promise<Appointment[] | any> => {
    const result = await prisma.appointment.findMany();
    const total = await prisma.appointment.count();
    return {
        meta: {
            total
        },
        data: result
    };
};

const getSingleAppointment = async (id: string): Promise<Appointment | null> => {
    const result = await prisma.appointment.findUnique({
        where: {
            id: id
        }
    });
    return result;
};

const updateAppointment = async (id: string, appointment: Appointment): Promise<Appointment> => {
    const result = await prisma.appointment.update({
        where: {
            id: id
        },
        data: appointment
    });
    return result;
};

const deleteAppointment = async (id: string): Promise<Appointment> => {
    const result = await prisma.appointment.delete({
        where: {
            id: id
        }
    });
    return result;
};

export const appointmentServices = {
    createAppointment,
    getAllAppointments,
    getSingleAppointment,
    updateAppointment,
    deleteAppointment
}
