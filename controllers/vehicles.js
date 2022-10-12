import {vehicles} from '../data/vehicles.js'

/**
 * Get all vehicles
 *
 * @type {getVehicles}
 */
const getVehicles = ((req, res) => {
    res.json(vehicles)
})

/**
 * Get vehicle by id
 *
 * @type {(function(*, *): (*|undefined))|*}
 */
const getVehicle = ((req, res) => {
    const id = Number(req.params.id)
    const vehicle = vehicles.find(vehicle => vehicle.id === id)

    if (!vehicle) {
        return res.status(404).send('Vehicle not found')
    }
    res.json(vehicle)
})

export {
    getVehicles,
    getVehicle
}