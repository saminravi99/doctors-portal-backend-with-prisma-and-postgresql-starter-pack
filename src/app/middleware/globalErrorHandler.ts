/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { NextFunction, Request, Response } from "express"
import httpStatus from "http-status"

export const globalErrorHandler = (err: any, req: Request, res: Response, next: NextFunction) => {
    let statusCode = httpStatus.BAD_REQUEST
    let message = "Something went wrong"

    if (err instanceof Error) {
        statusCode = httpStatus.BAD_REQUEST
        message = err.message
    }

    res.status(statusCode).json({
        errorName : err.name,
        success: false,
        message: message,
    })
}