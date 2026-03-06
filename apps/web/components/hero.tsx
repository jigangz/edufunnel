"use client";

import Link from "next/link";
import { trackEvent } from "@/lib/funnel";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-indigo-950 via-indigo-900 to-blue-900 pt-32 pb-20 lg:pb-32">
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-indigo-500/20 rounded-full blur-3xl" />
        <div className="absolute -bottom-20 -left-40 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl" />
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-indigo-500/20 border border-indigo-400/30 text-indigo-200 text-sm font-medium px-4 py-2 rounded-full mb-8">
            <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
            Trusted by 50,000+ students worldwide
          </div>

          {/* Headline */}
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-white leading-tight tracking-tight mb-6">
            Master Math,{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-indigo-300">
              Science
            </span>{" "}
            & More
          </h1>

          {/* Subheadline */}
          <p className="text-xl sm:text-2xl text-indigo-200 max-w-2xl mx-auto mb-10 leading-relaxed">
            Expert video lessons, step-by-step solutions, and unlimited practice
            problems. Go from confused to confident in any subject.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <Link
              href="/register"
              onClick={() => trackEvent("cta_click")}
              className="w-full sm:w-auto bg-white hover:bg-indigo-50 text-indigo-700 font-bold text-lg px-8 py-4 rounded-xl shadow-lg hover:shadow-xl hover:-translate-y-0.5 transform transition-all"
            >
              Start Free Trial →
            </Link>
            <Link
              href="#how-it-works"
              className="w-full sm:w-auto border border-indigo-400/50 hover:border-indigo-300 text-indigo-200 hover:text-white font-semibold text-lg px-8 py-4 rounded-xl transition-all"
            >
              See How It Works
            </Link>
          </div>

          {/* Social proof strip */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-indigo-300 text-sm">
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              No credit card required
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              Cancel anytime
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              7-day free trial
            </div>
          </div>
        </div>

        {/* Stats cards */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
          {[
            { value: "50K+", label: "Active Students" },
            { value: "500+", label: "Video Lessons" },
            { value: "98%", label: "Pass Rate" },
            { value: "4.9★", label: "Average Rating" },
          ].map((stat) => (
            <div
              key={stat.label}
              className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-4 text-center"
            >
              <div className="text-2xl font-bold text-white">{stat.value}</div>
              <div className="text-indigo-300 text-xs mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
