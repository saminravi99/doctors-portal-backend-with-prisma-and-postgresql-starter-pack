import { Request, Response } from 'express'
import { doctorService } from './Doctors.services'

const createDoctor = async (req: Request, res: Response) => {
  try {
    const data = req.body
    const result = await doctorService.createDoctor(data)
    res.status(200).json({
      status: 200,
      message: 'doctor created successfully',
      data: result,
    })
  } catch (error) {
    res.status(400).json({
      status: 'error',
      message: 'something went wrong',
      error,
    })
  }
}

const getDoctors = async (req: Request, res: Response) => {
  try {
    console.log(req.query)
    const {
      limit = 10,
      page = 1,
      sortBy = 'createdAt',
      sortOrder = 'asc',
      searchTerm = '',
      ...filterData
    } = req.query

    // console.log(filterData)
    const result = await doctorService.getDoctors(
      searchTerm as string,
      String(sortBy),
      sortOrder as 'asc' | 'desc',
      Number(limit),
      Number(page),
      filterData,
    )
    res.status(200).json({
      status: 200,
      message: 'doctors fetched successfully',
      meta: result.meta,
      data: result.data,
    })
  } catch (error) {
    res.status(400).json({
      status: 'error',
      message: 'something went wrong',
      error,
    })
  }
}

const getDoctor = async (req: Request, res: Response) => {
  try {
    const { id } = req.params
    const result = await doctorService.getDoctor(id)
    res.status(200).json({
      status: 200,
      message: 'doctor fetched successfully',
      data: result,
    })
  } catch (error) {
    res.status(400).json({
      status: 'error',
      message: 'something went wrong',
      error,
    })
  }
}
export const doctorController = { createDoctor, getDoctors, getDoctor }
