import { NextFunction, Request, Response } from 'express'
import { patientServices } from './patients.services'

const createPatient = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const { medicalProfile, ...patientData } = req.body
    const patient = await patientServices.createPatient(
      patientData,
      medicalProfile,
    )
    res.status(200).json({
      status: 'success',
      message: 'Patient created successfully',
      data: patient,
    })
  } catch (error) {
    next(error)
  }
}

const getAllPatients = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const patients = await patientServices.getAllPatients()
    res.status(200).json({
      status: 'success',
      message: 'Patients fetched successfully',
      data: patients.data,
    })
  } catch (error) {
    next(error)
  }
}

const getSinglePatient = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const { id } = req.params
    const patient = await patientServices.getSinglePatient(id)
    res.status(200).json({
      status: 'success',
      message: 'Patient fetched successfully',
      data: patient,
    })
  } catch (error) {
    next(error)
  }
}

const updatePatient = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const { id } = req.params
    const { ...patientData } = req.body
    const patient = await patientServices.updatePatient(id, patientData)
    res.status(200).json({
      status: 'success',
      message: 'Patient updated successfully',
      data: patient,
    })
  } catch (error) {
    next(error)
  }
}

const deletePatient = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const { id } = req.params
    const patient = await patientServices.deletePatient(id)
    res.status(200).json({
      status: 'success',
      message: 'Patient deleted successfully',
      data: patient,
    })
  } catch (error) {
    next(error)
  }
}

export const patientController = {
  createPatient,
  getAllPatients,
  getSinglePatient,
  updatePatient,
  deletePatient,
}
