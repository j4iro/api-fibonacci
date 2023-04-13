import express from 'express'
import FibonacciController from '../../controllers/fibonacci.controller'
import validationHandler from '../../middlewares/validationHandler'
import joi from 'joi'

const router = express.Router()

// simple schema validator for index param
const schemaGetFibonacci: joi.PartialSchemaMap = {
  index: joi.number().min(0).required(),
}

router
  .route('/')
  .get(
    validationHandler(schemaGetFibonacci, 'query'),
    FibonacciController.getFibonacciByIndex
  )

export default router
