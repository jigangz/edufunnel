import { Router, Request, Response } from "express";
import pool from "../db";

const router = Router();

const VALID_STEPS = ["page_view", "cta_click", "register", "course_select"];

// POST /api/funnel/event — track a funnel step
router.post("/event", async (req: Request, res: Response) => {
  const { step, sessionId, timestamp } = req.body;

  if (!step || !sessionId) {
    res.status(400).json({ error: "step and sessionId are required" });
    return;
  }

  if (!VALID_STEPS.includes(step)) {
    res.status(400).json({ error: `step must be one of: ${VALID_STEPS.join(", ")}` });
    return;
  }

  try {
    await pool.query(
      "INSERT INTO funnel_events (step, session_id) VALUES ($1, $2)",
      [step, sessionId]
    );

    res.json({ ok: true, step, sessionId, timestamp: timestamp || new Date().toISOString() });
  } catch (err) {
    console.error("Failed to track funnel event:", err);
    res.status(500).json({ error: "Internal server error" });
  }
});

// GET /api/funnel/stats — aggregated stats for the admin dashboard
router.get("/stats", async (_req: Request, res: Response) => {
  try {
    const result = await pool.query(`
      SELECT step, COUNT(*) AS count
      FROM funnel_events
      GROUP BY step
      ORDER BY CASE step
        WHEN 'page_view' THEN 1
        WHEN 'cta_click' THEN 2
        WHEN 'register' THEN 3
        WHEN 'course_select' THEN 4
        ELSE 5
      END
    `);

    const steps = VALID_STEPS.map((step) => {
      const row = result.rows.find((r) => r.step === step);
      return { step, count: row ? parseInt(row.count) : 0 };
    });

    // Calculate conversion rates
    const withRates = steps.map((s, i) => ({
      ...s,
      rate: i === 0 ? 100 : steps[0].count > 0 ? Math.round((s.count / steps[0].count) * 100) : 0,
      dropOff:
        i === 0
          ? 0
          : steps[i - 1].count > 0
          ? Math.round(((steps[i - 1].count - s.count) / steps[i - 1].count) * 100)
          : 0,
    }));

    res.json({ steps: withRates, updatedAt: new Date().toISOString() });
  } catch (err) {
    console.error("Failed to fetch funnel stats:", err);
    res.status(500).json({ error: "Internal server error" });
  }
});

export default router;
