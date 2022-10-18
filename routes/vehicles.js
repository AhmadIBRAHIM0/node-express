import express from "express";
import {
    getVehicles, getVehicle, createVehicle, updateVehicle
} from '../controllers/vehicles.js'

const vehiclesRouter = express.Router()

vehiclesRouter.get("/", getVehicles)
vehiclesRouter.get("/:id", getVehicle)
vehiclesRouter.post("/create", createVehicle)
vehiclesRouter.put("/:id/edit", updateVehicle)

export {vehiclesRouter}