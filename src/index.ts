import express from 'express'
import cors from 'cors'
import routes from './routes'
import config from './config/config'
import logger from './config/logger'

// import error middleware
import { logError, wrapErrors, errorHandler } from './middlewares/errorHandler'

const app = express()

// Middlewares
app.use(express.json())
app.use(cors({ origin: true, credentials: true }))

// Routes
app.use(routes)

// Error Middleware
app.use(logError)
app.use(wrapErrors)
app.use(errorHandler)

// Run app
const port = config.port
app.listen(port, () => {
  logger.info(`Api started at http://localhost:${port}/`)
})
