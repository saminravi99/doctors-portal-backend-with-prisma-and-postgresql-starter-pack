import { AvailableService } from '@prisma/client'
import prisma from '../../shared/prisma'

const createAvailableService = async (
    availableService: AvailableService,
): Promise<AvailableService> => {
    const result = await prisma.availableService.create({
        data: availableService,
    })
    return result
}

const getAllAvailableServices = async (): Promise<AvailableService[] | any> => {
    const result = await prisma.availableService.findMany({
        include: {

            service: {
                include: {
                    specialization: {
                        include: {
                            doctors: {
                                include: {
                                    availability: true
                                }
                            }
                        }
                    }
                }
            },
            appointments: {
                include: {
                    patient: true,
                    payment: true
                }
            },
            availableDoctor: {
                include: {
                    doctor: {
                        include: {
                            specialization: true
                        }
                    },
                    availableServices: true
                }
            },

            slot: true,

        },
    })
    const total = await prisma.availableService.count()
    return {
        meta: {
            total,
        },
        data: result,
    }
}

const getSingleAvailableService = async (
    id: string,
): Promise<AvailableService | null> => {
    const result = await prisma.availableService.findUnique({
        where: {
            id: id,
        },
        include: {
            service: {
                include: {
                    specialization: {
                        include: {
                            doctors: {
                                include: {
                                    availability: true
                                }
                            }
                        }
                    }
                }
            },
            appointments: {
                include: {
                    patient: true,
                    payment: true
                }
            },
            availableDoctor: true,
            slot: true,

        },
    })
    return result
}

const updateAvailableService = async (
    id: string,
    availableService: AvailableService,
): Promise<AvailableService> => {
    const result = await prisma.availableService.update({
        where: {
            id: id,
        },
        data: availableService,
    })
    return result
}

const deleteAvailableService = async (
    id: string,
): Promise<AvailableService> => {
    const result = await prisma.availableService.delete({
        where: {
            id: id,
        },
    })
    return result
}

export const availableServiceServices = {
    createAvailableService,
    getAllAvailableServices,
    getSingleAvailableService,
    updateAvailableService,
    deleteAvailableService,
}
