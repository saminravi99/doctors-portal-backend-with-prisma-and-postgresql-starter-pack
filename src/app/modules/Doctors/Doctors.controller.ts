/* eslint-disable @typescript-eslint/no-explicit-any */
import { NextFunction, Request, Response } from 'express'
import { doctorServices } from './Doctors.services'

const createDoctor = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const { ...doctorData } = req.body
    const doctor = await doctorServices.createDoctor(doctorData)
    res.status(200).json({
      status: 'success',
      message: 'Doctor created successfully',
      data: doctor,
    })
  } catch (error) {
    next(error)
  }
}
const getAllDoctors = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const {
    page = 1,
    limit = 10,
    sortBy = 'createdAt',
    sortOrder = 'asc',
    searchTerm = '',
    ...filtersData
  } = req.query

  try {
    const doctors = await doctorServices.getAllDoctors(
      Number(page),
      Number(limit),
      sortBy as string,
      sortOrder as 'asc' | 'desc',
      searchTerm as string,
      filtersData as Record<string, unknown>,
    )
    res.status(200).json({
      status: 'success',
      message: 'Doctors fetched successfully',
      meta: doctors.meta,
      data: doctors.data,
    })
  } catch (error) {
    next(error)
  }
}
const getSingleDoctor = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const { id } = req.params
    const doctor = await doctorServices.getSingleDoctor(id)
    res.status(200).json({
      status: 'success',
      message: 'Doctor fetched successfully',
      data: doctor,
    })
  } catch (error) {
    next(error)
  }
}
const updateDoctor = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const { id } = req.params
    const { ...doctorData } = req.body
    const doctor = await doctorServices.updateDoctor(id, doctorData)
    res.status(200).json({
      status: 'success',
      message: 'Doctor updated successfully',
      data: doctor,
    })
  } catch (error) {
    next(error)
  }
}
const deleteDoctor = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const { id } = req.params
    const doctor = await doctorServices.deleteDoctor(id)
    res.status(200).json({
      status: 'success',
      message: 'Doctor deleted successfully',
      data: doctor,
    })
  } catch (error) {
    next(error)
  }
}

export const doctorController = {
  createDoctor,
  getAllDoctors,
  getSingleDoctor,
  updateDoctor,
  deleteDoctor,
}
