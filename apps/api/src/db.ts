import Database from "better-sqlite3";
import path from "path";

// Use file-based SQLite in dev, /tmp in production (serverless)
const dbPath =
  process.env.NODE_ENV === "production"
    ? "/tmp/edufunnel.db"
    : path.join(__dirname, "../edufunnel.db");

const db = new Database(dbPath);

// Enable WAL mode for better concurrent read performance
db.pragma("journal_mode = WAL");

// Create the funnel_events table if it doesn't exist
export function initDb() {
  db.exec(`
    CREATE TABLE IF NOT EXISTS funnel_events (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      step TEXT NOT NULL,
      session_id TEXT NOT NULL,
      created_at TEXT DEFAULT (datetime('now'))
    )
  `);
  console.log("SQLite ready — funnel_events table OK");
}

export default db;
