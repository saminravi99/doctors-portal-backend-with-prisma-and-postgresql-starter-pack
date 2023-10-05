import { TimeSlots } from '@prisma/client'
import prisma from '../../shared/prisma'

const createTimeSlot = async (timeSlot: TimeSlots): Promise<TimeSlots> => {
  const result = await prisma.timeSlots.create({
    data: timeSlot,
  })
  return result
}

const getAllTimeSlots = async (): Promise<TimeSlots[] | any> => {
  const result = await prisma.timeSlots.findMany()
  const total = await prisma.timeSlots.count()
  return {
    meta: {
      total,
    },
    data: result,
  }
}

const getSingleTimeSlot = async (id: string): Promise<TimeSlots | null> => {
  const result = await prisma.timeSlots.findUnique({
    where: {
      id: id,
    },
  })
  return result
}

const updateTimeSlot = async (
  id: string,
  timeSlot: TimeSlots,
): Promise<TimeSlots> => {
  const result = await prisma.timeSlots.update({
    where: {
      id: id,
    },
    data: timeSlot,
  })
  return result
}

const deleteTimeSlot = async (id: string): Promise<TimeSlots> => {
  const result = await prisma.timeSlots.delete({
    where: {
      id: id,
    },
  })
  return result
}

export const timeSlotsServices = {
  createTimeSlot,
  getAllTimeSlots,
  getSingleTimeSlot,
  updateTimeSlot,
  deleteTimeSlot,
}
