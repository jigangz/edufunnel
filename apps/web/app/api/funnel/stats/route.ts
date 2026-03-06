import { NextResponse } from "next/server";
import pool from "@/lib/db";

const VALID_STEPS = ["page_view", "cta_click", "register", "course_select"];

export async function GET() {
  try {
    // Auto-create table if needed
    await pool.query(`
      CREATE TABLE IF NOT EXISTS funnel_events (
        id SERIAL PRIMARY KEY,
        step TEXT NOT NULL,
        session_id TEXT NOT NULL,
        created_at TIMESTAMPTZ DEFAULT NOW()
      )
    `);

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
      const row = result.rows.find((r: { step: string }) => r.step === step);
      return { step, count: row ? parseInt(row.count) : 0 };
    });

    const withRates = steps.map((s, i) => ({
      ...s,
      rate:
        i === 0
          ? 100
          : steps[0].count > 0
            ? Math.round((s.count / steps[0].count) * 100)
            : 0,
      dropOff:
        i === 0
          ? 0
          : steps[i - 1].count > 0
            ? Math.round(
                ((steps[i - 1].count - s.count) / steps[i - 1].count) * 100
              )
            : 0,
    }));

    return NextResponse.json({
      steps: withRates,
      updatedAt: new Date().toISOString(),
    });
  } catch (err) {
    console.error("Failed to fetch funnel stats:", err);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
