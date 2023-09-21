import { Payment } from "@prisma/client";
import prisma from "../../shared/prisma";

const createPayment = async (payment: Payment): Promise<Payment> => {
    const result = await prisma.payment.create({
        data: payment
    });
    return result;
};

const getAllPayments = async (): Promise<Payment[] | any> => {
    const result = await prisma.payment.findMany();
    const total = await prisma.payment.count();
    return {
        meta: {
            total
        },
        data: result
    };
};

const getSinglePayment = async (id: string): Promise<Payment | null> => {
    const result = await prisma.payment.findUnique({
        where: {
            id: id
        }
    });
    return result;
};

const updatePayment = async (id: string, payment: Payment): Promise<Payment> => {
    const result = await prisma.payment.update({
        where: {
            id: id
        },
        data: payment
    });
    return result;
};

const deletePayment = async (id: string): Promise<Payment> => {
    const result = await prisma.payment.delete({
        where: {
            id: id
        }
    });
    return result;
};

export const paymentServices = {
    createPayment,
    getAllPayments,
    getSinglePayment,
    updatePayment,
    deletePayment
}
