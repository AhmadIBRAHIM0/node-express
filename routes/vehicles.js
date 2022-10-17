import express from "express";
import {
    getVehicles, getVehicle, createVehicle
} from '../controllers/vehicles.js'

const vehiclesRouter = express.Router()

vehiclesRouter.get("/", getVehicles)
vehiclesRouter.get("/:id", getVehicle)
vehiclesRouter.post("/create", createVehicle)

export {vehiclesRouter}