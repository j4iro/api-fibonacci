import express from 'express'
import v1Routes from './v1/'

const app = express()

app.use('/v1', v1Routes)

// Main route
app.get('/', (req, res) => {
  res.send("Welcome to Fibonacci's Api by Jairo Lachira")
})

export default app
