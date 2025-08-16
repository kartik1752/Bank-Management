const express = require('express');
const customerModel = require('../models/customer');
const bcrypt = require('bcrypt');
const router = express.Router();

router.post('/create', async (req, res) => {
    const { name, email, password, role, address } = req.body;

    if (!name || !email || !password || !role || !address) {
        return res.status(400).json({ message: "Please complete all the details" });
    }

    if (role === "customer") {
        try {
            const client = await customerModel.findOne({ email });

            if (!client) {
                const hashedPassword = await bcrypt.hash(password, 10);
                const newCustomer = new customerModel({
                    name,
                    email,
                    password: hashedPassword,
                    role,
                    address,
                    balance: 0
                });

                await newCustomer.save();
                return res.status(201).json({ message: "Account created successfully!" });
            }

            return res.status(400).json({ message: "User already exists!" });
        } catch (err) {
            console.error(err);
            return res.status(500).json({ message: "Unexpected error occurred" });
        }
    }
});

module.exports = router;
