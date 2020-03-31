const { Router } = require('express');
const User = require('../models/User');
const bcrypt = require('bcryptjs');
const router = Router();
const { check, checkSchema, validationResult } = require('express-validator');
const jwt = require('jsonwebtoken');
const config = require('config');

var Schema = {
    "userType": {
      in: 'body',
      matches: {
        options: [/\b(?:driver|shipper)\b/],
        errorMessage: "Invalid user type"
      }
    }
  }

router.post('/signup', [
    check('firstName', 'First name must contain more than 3 symbols').isLength({ min: 3 }),
    check('lastName', 'Last name must contain more than 3 symbols').isLength({ min: 3 }),
    check('email',"Invalid  e-mail").isEmail(),
    checkSchema(Schema),
    check('password', 'Password must contain more than 6 symbols').isLength({ min: 6 })
], async (req, res) => {
    try {
        const errors = validationResult(req);

        if (!errors.isEmpty()) {
            return res.status(400).json({
                errors: errors.array(),
                message: 'Wrong data in registration fields'
            })
        }

        let { firstName, lastName, email, password, userType } = req.body;
        email = email.toLowerCase();

        const user = await User.findOne({ email })
        if (user) {
            return res.status(400).json('User already exists');
        }

        const newUser = new User();
        newUser.email = email;
        newUser.firstName = firstName;
        newUser.lastName = lastName;
        newUser.userType = userType;
        newUser.password = await bcrypt.hash(password, 12);
        console.log(JSON.stringify(newUser));

        await newUser.save();

        res.status(201).json({ message: "User was created"});
    }
    catch (error) {
        console.log(error);
        res.status(500).json({ message: 'User wasn\'t created' });
    }
})

router.post('/signin', [
    check('email', 'Email must contain more than 3 symbols').isLength({ min: 7 }),
    check('password', 'Password must contain more than 6 symbols').isLength({ min: 6 })
], async (req, res) => {
    try {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({
                errors: errors.array(),
                message: 'Wrong data in email fields'
            })
        }

        const { email, password } = req.body;

        const user = await User.findOne({ email });
        if (!user) {
            return res.status(400).json({ message: "This user doesn't exist" });
        }

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({ message: "Wrong password" });
        }

        const token = jwt.sign(
            { userId: user.id },
            config.get('jwtSecret'),
            { expiresIn: '1h' }
        )

        res.status(201).json({ token, userId: user.id, userType: user.userType });
    }
    catch (error) {
        res.status(500).json({ message: 'Something went wrong' });
    }
})

module.exports = router;