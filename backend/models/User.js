import { pool } from './db.js'

export async function createUser(username, email, passwordHash, country) {
  const result = await pool.query(
    'INSERT INTO users (username, email, password_hash, country) VALUES ($1, $2, $3, $4) RETURNING id, username, email, country',
    [username, email, passwordHash, country]
  )
  return result.rows[0]
}

export async function findUserByEmail(email) {
  const result = await pool.query('SELECT * FROM users WHERE email = $1', [email])
  return result.rows[0]
}
