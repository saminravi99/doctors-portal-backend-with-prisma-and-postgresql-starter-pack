import { Service } from '@prisma/client'
import prisma from '../../shared/prisma'

const createService = async (service: Service): Promise<Service> => {
    const result = await prisma.service.create({
        data: service,
    })
    return result
}

const getAllServices = async (): Promise<Service[] | any> => {
    const result = await prisma.service.findMany({
        include: {
            availableServices: {
                include: {
                    slot: true
                }
            },
            specialization: {
                include: {
                    doctors: true
                }
            }
        }
    })
    const total = await prisma.service.count()
    return {
        meta: {
            total,
        },
        data: result,
    }
}

const getSingleService = async (id: string): Promise<Service | null> => {
    const result = await prisma.service.findUnique({
        where: {
            id: id,
        },
    })
    return result
}

const updateService = async (
    id: string,
    service: Service,
): Promise<Service> => {
    const result = await prisma.service.update({
        where: {
            id: id,
        },
        data: service,
    })
    return result
}

const deleteService = async (id: string): Promise<Service> => {
    const result = await prisma.service.delete({
        where: {
            id: id,
        },
    })
    return result
}

export const serviceServices = {
    createService,
    getAllServices,
    getSingleService,
    updateService,
    deleteService,
}
