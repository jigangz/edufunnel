"use client";

import Link from "next/link";
import { trackEvent } from "@/lib/funnel";

const plans = [
  {
    name: "Free",
    price: "$0",
    period: "forever",
    description: "Great for trying it out and casual studying.",
    highlight: false,
    cta: "Get Started Free",
    features: [
      "Access to 50+ lessons",
      "Basic practice problems",
      "1 subject at a time",
      "Community forums",
      "Mobile app access",
    ],
    missing: ["Step-by-step solutions", "Unlimited subjects", "Offline downloads", "Priority support"],
  },
  {
    name: "Pro",
    price: "$9.99",
    period: "per month",
    description: "The sweet spot for serious students.",
    highlight: true,
    badge: "Most Popular",
    cta: "Start Free Trial",
    features: [
      "Access to all 500+ lessons",
      "Unlimited practice problems",
      "Step-by-step solutions",
      "All subjects included",
      "Progress tracking",
      "Offline downloads",
      "Email support",
    ],
    missing: ["1-on-1 tutoring", "Study group sessions"],
  },
  {
    name: "Premium",
    price: "$19.99",
    period: "per month",
    description: "For students who want every advantage.",
    highlight: false,
    cta: "Start Free Trial",
    features: [
      "Everything in Pro",
      "1-on-1 tutoring sessions",
      "Live study group sessions",
      "Exam readiness reports",
      "Parent progress reports",
      "Priority support (24/7)",
      "Early access to new content",
    ],
    missing: [],
  },
];

export default function PricingTable() {
  return (
    <section id="pricing" className="py-20 lg:py-28 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block text-indigo-600 font-semibold text-sm uppercase tracking-wider mb-4">
            Pricing
          </span>
          <h2 className="text-4xl lg:text-5xl font-extrabold text-slate-900 mb-4">
            Simple, transparent pricing
          </h2>
          <p className="text-xl text-slate-500 max-w-2xl mx-auto">
            Start free, upgrade when you need it. No hidden fees, no surprise charges.
            Cancel anytime.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative rounded-2xl p-8 flex flex-col ${
                plan.highlight
                  ? "bg-indigo-600 text-white shadow-2xl shadow-indigo-300 scale-105"
                  : "bg-white border border-slate-200 shadow-sm"
              }`}
            >
              {/* Badge */}
              {plan.badge && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="bg-amber-400 text-amber-900 text-xs font-bold px-4 py-1.5 rounded-full shadow-md">
                    {plan.badge}
                  </span>
                </div>
              )}

              {/* Plan header */}
              <div className="mb-6">
                <h3
                  className={`text-lg font-bold mb-1 ${plan.highlight ? "text-indigo-100" : "text-slate-500"}`}
                >
                  {plan.name}
                </h3>
                <div className="flex items-baseline gap-1">
                  <span
                    className={`text-4xl font-extrabold ${plan.highlight ? "text-white" : "text-slate-900"}`}
                  >
                    {plan.price}
                  </span>
                  <span
                    className={`text-sm ${plan.highlight ? "text-indigo-200" : "text-slate-400"}`}
                  >
                    /{plan.period}
                  </span>
                </div>
                <p
                  className={`text-sm mt-2 ${plan.highlight ? "text-indigo-200" : "text-slate-500"}`}
                >
                  {plan.description}
                </p>
              </div>

              {/* CTA */}
              <Link
                href="/register"
                onClick={() => trackEvent("cta_click")}
                className={`block text-center font-bold py-3 px-6 rounded-xl mb-8 transition-all ${
                  plan.highlight
                    ? "bg-white text-indigo-600 hover:bg-indigo-50 shadow-md"
                    : "bg-indigo-600 text-white hover:bg-indigo-700 shadow-sm"
                }`}
              >
                {plan.cta}
              </Link>

              {/* Features */}
              <ul className="space-y-3 flex-1">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-start gap-3">
                    <svg
                      className={`w-5 h-5 flex-shrink-0 mt-0.5 ${plan.highlight ? "text-indigo-200" : "text-indigo-500"}`}
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span
                      className={`text-sm ${plan.highlight ? "text-indigo-100" : "text-slate-700"}`}
                    >
                      {f}
                    </span>
                  </li>
                ))}
                {plan.missing.map((f) => (
                  <li key={f} className="flex items-start gap-3 opacity-40">
                    <svg
                      className={`w-5 h-5 flex-shrink-0 mt-0.5 ${plan.highlight ? "text-indigo-300" : "text-slate-400"}`}
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span
                      className={`text-sm ${plan.highlight ? "text-indigo-200" : "text-slate-500"}`}
                    >
                      {f}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <p className="text-center text-slate-400 text-sm mt-10">
          All plans include a 7-day free trial. No credit card required to start.
        </p>
      </div>
    </section>
  );
}
