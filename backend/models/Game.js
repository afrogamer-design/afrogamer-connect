import { pool } from './db.js'

export async function getAllGames() {
  const result = await pool.query('SELECT * FROM games ORDER BY name ASC')
  return result.rows
}
