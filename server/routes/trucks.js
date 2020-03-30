const express = require('express');
const Truck = require('../models/Truck');
const router = express.Router();
const { check, validationResult } = require('express-validator');

router.get('/', async (req, res) => {
    try {
        const trucks = await Truck.find({ user: req.user.userId });
        res.json(trucks);
    } catch (error) {
        res.status(500).json({ message: "Something went wrong" });
    }
});

router.post('/', [
    check('brand', 'Brand must contain more than 3 symbols').isLength({ min: 3 }),
    check('model', 'Model must contain more than 3 symbols').isLength({ min: 3 }),
    check('year', 'Year must contain 4 symbols').isLength({ min: 4 }),
    check('colour', 'Colour must contain more than 3 symbols').isLength({ min: 3 }),
    check('gearbox', 'Geabox must contain more than 3 symbols').isLength({ min: 3 }),
    check('engine', 'Engine must contain more than 3 symbols').isLength({ min: 3 }),
    check('mileage', 'Mileage must contain more than 3 symbols').isLength({ min: 3 })
], async (req, res) => {
    try {
        const errors = validationResult(req);

        if (!errors.isEmpty()) {
            return res.status(400).json({
                errors: errors.array(),
                message: 'Wrong data in truck fields'
            })
        }

        let { brand, model, year, colour, gearbox, engine, mileage } = req.body;
        
        const truck = new Truck({ brand, model, year, colour, gearbox, engine, mileage, user: req.user.userId });
        await truck.save();
        res.status(201).json({ message: "The truck has been created" });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Something went wrong" });
    }
})

module.exports = router;