/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-prototype-builtins */
import { Doctor } from "@prisma/client";
import prisma from "../../shared/prisma";


const createDoctor = async (doctor: Doctor): Promise<Doctor> => {
    const result = await prisma.doctor.create({
        data: doctor
    });
    return result;
};

const getAllDoctors = async (
    page: number,
    limit: number,
    sortBy: string,
    sortOrder: "asc" | "desc",
    searchTerm: string,
    filtersData: Record<string, unknown>,
): Promise<Doctor[] | any> => {
    // const filterConditions: Prisma.DoctorWhereInput[] = [];

    // if (filtersData.specialization) {
    //     filterConditions.push({
    //         specialization: {
    //             name: {
    //                 equals: filtersData.specialization as string
    //             }
    //         }
    //     });
    // }

    const result = await prisma.doctor.findMany({
        where: {
            AND: [
                {
                    OR: [
                        {
                            fullName: {
                                contains: searchTerm,
                                mode: 'insensitive'
                            }
                        },
                        {
                            specialization: {
                                name: {
                                    contains: searchTerm,
                                    mode: 'insensitive'
                                }
                            }
                        },
                        {
                            qualification: {
                                contains: searchTerm,
                                mode: 'insensitive'
                            }
                        }
                    ]
                }
                ,
                {
                    specialization: {
                        name: {
                            equals: filtersData.specialization as string,
                            mode: 'insensitive'
                        }
                    }
                },
                {
                    qualification: {
                        equals: filtersData.qualification as string,
                        mode: 'insensitive'
                    }
                }
            ]
        },
        include: {
            specialization: true,
            availability: {
                include: {
                    availableServices: {
                        include: {
                            service: true,
                            slot: true
                        }
                    },
                    slot: true
                }
            }
        },
        take: 100,
        skip: (page - 1) * limit,
        orderBy: {
            [sortBy]: sortOrder
        }

    });
    const total = await prisma.doctor.count();
    return {
        meta: {
            page,
            limit,
            total
        },
        data: result,
    };
};

const getSingleDoctor = async (id: string): Promise<Doctor | null> => {
    const result = await prisma.doctor.findUnique({
        where: {
            id: id
        },
        include: {
            specialization: true,
            availability: {
                include: {
                    availableServices: {
                        include: {
                            service: true,
                            slot: true
                        }
                    },
                    slot: true
                }
            }
        }
    });
    return result;
};

const updateDoctor = async (id: string, doctor: Doctor): Promise<Doctor> => {
    const result = await prisma.doctor.update({
        where: {
            id: id
        },
        data: doctor
    });
    return result;
};

const deleteDoctor = async (id: string): Promise<Doctor> => {
    const result = await prisma.doctor.delete({
        where: {
            id: id
        }
    });
    return result;
};



export const doctorServices = {
    createDoctor,
    getAllDoctors,
    getSingleDoctor,
    updateDoctor,
    deleteDoctor
}