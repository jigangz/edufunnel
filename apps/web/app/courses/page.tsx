"use client";

import { useState } from "react";
import Link from "next/link";
import { trackEvent } from "@/lib/funnel";

const subjects = [
  { id: "math", emoji: "📐", name: "Mathematics", description: "Algebra through Calculus", levels: ["Grade 7-8", "Grade 9-10", "Grade 11-12", "College"] },
  { id: "science", emoji: "🔬", name: "Science", description: "Biology, Chemistry, Physics", levels: ["Grade 7-8", "Grade 9-10", "Grade 11-12", "AP / College"] },
  { id: "english", emoji: "📖", name: "English", description: "Grammar, writing, literature", levels: ["Grade 7-8", "Grade 9-10", "Grade 11-12"] },
  { id: "social", emoji: "🌍", name: "Social Studies", description: "History, geography, economics", levels: ["Grade 7-8", "Grade 9-10", "Grade 11-12"] },
  { id: "cs", emoji: "💻", name: "Computer Science", description: "Python, algorithms, web dev", levels: ["Beginner", "Intermediate", "Advanced"] },
  { id: "sat", emoji: "🧠", name: "SAT / ACT Prep", description: "Test prep & exam strategies", levels: ["PSAT", "SAT", "ACT"] },
];

export default function CoursesPage() {
  const [selected, setSelected] = useState<string | null>(null);
  const [confirmed, setConfirmed] = useState(false);

  async function handleSelect(id: string) {
    setSelected(id);
  }

  async function handleConfirm() {
    if (!selected) return;
    await trackEvent("course_select");
    setConfirmed(true);
  }

  if (confirmed) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-indigo-950 via-indigo-900 to-blue-900 flex items-center justify-center px-4">
        <div className="text-center max-w-md">
          <div className="w-24 h-24 bg-green-400 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
            <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h1 className="text-4xl font-extrabold text-white mb-4">You&apos;re all set! 🎉</h1>
          <p className="text-indigo-200 text-lg mb-8">
            Your learning path is ready. We&apos;ll personalize your lessons based on
            your course selection. Time to start!
          </p>
          <Link
            href="/"
            className="inline-block bg-white text-indigo-700 font-bold px-8 py-4 rounded-xl hover:bg-indigo-50 transition-all shadow-lg"
          >
            Go to Dashboard →
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-950 via-indigo-900 to-blue-900 px-4 py-12">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-10">
          <Link href="/" className="inline-flex items-center gap-2 mb-8">
            <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center">
              <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3z" />
              </svg>
            </div>
            <span className="text-white font-bold text-xl">EduFunnel</span>
          </Link>

          {/* Progress indicator */}
          <div className="flex items-center justify-center gap-2 mb-8">
            {["Sign Up", "Pick Subject", "Start Learning"].map((step, i) => (
              <div key={step} className="flex items-center gap-2">
                <div
                  className={`flex items-center justify-center w-7 h-7 rounded-full text-xs font-bold ${
                    i === 1
                      ? "bg-white text-indigo-700"
                      : i === 0
                      ? "bg-green-400 text-white"
                      : "bg-indigo-700/50 text-indigo-300"
                  }`}
                >
                  {i === 0 ? "✓" : i + 1}
                </div>
                <span className={`text-sm font-medium ${i === 1 ? "text-white" : "text-indigo-400"}`}>
                  {step}
                </span>
                {i < 2 && <div className="w-8 h-px bg-indigo-700" />}
              </div>
            ))}
          </div>

          <h1 className="text-4xl font-extrabold text-white mb-3">
            Pick your first subject
          </h1>
          <p className="text-indigo-200 text-lg">
            Choose what you want to tackle first. You can add more later.
          </p>
        </div>

        {/* Subject grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
          {subjects.map((subject) => (
            <button
              key={subject.id}
              onClick={() => handleSelect(subject.id)}
              className={`text-left p-6 rounded-2xl border-2 transition-all ${
                selected === subject.id
                  ? "border-white bg-white/20 shadow-lg scale-[1.02]"
                  : "border-indigo-700/50 bg-indigo-800/30 hover:border-indigo-400 hover:bg-indigo-800/50"
              }`}
            >
              <div className="text-3xl mb-3">{subject.emoji}</div>
              <div className="font-bold text-white text-lg mb-1">{subject.name}</div>
              <div className="text-indigo-300 text-sm mb-3">{subject.description}</div>
              <div className="flex flex-wrap gap-1">
                {subject.levels.map((level) => (
                  <span
                    key={level}
                    className="text-xs bg-indigo-900/60 text-indigo-300 px-2 py-0.5 rounded-full"
                  >
                    {level}
                  </span>
                ))}
              </div>
              {selected === subject.id && (
                <div className="mt-3 flex items-center gap-1.5 text-green-400 text-sm font-semibold">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Selected
                </div>
              )}
            </button>
          ))}
        </div>

        {/* Confirm button */}
        <div className="text-center">
          <button
            onClick={handleConfirm}
            disabled={!selected}
            className="bg-white hover:bg-indigo-50 disabled:opacity-40 disabled:cursor-not-allowed text-indigo-700 font-bold text-lg px-10 py-4 rounded-xl shadow-lg hover:-translate-y-0.5 transition-all"
          >
            Start Learning {selected ? `${subjects.find((s) => s.id === selected)?.emoji}` : ""} →
          </button>
          <p className="text-indigo-400 text-sm mt-4">
            You can switch or add subjects anytime from your dashboard.
          </p>
        </div>
      </div>
    </div>
  );
}
