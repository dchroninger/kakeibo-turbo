import cors from 'cors'
import express from 'express'

import v1Router from './routes/v1'

const app = express()
const port = 3001

// Middleware
app.use(cors({ origin: 'http://localhost:3000' }))
app.use(express.json())

// Routes
app.use('/v1', v1Router)

app.listen(port, () => console.log(`Listening on http://localhost:${port}`))
