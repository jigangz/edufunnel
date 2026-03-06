"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

const API_URL = "";

type StepData = {
  step: string;
  count: number;
  rate: number;
  dropOff: number;
};

type StatsResponse = {
  steps: StepData[];
  updatedAt: string;
};

const STEP_LABELS: Record<string, { label: string; emoji: string; color: string }> = {
  page_view: { label: "Page View", emoji: "👁️", color: "bg-blue-500" },
  cta_click: { label: "CTA Click", emoji: "🖱️", color: "bg-indigo-500" },
  register: { label: "Register", emoji: "📝", color: "bg-violet-500" },
  course_select: { label: "Course Select", emoji: "🎯", color: "bg-green-500" },
};

export default function AdminPage() {
  const [stats, setStats] = useState<StatsResponse | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  async function fetchStats() {
    setLoading(true);
    setError("");
    try {
      const res = await fetch(`${API_URL}/api/funnel/stats`);
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      const data = await res.json();
      setStats(data);
    } catch (err) {
      setError(`Failed to load stats: ${err instanceof Error ? err.message : String(err)}`);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchStats();
    // Refresh every 30 seconds
    const interval = setInterval(fetchStats, 30_000);
    return () => clearInterval(interval);
  }, []);

  const totalVisitors = stats?.steps.find((s) => s.step === "page_view")?.count ?? 0;
  const totalConverted = stats?.steps.find((s) => s.step === "course_select")?.count ?? 0;
  const overallRate = totalVisitors > 0 ? Math.round((totalConverted / totalVisitors) * 100) : 0;

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Top nav */}
      <div className="bg-white border-b border-slate-200 px-4 sm:px-6 lg:px-8 py-4">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Link href="/" className="flex items-center gap-2 text-slate-600 hover:text-indigo-600 text-sm font-medium">
              ← Back to site
            </Link>
            <div className="w-px h-4 bg-slate-300" />
            <h1 className="font-bold text-slate-900">Funnel Analytics</h1>
          </div>
          <button
            onClick={fetchStats}
            className="text-sm text-indigo-600 hover:text-indigo-800 font-medium flex items-center gap-1.5"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
            </svg>
            Refresh
          </button>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        {/* Summary cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-10">
          <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm">
            <p className="text-slate-500 text-sm font-medium mb-1">Total Visitors</p>
            <p className="text-4xl font-extrabold text-slate-900">
              {loading ? "—" : totalVisitors.toLocaleString()}
            </p>
          </div>
          <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm">
            <p className="text-slate-500 text-sm font-medium mb-1">Full Funnel Conversions</p>
            <p className="text-4xl font-extrabold text-green-600">
              {loading ? "—" : totalConverted.toLocaleString()}
            </p>
          </div>
          <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm">
            <p className="text-slate-500 text-sm font-medium mb-1">Overall Conversion Rate</p>
            <p className="text-4xl font-extrabold text-indigo-600">
              {loading ? "—" : `${overallRate}%`}
            </p>
          </div>
        </div>

        {/* Funnel visualization */}
        <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
          <div className="border-b border-slate-100 px-6 py-4 flex items-center justify-between">
            <h2 className="font-bold text-slate-900 text-lg">Conversion Funnel</h2>
            {stats && (
              <p className="text-slate-400 text-xs">
                Last updated {new Date(stats.updatedAt).toLocaleTimeString()}
              </p>
            )}
          </div>

          {error && (
            <div className="m-6 bg-red-50 border border-red-200 text-red-700 text-sm px-4 py-3 rounded-lg">
              {error}
              <button onClick={fetchStats} className="ml-2 underline hover:no-underline">
                Retry
              </button>
            </div>
          )}

          {loading && !stats && (
            <div className="py-16 text-center text-slate-400">
              <svg className="animate-spin w-8 h-8 mx-auto mb-3 text-indigo-400" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
              </svg>
              Loading funnel data…
            </div>
          )}

          {stats && (
            <div className="p-6">
              {/* Bar chart rows */}
              <div className="space-y-5">
                {stats.steps.map((step, i) => {
                  const meta = STEP_LABELS[step.step] ?? { label: step.step, emoji: "📊", color: "bg-slate-400" };
                  const maxCount = stats.steps[0]?.count || 1;
                  const barWidth = maxCount > 0 ? Math.max((step.count / maxCount) * 100, 2) : 2;

                  return (
                    <div key={step.step}>
                      {/* Step label row */}
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center gap-2">
                          <span className="text-lg">{meta.emoji}</span>
                          <span className="font-semibold text-slate-800">{meta.label}</span>
                          {i > 0 && step.dropOff > 0 && (
                            <span className="text-xs text-red-500 bg-red-50 px-2 py-0.5 rounded-full font-medium">
                              −{step.dropOff}% drop-off
                            </span>
                          )}
                        </div>
                        <div className="flex items-center gap-4 text-sm">
                          <span className="text-slate-500">{step.count.toLocaleString()} users</span>
                          <span className="font-bold text-indigo-600 w-12 text-right">{step.rate}%</span>
                        </div>
                      </div>

                      {/* Bar */}
                      <div className="h-10 bg-slate-100 rounded-lg overflow-hidden">
                        <div
                          className={`h-full ${meta.color} rounded-lg flex items-center px-3 transition-all duration-700`}
                          style={{ width: `${barWidth}%` }}
                        >
                          {barWidth > 15 && (
                            <span className="text-white text-xs font-bold">
                              {step.count.toLocaleString()}
                            </span>
                          )}
                        </div>
                      </div>

                      {/* Drop-off arrow between steps */}
                      {i < stats.steps.length - 1 && (
                        <div className="flex justify-center my-1">
                          <svg className="w-4 h-4 text-slate-300" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                          </svg>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>

              {/* Table view */}
              <div className="mt-10">
                <h3 className="font-semibold text-slate-700 text-sm uppercase tracking-wider mb-4">
                  Detailed Breakdown
                </h3>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="text-left border-b border-slate-100">
                        <th className="pb-3 text-slate-500 font-medium">Step</th>
                        <th className="pb-3 text-slate-500 font-medium text-right">Count</th>
                        <th className="pb-3 text-slate-500 font-medium text-right">From Visitors</th>
                        <th className="pb-3 text-slate-500 font-medium text-right">Drop-off</th>
                      </tr>
                    </thead>
                    <tbody>
                      {stats.steps.map((step) => {
                        const meta = STEP_LABELS[step.step] ?? { label: step.step, emoji: "📊", color: "" };
                        return (
                          <tr key={step.step} className="border-b border-slate-50 hover:bg-slate-50">
                            <td className="py-3 font-medium text-slate-800">
                              {meta.emoji} {meta.label}
                            </td>
                            <td className="py-3 text-right text-slate-600">{step.count.toLocaleString()}</td>
                            <td className="py-3 text-right font-semibold text-indigo-600">{step.rate}%</td>
                            <td className="py-3 text-right text-red-500">
                              {step.dropOff > 0 ? `−${step.dropOff}%` : "—"}
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
