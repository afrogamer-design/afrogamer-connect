import pkg from "pg";
const { Pool } = pkg;

const pool = new Pool({
  connectionString: "postgresql://postgres:jCZSQrkX54ACP7PI@db.kodicbboapdsowvgicmx.supabase.co:5432/postgres",
  ssl: { rejectUnauthorized: false },
});

export default pool;
