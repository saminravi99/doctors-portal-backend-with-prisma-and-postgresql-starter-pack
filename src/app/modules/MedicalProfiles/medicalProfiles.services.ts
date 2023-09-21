import { MedicalProfile } from '@prisma/client'
import prisma from '../../shared/prisma'

// const createMedicalProfile = async (
//   medicalProfile: MedicalProfile,
// ): Promise<MedicalProfile> => {
//   const result = await prisma.medicalProfile.create({
//     data: medicalProfile,
//   })
//   return result
// }

const getAllMedicalProfiles = async (): Promise<MedicalProfile[] | any> => {
  const result = await prisma.medicalProfile.findMany()
  const total = await prisma.medicalProfile.count()
  return {
    meta: {
      total,
    },
    data: result,
  }
}

const getSingleMedicalProfile = async (
  id: string,
): Promise<MedicalProfile | null> => {
  const result = await prisma.medicalProfile.findUnique({
    where: {
      id: id,
    },
  })
  return result
}

const updateMedicalProfile = async (
  id: string,
  medicalProfile: MedicalProfile,
): Promise<MedicalProfile> => {
  const result = await prisma.medicalProfile.update({
    where: {
      id: id,
    },
    data: medicalProfile,
  })
  return result
}

const deleteMedicalProfile = async (id: string): Promise<MedicalProfile> => {
  const result = await prisma.medicalProfile.delete({
    where: {
      id: id,
    },
  })
  return result
}

export const medicalProfileServices = {
  getAllMedicalProfiles,
  getSingleMedicalProfile,
  updateMedicalProfile,
  deleteMedicalProfile,
}
