import express from 'express'
import { getAllGames } from '../models/Game.js'

const router = express.Router()

router.get('/', async (req, res) => {
  try {
    const games = await getAllGames()
    res.json(games)
  } catch (err) {
    res.status(500).json({ error: err.message })
  }
})

export default router
