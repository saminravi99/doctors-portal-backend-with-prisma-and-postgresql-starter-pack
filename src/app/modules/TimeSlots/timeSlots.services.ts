import { TimeSlots } from '@prisma/client'
import prisma from '../../shared/prisma'

const createTimeSlot = async (timeSlot: TimeSlots): Promise<TimeSlots> => {
  const result = await prisma.timeSlots.createMany({
    data: [
      {
        startTime: '08:00 AM',
      },
      {
        startTime: '08:30 AM',
      },
      {
        startTime: '09:00 AM',
      },
      {
        startTime: '09:30 AM',
      },
      {
        startTime: '10:00 AM',
      },
      {
        startTime: '10:30 AM',
      },
      {
        startTime: '11:00 AM',
      },
      {
        startTime: '11:30 AM',
      },
      {
        startTime: '12:00 PM',
      },
      {
        startTime: '12:30 PM',
      },
      {
        startTime: '01:00 PM',
      },
      {
        startTime: '01:30 PM',
      },
      {
        startTime: '02:00 PM',
      },
      {
        startTime: '02:30 PM',
      },
      {
        startTime: '03:00 PM',
      },
      {
        startTime: '03:30 PM',
      },
      {
        startTime: '04:00 PM',
      },
      {
        startTime: '04:30 PM',
      },
      {
        startTime: '05:00 PM',
      },
      {
        startTime: '05:30 PM',
      },
    ],
  })
  // return result;
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
