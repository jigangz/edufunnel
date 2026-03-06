import { Pool } from "pg";

const pool = new Pool({
  connectionString:
    process.env.DATABASE_URL ||
    "postgresql://postgres.xknzaqbchlnqsfcrwumb:5sfVlaWVZKN0cxuA@aws-0-us-west-2.pooler.supabase.com:5432/postgres",
  ssl: { rejectUnauthorized: false },
  max: 5,
  idleTimeoutMillis: 30000,
  connectionTimeoutMillis: 5000,
});

export default pool;
