import { Doctor } from '@prisma/client'
import prisma from '../../shared/prisma'

const createDoctor = async (data: Doctor): Promise<Doctor> => {
  const result = await prisma.doctor.create({ data })
  return result
}

const getDoctors = async (): Promise<Doctor[]> => {
  const reuslt = await prisma.doctor.findMany({
    include: {
      specilization: true,
    },
  })
  return reuslt
}

const getDoctor = async (id: string): Promise<Doctor | null> => {
  const result = await prisma.doctor.findUnique({
    where: { id },
  })
  return result
}
export const doctorService = { createDoctor, getDoctors, getDoctor }
