const express = require('express');
const router = express.Router(); 
const User = require('../models/User');
const { body, validationResult } = require('express-validator');
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const jwtSecret = "qwertyuiopasdfghjklzxcvbnm"; // Store in .env file

router.post("/createuser",
    body('email').isEmail(),
    body('name').isLength({ min: 5 }),
    body('password').isLength({ min: 5 }),
    async (req, res) => {
        try {
            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                return res.status(400).json({ errors: errors.array() });
            }

            const salt = await bcrypt.genSalt(10);
            const hashedPassword = await bcrypt.hash(req.body.password, salt);

            await User.create({
                name: req.body.name,
                password: hashedPassword,
                email: req.body.email,
                location: req.body.location,
            });

            res.json({ success: true });
        } catch (error) {
            console.error(error);
            res.status(500).json({ success: false, error: "Internal Server Error" });
        }
    }
);

router.post("/loginuser", [
    body('email').isEmail(),
    body('password').isLength({ min: 5 })
], async (req, res) => {
    try {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        const { email, password } = req.body;
        const user = await User.findOne({ email });

        if (!user) {
            return res.status(400).json({ errors: "Try logging in with correct credentials" });
        }

        const isPasswordMatch = await bcrypt.compare(password, user.password);
        if (!isPasswordMatch) {
            return res.status(400).json({ errors: "Try logging in with correct credentials" });
        }

        const payload = { user: { id: user.id } };
        const authToken = jwt.sign(payload, jwtSecret);

        return res.json({ success: true, authToken });
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, error: "Internal Server Error" });
    }
});

module.exports = router;
