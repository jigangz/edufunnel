// Funnel event tracking — calls the Express API
// Steps: page_view → cta_click → register → course_select

// Express API (separate service)
const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:4000";

type FunnelStep = "page_view" | "cta_click" | "register" | "course_select";

// Get or create a session ID that persists across the funnel
function getSessionId(): string {
  if (typeof window === "undefined") return "server";

  let sessionId = sessionStorage.getItem("edufunnel_session");
  if (!sessionId) {
    sessionId = `sess_${Date.now()}_${Math.random().toString(36).slice(2, 9)}`;
    sessionStorage.setItem("edufunnel_session", sessionId);
  }
  return sessionId;
}

export async function trackEvent(step: FunnelStep): Promise<void> {
  try {
    await fetch(`${API_URL}/api/funnel/event`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        step,
        sessionId: getSessionId(),
        timestamp: new Date().toISOString(),
      }),
    });
  } catch {
    // Silently fail — tracking should never break the UI
    console.warn(`Failed to track funnel event: ${step}`);
  }
}
