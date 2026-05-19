import express from 'express'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
import db from '../db.js'

const router = express.Router()

// Register a new user
router.post('/register', (req, res) => {
    const {username, password} = req.body

    // Hash the password
    const hashedPassword = bcrypt.hashSync(password, 8)

try {
    console.log()

    console.log(username, password)
    res.sendStatus(201)
});

router.post('/login', (req, res) => {});

export default router