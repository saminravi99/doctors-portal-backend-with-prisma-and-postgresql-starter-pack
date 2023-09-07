/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { NextFunction, Request, Response } from 'express'
import httpStatus from 'http-status'

import { Prisma } from '@prisma/client'
import config from '../../config'
import { configDotenv } from 'dotenv'

export const globalErrorHandler = (
  err: any,
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  let statusCode = httpStatus.BAD_REQUEST
  let message =
    config.env === 'development' ? err.message : 'something went wrong'

  if (config.env === 'development') {
    if (err instanceof Prisma.PrismaClientKnownRequestError) {
      statusCode = 400
      const lines = err.message.trim().split('\n')
      // console.log(lines[lines.length - 1])
      message = lines[lines.length - 1]
      // console.log(message)
    } else if (err instanceof Prisma.PrismaClientValidationError) {
      statusCode = 400
      // message = err.message
      const lines = err.message.trim().split('\n')
      // console.log(lines[lines.length - 1])
      message = lines[lines.length - 1]
    } else if (err instanceof Error) {
      statusCode = httpStatus.BAD_REQUEST
      message = err.message
    }
  }

  res.status(statusCode).json({
    errorName: err.name,
    success: false,
    message: message,
    // errorStack: err.stack,
  })
}
