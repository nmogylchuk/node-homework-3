const express = require('express');
const Load = require('../models/Load');
const router = express.Router();
const { check, validationResult } = require('express-validator');

router.get('/', async (req, res) => {

    console.log('loadId: ' + req.query.id);
    try {
        if (typeof req.query.id === "undefined") {
            const loads = await Load.find({ user: req.user.userId });

            let loadsRes = loads.map(function (load) {
                return {
                    id: load.id,
                    loadName: load.loadName,
                    volume: load.volume,
                    truckType: load.truckType,
                    weight: load.weight
                };
            });

            res.json(loadsRes);
        } else {
            const load = await Load.findOne({ user: req.user.userId, _id: req.query.id });
            res.json(load);
        } 
    } catch (error) {
        res.status(500).json({ message: "Something went wrong" });
    }
});

router.post('/', [
    check('loadName', 'Load Name from must contain more than 3 symbols').isLength({ min: 3 }),
    check('countryFrom', 'Country from must contain more than 3 symbols').isLength({ min: 3 }),
    check('countryTo', 'Country to must contain more than 3 symbols').isLength({ min: 3 }),
    check('cityFrom', 'City From must contain more than 3 symbols').isLength({ min: 3 }),
    check('cityTo', 'City To must contain more than 3 symbols').isLength({ min: 3 }),
    check('dateFrom', 'Date From must contain more than 3 symbols').isLength({ min: 3 }),
    check('dateTo', 'Date To must contain more than 3 symbols').isLength({ min: 3 }),
    check('weight', 'Weight must contain more than 3 symbols').isLength({ min: 3 }),
    check('volume', 'Volume must contain more than 3 symbols').isLength({ min: 3 }),
    check('truckType', 'Truck Type must contain more than 3 symbols').isLength({ min: 3 })
], async (req, res) => {
    try {
        const errors = validationResult(req);

        if (!errors.isEmpty()) {
            return res.status(400).json({
                errors: errors.array(),
                message: 'Wrong data in load fields'
            })
        }

        let { loadName, countryFrom, countryTo, cityFrom, cityTo, dateFrom, dateTo, weight, volume, truckType } = req.body;
        console.log("contryFrom: " + countryFrom);

        const load = new Load({ loadName, countryFrom, countryTo, cityFrom, cityTo, dateFrom, dateTo, weight, volume, truckType, user: req.user.userId });
        await load.save();
        res.status(201).json({ message: "The load has been created" });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Something went wrong" });
    }
})

module.exports = router;