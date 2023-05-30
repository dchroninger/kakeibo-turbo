import cors from 'cors'
import express from 'express'
import v1Router from './routes/v1'

export const createServer = () => {
  const app = express()

  // Middleware
  app.use(cors({ origin: 'http://localhost:3000' }))
  app.use(express.json())

  // Routes
  app.use('/v1', v1Router)

  return app;
}

