/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import cors from 'cors'
import express, { Application, NextFunction, Request, Response } from 'express'
import httpStatus from 'http-status'

import routes from './app/routes'

import cookieParser from 'cookie-parser'
import { globalErrorHandler } from './app/middleware/globalErrorHandler'

const app: Application = express()

const corsOptions = {
  origin: true,
  credentials: true,
}
app.use('*', cors(corsOptions))
app.use(cookieParser())

//parser
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use('/api/v1', routes)

// eslint-disable-next-line no-unused-vars, @typescript-eslint/no-unused-vars
app.get('/', async (req: Request, res: Response, next: NextFunction) => {
  res.status(httpStatus.OK).json({
    success: true,
    message: 'Welcome HTTP SERVER',
  })
})
app.get("/error", (req: Request, res: Response, next: NextFunction) => {
  throw new Error("Demo Error")
})

app.use(globalErrorHandler)

app.use((req: Request, res: Response, next: NextFunction) => {
  res.status(httpStatus.NOT_FOUND).json({
    success: false,
    message: "Not Found",
    errorMessage: {
      path: req.originalUrl,
      message: "Not Found"
    }
  })
})

export default app
