import express from "express";
import {
    getVehicles, getVehicle, createVehicle, updateVehicle, deleteVehicle, getVehicleType
} from '../controllers/vehicles.js'

const vehiclesRouter = express.Router()

vehiclesRouter.get("/", getVehicles)
vehiclesRouter.get("/:type", getVehicleType)
vehiclesRouter.get("/:id", getVehicle)
vehiclesRouter.post("/create", createVehicle)
vehiclesRouter.put("/:id", updateVehicle)
vehiclesRouter.delete("/:id", deleteVehicle)

export {vehiclesRouter}