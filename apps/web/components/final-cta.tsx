"use client";

import Link from "next/link";
import { trackEvent } from "@/lib/funnel";

export default function FinalCTA() {
  return (
    <section className="py-20 lg:py-28 bg-gradient-to-br from-indigo-900 via-indigo-800 to-blue-900 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 right-0 w-72 h-72 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/4" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-indigo-500/10 rounded-full translate-y-1/2 -translate-x-1/4" />
      </div>

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white mb-6 leading-tight">
          Ready to boost
          <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-indigo-300">
            your grades?
          </span>
        </h2>
        <p className="text-xl text-indigo-200 max-w-xl mx-auto mb-10">
          Join 50,000+ students who went from struggling to succeeding. It starts
          with one free account — no commitment needed.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/register"
            onClick={() => trackEvent("cta_click")}
            className="w-full sm:w-auto bg-white hover:bg-indigo-50 text-indigo-700 font-bold text-lg px-10 py-4 rounded-xl shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all"
          >
            Start Free Trial — No Card Needed
          </Link>
          <Link
            href="#pricing"
            className="w-full sm:w-auto text-indigo-300 hover:text-white font-semibold text-lg underline underline-offset-4 transition-colors"
          >
            View Pricing
          </Link>
        </div>

        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-6 text-indigo-300 text-sm">
          <span>✓ 7-day free trial</span>
          <span>✓ Cancel anytime</span>
          <span>✓ 50,000+ students trust us</span>
        </div>
      </div>
    </section>
  );
}
