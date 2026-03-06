import { NextRequest, NextResponse } from "next/server";
import pool from "@/lib/db";

const VALID_STEPS = ["page_view", "cta_click", "register", "course_select"];

export async function POST(req: NextRequest) {
  try {
    const { step, sessionId } = await req.json();

    if (!step || !sessionId) {
      return NextResponse.json(
        { error: "step and sessionId are required" },
        { status: 400 }
      );
    }

    if (!VALID_STEPS.includes(step)) {
      return NextResponse.json(
        { error: `step must be one of: ${VALID_STEPS.join(", ")}` },
        { status: 400 }
      );
    }

    // Auto-create table if needed
    await pool.query(`
      CREATE TABLE IF NOT EXISTS funnel_events (
        id SERIAL PRIMARY KEY,
        step TEXT NOT NULL,
        session_id TEXT NOT NULL,
        created_at TIMESTAMPTZ DEFAULT NOW()
      )
    `);

    await pool.query(
      "INSERT INTO funnel_events (step, session_id) VALUES ($1, $2)",
      [step, sessionId]
    );

    return NextResponse.json({
      ok: true,
      step,
      sessionId,
      timestamp: new Date().toISOString(),
    });
  } catch (err) {
    console.error("Failed to track funnel event:", err);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
