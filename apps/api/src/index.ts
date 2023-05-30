import { createServer } from './server'

const port = 3001
const app = createServer()

app.listen(port, () => console.log(`Listening on http://localhost:${port}`))
