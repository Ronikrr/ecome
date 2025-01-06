
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt'); // Use bcrypt for password hashing
const multer = require("multer");
require('dotenv').config();

const app = express();
mongoose.connect('mongodb://127.0.0.1:27017/cosmatic')
    .then(() => console.log('MongoDB connected successfully!'))
    .catch((err) => console.error('Error connecting to MongoDB:', err));

// Middleware
app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

const userSchema = new mongoose.Schema({
    firstname: {
        type: String,
        required: true,
        trim: true
    },
    lastname: {
        type: String,
        required: true,
        trim: true
    },
    username: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        match: /^[^\s@]+@[^\s@]+\.[^\s@]+$/  // Email validation regex
    },
    password: {
        type: String,
        required: true,
        minlength: 8  // Set your desired password length
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});
const User = mongoose.model('Users', userSchema);


// User Registration Route
app.post('/register', async (req, res) => {
    const { firstname, lastname, username, emailid, password, confirmpass } = req.body;

    // Input validation
    if (!firstname || !lastname || !username || !emailid || !password || !confirmpass) {
        return res.status(400).json({ message: 'All fields are required' });
    }

    if (password !== confirmpass) {
        return res.status(400).json({ message: 'Passwords do not match' });
    }

    try {
        // Check if user already exists
        const existingUser = await User.findOne({ email: emailid });
        if (existingUser) {
            return res.status(400).json({ message: 'Email already in use' });
        }

        // Hash password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Create new user
        const newUser = new User({
            firstname,
            lastname,
            username,
            email: emailid,
            password: hashedPassword
        });

        await newUser.save();
        res.status(201).json({ success: true, message: 'User registered successfully' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
});

// Server
app.listen(8080, () => console.log('Server running on http://localhost:8080'));
