"use client";

import Link from "next/link";
import { trackEvent } from "@/lib/funnel";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-slate-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center">
              <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" />
              </svg>
            </div>
            <span className="text-xl font-bold text-slate-900">EduFunnel</span>
          </Link>

          {/* Nav links */}
          <div className="hidden md:flex items-center gap-8">
            <Link href="#courses" className="text-slate-600 hover:text-indigo-600 font-medium text-sm">
              Courses
            </Link>
            <Link href="#pricing" className="text-slate-600 hover:text-indigo-600 font-medium text-sm">
              Pricing
            </Link>
            <Link href="#faq" className="text-slate-600 hover:text-indigo-600 font-medium text-sm">
              FAQ
            </Link>
          </div>

          {/* CTAs */}
          <div className="flex items-center gap-3">
            <Link
              href="/register"
              className="hidden sm:block text-slate-600 hover:text-indigo-600 font-medium text-sm"
            >
              Login
            </Link>
            <Link
              href="/register"
              onClick={() => trackEvent("cta_click")}
              className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold text-sm px-4 py-2 rounded-lg shadow-sm"
            >
              Start Free Trial
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
