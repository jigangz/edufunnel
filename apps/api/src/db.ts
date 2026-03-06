import { Pool } from "pg";
import dotenv from "dotenv";

dotenv.config();

const pool = new Pool({
  connectionString:
    process.env.DATABASE_URL ||
    "postgresql://postgres.xknzaqbchlnqsfcrwumb:5sfVlaWVZKN0cxuA@aws-0-us-west-2.pooler.supabase.com:5432/postgres",
  ssl: { rejectUnauthorized: false },
  max: 10,
  idleTimeoutMillis: 30000,
  connectionTimeoutMillis: 5000,
});

// Create the funnel_events table if it doesn't exist
export async function initDb() {
  await pool.query(`
    CREATE TABLE IF NOT EXISTS funnel_events (
      id SERIAL PRIMARY KEY,
      step TEXT NOT NULL,
      session_id TEXT NOT NULL,
      created_at TIMESTAMPTZ DEFAULT NOW()
    )
  `);
  console.log("DB ready — funnel_events table OK");
}

export default pool;
