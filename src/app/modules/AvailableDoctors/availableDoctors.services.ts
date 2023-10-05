import { AvailableDoctor } from "@prisma/client";
import prisma from "../../shared/prisma";

const createAvailableDoctor = async (availableDoctor: AvailableDoctor): Promise<AvailableDoctor> => {
    const result = await prisma.availableDoctor.create({
        data: availableDoctor
    });
    return result;
};

const getAllAvailableDoctors = async (): Promise<AvailableDoctor[] | any> => {
    const result = await prisma.availableDoctor.findMany({
        include: {
            doctor: {
                include: {
                    availability: {
                        include: {
                            slot: true
                        }
                    },
                    specialization: {
                        include: {
                            services: true
                        }
                    },
                }
            },
            availableServices: {
                include: {
                    service: true,
                    slot: true

                }
            },
            slot: true
        }
    });
    const total = await prisma.availableDoctor.count();
    return {
        meta: {
            total
        },
        data: result
    };
};

const getSingleAvailableDoctor = async (id: string): Promise<AvailableDoctor | null> => {
    const result = await prisma.availableDoctor.findUnique({
        where: {
            id: id
        },
        include: {
            doctor: {
                include: {
                    availability: {
                        include: {
                            slot: true
                        }
                    },
                    specialization: {
                        include: {
                            services: true
                        }
                    },
                }
            },
            availableServices: {
                include: {
                    service: true,
                    slot: true

                }
            },
            slot: true
        }
    });
    return result;
};

const updateAvailableDoctor = async (id: string, availableDoctor: AvailableDoctor): Promise<AvailableDoctor> => {
    const result = await prisma.availableDoctor.update({
        where: {
            id: id
        },
        data: availableDoctor
    });
    return result;
};

const deleteAvailableDoctor = async (id: string): Promise<AvailableDoctor> => {
    const result = await prisma.availableDoctor.delete({
        where: {
            id: id
        }
    });
    return result;
};

export const availableDoctorServices = {
    createAvailableDoctor,
    getAllAvailableDoctors,
    getSingleAvailableDoctor,
    updateAvailableDoctor,
    deleteAvailableDoctor
}
