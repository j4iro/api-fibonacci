import express from 'express'
import FibonacciRoutes from './fibonacci'

const app = express()

app.use('/fibonacci', FibonacciRoutes)

export default app
