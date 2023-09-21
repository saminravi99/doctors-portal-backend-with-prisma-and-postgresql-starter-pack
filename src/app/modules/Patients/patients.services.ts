import { MedicalProfile } from '@prisma/client'
import { Patient } from '@prisma/client'
import prisma from '../../shared/prisma'

const createPatient = async (
  patient: Patient,
  medicalProfile: MedicalProfile,
): Promise<any> => {
  const result = await prisma.$transaction(async transactionCLient => {
    const createPatient = await transactionCLient.patient.create({
      data: patient,
    })
    const createMedicalProfile = await transactionCLient.medicalProfile.create({
      data: {
        ...medicalProfile,
        patientId: createPatient.id,

        profileStatus: 'active',
      },
    })
    return {
      patient: createPatient,
      medicalProfile: createMedicalProfile,
    }
  })
  return result
}

const getAllPatients = async (): Promise<Patient[] | any> => {
  const result = await prisma.patient.findMany()
  const total = await prisma.patient.count()
  return {
    meta: {
      total,
    },
    data: result,
  }
}

const getSinglePatient = async (id: string): Promise<Patient | null> => {
  const result = await prisma.patient.findUnique({
    where: {
      id: id,
    },
  })
  return result
}

const updatePatient = async (
  id: string,
  patient: Patient,
): Promise<Patient> => {
  const result = await prisma.patient.update({
    where: {
      id: id,
    },
    data: patient,
  })
  return result
}

const deletePatient = async (id: string): Promise<Patient> => {
  const result = await prisma.patient.delete({
    where: {
      id: id,
    },
  })
  return result
}

export const patientServices = {
  createPatient,
  getAllPatients,
  getSinglePatient,
  updatePatient,
  deletePatient,
}
