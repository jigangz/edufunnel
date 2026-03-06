import type { VercelRequest, VercelResponse } from "@vercel/node";
import express from "express";
import cors from "cors";

import healthRouter from "../src/routes/health";
import funnelRouter from "../src/routes/funnel";

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/health", healthRouter);
app.use("/api/funnel", funnelRouter);

// Vercel serverless handler
export default function handler(req: VercelRequest, res: VercelResponse) {
  return app(req as any, res as any);
}
