import { Admin } from "@prisma/client";
import prisma from "../../shared/prisma";

const createAdmin = async (admin: Admin): Promise<Admin> => {
    const result = await prisma.admin.create({
        data: admin
    });
    return result;
};

const getAllAdmins = async (): Promise<Admin[] | any> => {
    const result = await prisma.admin.findMany();
    const total = await prisma.admin.count();
    return {
        meta: {
            total
        },
        data: result
    };
};

const getSingleAdmin = async (id: string): Promise<Admin | null> => {
    const result = await prisma.admin.findUnique({
        where: {
            id: id
        }
    });
    return result;
};

const updateAdmin = async (id: string, admin: Admin): Promise<Admin> => {
    const result = await prisma.admin.update({
        where: {
            id: id
        },
        data: admin
    });
    return result;
};

const deleteAdmin = async (id: string): Promise<Admin> => {
    const result = await prisma.admin.delete({
        where: {
            id: id
        }
    });
    return result;
};

export const adminServices = {
    createAdmin,
    getAllAdmins,
    getSingleAdmin,
    updateAdmin,
    deleteAdmin
}
