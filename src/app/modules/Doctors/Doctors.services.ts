/* eslint-disable @typescript-eslint/no-explicit-any */
import { Doctor } from '@prisma/client'
import prisma from '../../shared/prisma'

const createDoctor = async (data: Doctor): Promise<Doctor> => {
  const result = await prisma.doctor.create({ data })
  return result
}

const getDoctors = async (
  searchTerm : string,
  sortBy: string,
  sortOrder: "asc" | "desc",
  limit: number,
  page: number
): Promise<Doctor[] | any> => {
  const result = await prisma.doctor.findMany({
    include: {
      specilization: true,
    },
    where: {
      
    },
    take: limit,
    skip: (page - 1) * limit,
    orderBy: {
      [sortBy]: sortOrder
    }
  })
  const total = await prisma.doctor.count()
  return {
    meta: {
      page,
      limit,
      total
    },
    data: result
  }
}

const getDoctor = async (id: string): Promise<Doctor | null> => {
  const result = await prisma.doctor.findUnique({
    where: { id },
  })
  return result
}
export const doctorService = { createDoctor, getDoctors, getDoctor }
