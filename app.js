import express from 'express'
import {vehiclesRouter} from "./routes/vehicles.js";

const app = express()

app.listen(5000, () => {
    console.log('server is listening on port 5000')
})

app.use(express.json())
app.use('/api/vehicles', vehiclesRouter)