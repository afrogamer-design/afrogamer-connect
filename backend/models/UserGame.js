import { pool } from './db.js'

export async function addUserGames(userId, gameIds) {
  await pool.query('DELETE FROM user_games WHERE user_id = $1', [userId])
  for (const gameId of gameIds) {
    await pool.query('INSERT INTO user_games (user_id, game_id) VALUES ($1, $2)', [userId, gameId])
  }
}
