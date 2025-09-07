import express from 'express'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import { createUser, findUserByEmail } from '../models/User.js'

const router = express.Router()

router.post('/register', async (req, res) => {
  try {
    const { username, email, password, country } = req.body
    const existing = await findUserByEmail(email)
    if (existing) return res.status(400).json({ error: 'Email already registered' })

    const hash = await bcrypt.hash(password, 10)
    const user = await createUser(username, email, hash, country)

    res.json(user)
  } catch (err) {
    res.status(500).json({ error: err.message })
  }
})

router.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body
    const user = await findUserByEmail(email)
    if (!user) return res.status(400).json({ error: 'User not found' })

    const match = await bcrypt.compare(password, user.password_hash)
    if (!match) return res.status(400).json({ error: 'Invalid password' })

    const token = jwt.sign(
      { id: user.id, email: user.email },
      process.env.JWT_SECRET,
      { expiresIn: '7d' }
    )

    res.json({ token })
  } catch (err) {
    res.status(500).json({ error: err.message })
  }
})

export default router
