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
 * Get vehicles by type
 *
 * @type {(function(*, *): (*|undefined))|*}
 */
const getVehicleType = ((req, res) => {

    //get the id of the vehicle that we want to find
    const type = String(req.params.type)
    //search for the vehicle
    const newVehicles = vehicles.filter(vehicle => vehicle.type === type)

    //check if the vehicle found or nah
    if (newVehicles.length === 0) {
        return res.status(404).send('No vehicle of type ' + req.params.type + ' found !')
    }
    res.json(newVehicles)
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

/**
 * Update specific vehicle
 *
 * @type {(function(*, *): (*|undefined))|*}
 */
const updateVehicle = ((req, res) => {

    //get the id of the vehicle that we want to edit
    const id = Number(req.params.id)
    //Get the index of the vehicle in the array
    const index = vehicles.findIndex(vehicle => vehicle.id === id)

    //check if the vehicle found or nah
    if (!vehicles[index]) {
        return res.status(404).send('The vehicle that u want to edit not found')
    }

    vehicles[index] = {
        id: vehicles[index].id,
        type: req.body.type,
        brand: req.body.brand,
        model: req.body.model,
        color: req.body.color,
        year: req.body.year
    }
    res.status(200).json('Vehicle updated')
})

/**
 * Delete specific vehicle
 *
 * @type {(function(*, *): (*|undefined))|*}
 */
const deleteVehicle = ((req, res) => {

    const id = Number(req.params.id)
    const index = vehicles.findIndex(vehicle => vehicle.id === id)
    if (!vehicles[index]) {
        return res.status(404).send('The vehicle that u want to delete not found')
    }
    vehicles.splice(index,1)
    res.status(200).json('Vehicle deleted')
})

export {
    getVehicles,
    getVehicle,
    getVehicleType,
    createVehicle,
    updateVehicle,
    deleteVehicle,
}