"use client";

import { useState } from "react";

const faqs = [
  {
    question: "Is EduFunnel really free to start?",
    answer:
      "Yes, absolutely. The Free plan gives you access to 50+ lessons and practice problems with no credit card required. You can use it forever for free. When you're ready for more, upgrading to Pro takes about 30 seconds.",
  },
  {
    question: "What grade levels do you cover?",
    answer:
      "We cover Grade 4 through first-year college. That includes all high school Math (Algebra, Pre-Calc, Calculus), Sciences (Biology, Chemistry, Physics), English, and test prep like SAT, ACT, and AP exams.",
  },
  {
    question: "How is EduFunnel different from YouTube tutorials?",
    answer:
      "YouTube is great, but it's passive. EduFunnel is built around active learning: after each video, you do practice problems with instant feedback, step-by-step hints if you're stuck, and a progress tracker that shows exactly where your gaps are. Random videos can't do that.",
  },
  {
    question: "Can I cancel my subscription anytime?",
    answer:
      "Yes — you can cancel from your account page with one click, anytime. No annoying phone calls, no cancellation fees. If you cancel, you keep access until the end of your billing period.",
  },
  {
    question: "Do you offer student or school discounts?",
    answer:
      "We offer a 30% discount for verified students with a .edu email, and custom pricing for schools and districts. Reach out at hello@edufunnel.com and we'll sort you out.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="py-20 lg:py-28 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <span className="inline-block text-indigo-600 font-semibold text-sm uppercase tracking-wider mb-4">
            FAQ
          </span>
          <h2 className="text-4xl lg:text-5xl font-extrabold text-slate-900 mb-4">
            Got questions?
          </h2>
          <p className="text-xl text-slate-500">
            Here are the ones we get asked most. If yours isn&apos;t here, email us at{" "}
            <a href="mailto:hello@edufunnel.com" className="text-indigo-600 hover:underline">
              hello@edufunnel.com
            </a>
          </p>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="border border-slate-200 rounded-xl overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex items-center justify-between p-6 text-left hover:bg-slate-50 transition-colors"
                aria-expanded={openIndex === i}
              >
                <span className="font-semibold text-slate-900 pr-4">{faq.question}</span>
                <span
                  className={`flex-shrink-0 w-6 h-6 flex items-center justify-center rounded-full border-2 transition-all ${
                    openIndex === i
                      ? "border-indigo-500 bg-indigo-500 text-white rotate-45"
                      : "border-slate-300 text-slate-400"
                  }`}
                >
                  <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 12 12">
                    <path d="M6 0v12M0 6h12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                  </svg>
                </span>
              </button>
              {openIndex === i && (
                <div className="px-6 pb-6">
                  <p className="text-slate-600 leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
