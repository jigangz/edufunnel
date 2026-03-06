import express from "express";
import cors from "cors";
import dotenv from "dotenv";

import { initDb } from "./db";
import healthRouter from "./routes/health";
import funnelRouter from "./routes/funnel";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 4000;

app.use(cors({ origin: process.env.CORS_ORIGIN || "*" }));
app.use(express.json());

// Routes
app.use("/api/health", healthRouter);
app.use("/api/funnel", funnelRouter);

// Boot
async function start() {
  try {
    await initDb();
    app.listen(PORT, () => {
      console.log(`API running on http://localhost:${PORT}`);
    });
  } catch (err) {
    console.error("Failed to start:", err);
    process.exit(1);
  }
}

start();
