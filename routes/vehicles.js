import express from "express";
import {
    getVehicles,
    getVehicle
} from '../controllers/vehicles.js'

const vehiclesRouter = express.Router()

vehiclesRouter.get("/", getVehicles)
vehiclesRouter.get("/:id", getVehicle)

export {vehiclesRouter}