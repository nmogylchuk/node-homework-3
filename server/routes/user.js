const express = require('express');
const User = require('../models/User');
const router = express.Router();

router.get('/', async (req, res) => {
    try {
        const user = await User.findOne({ _id: req.user.userId });
        let userResponse = {
            email: user.email,
            firstName: user.firstName,
            lastName: user.lastName
        };
        res.json(userResponse);
    } catch (error) {
        res.status(500).json({ message: "Something went wrong" });
    }
});

module.exports = router;