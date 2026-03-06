const testimonials = [
  {
    name: "Sarah Chen",
    role: "Pre-Med Student, UC Berkeley",
    avatar: "SC",
    avatarColor: "from-indigo-400 to-blue-500",
    stars: 5,
    quote:
      "I was failing Organic Chemistry and on academic probation. After two weeks with EduFunnel, I aced my midterm with an 88. The step-by-step video explanations are genuinely better than my professor's lectures.",
  },
  {
    name: "Marcus Williams",
    role: "Grade 11, Toronto",
    avatar: "MW",
    avatarColor: "from-emerald-400 to-teal-500",
    stars: 5,
    quote:
      "Calculus went from my worst subject to my best. I went from a 52% to a 91% in one semester. My parents thought I hired a tutor — I just used EduFunnel every night for 30 minutes.",
  },
  {
    name: "Priya Patel",
    role: "SAT Prep, Scored 1520",
    avatar: "PP",
    avatarColor: "from-violet-400 to-purple-500",
    stars: 5,
    quote:
      "I raised my SAT score by 240 points in 8 weeks. The practice problems with instant feedback are incredible. Worth every penny of the Pro plan — easily paid for itself.",
  },
];

function Stars({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <svg key={i} className="w-4 h-4 text-amber-400 fill-current" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

export default function Testimonials() {
  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block text-indigo-600 font-semibold text-sm uppercase tracking-wider mb-4">
            Student Stories
          </span>
          <h2 className="text-4xl lg:text-5xl font-extrabold text-slate-900 mb-4">
            Real results, real students
          </h2>
          <p className="text-xl text-slate-500 max-w-2xl mx-auto">
            Don&apos;t take our word for it. Here&apos;s what students are saying after
            using EduFunnel for their toughest subjects.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="bg-white rounded-2xl border border-slate-200 p-8 shadow-sm hover:shadow-md transition-shadow"
            >
              {/* Stars */}
              <Stars count={t.stars} />

              {/* Quote */}
              <blockquote className="mt-4 text-slate-700 leading-relaxed text-[15px]">
                &ldquo;{t.quote}&rdquo;
              </blockquote>

              {/* Author */}
              <div className="mt-6 flex items-center gap-3">
                <div
                  className={`w-10 h-10 rounded-full bg-gradient-to-br ${t.avatarColor} flex items-center justify-center text-white font-bold text-sm flex-shrink-0`}
                >
                  {t.avatar}
                </div>
                <div>
                  <div className="font-semibold text-slate-900 text-sm">{t.name}</div>
                  <div className="text-slate-500 text-xs">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Rating summary */}
        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-3 bg-amber-50 border border-amber-200 rounded-full px-6 py-3">
            <Stars count={5} />
            <span className="text-slate-700 font-semibold text-sm">
              4.9 out of 5 —{" "}
              <span className="text-amber-600">12,847 verified reviews</span>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
