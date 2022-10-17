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

    //get the id of the vehicle that we want to find
    const id = Number(req.params.id)
    //search for the vehicle
    const vehicle = vehicles.find(vehicle => vehicle.id === id)

    //check if the vehicle found or nah
    if (!vehicle) {
        return res.status(404).send('Vehicle not found')
    }
    res.json(vehicle)
})

/**
 * Create a new object of vehicle
 *
 * @type {createVehicle}
 */
const createVehicle = ((req, res) => {

    //create the vehicle array from the data sent from user
    const newVehicle = {
        id: vehicles.length + 1,
        type: req.body.type,
        brand: req.body.brand,
        model: req.body.model,
        color: req.body.color,
        year: req.body.year
    }

    //put the array created above in the array vehicles that contains all vehicles
    vehicles.push(newVehicle);

    res.status(201).json(newVehicle);
})

export {
    getVehicles,
    getVehicle,
    createVehicle,
}