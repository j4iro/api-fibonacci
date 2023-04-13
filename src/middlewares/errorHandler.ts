import config from '../config/config'
import logger from '../config/logger'
import boom from '@hapi/boom'
import { Request, Response, NextFunction } from 'express'

// funcion for add stack error in development
const withErrorStack = (error: any, stack: any) => {
  if (config.nodeEnv === 'development') {
    return { success: false, ...error, stack }
  }
  return { success: false, ...error }
}

// function for print error with logger
const logError = (
  error: Error,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  logger.error('%o', error)
  next(error)
}

// function for catch  boom error
const wrapErrors = (
  error: Error | any,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (!error.isBoom) {
    next(boom.badImplementation(error))
  }

  next(error)
}

// function for error handler
const errorHandler = (
  error: Error | any,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const {
    output: { statusCode, payload },
  } = error

  res.status(statusCode)
  res.json(withErrorStack(payload, error.stack))
}

export { logError, wrapErrors, errorHandler }
