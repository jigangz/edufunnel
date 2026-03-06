export default function SocialProof() {
  const universities = [
    "MIT",
    "Stanford",
    "Harvard",
    "UC Berkeley",
    "Oxford",
    "Toronto",
    "Carnegie Mellon",
    "Waterloo",
  ];

  return (
    <section className="bg-slate-50 py-14 border-y border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-slate-500 text-sm font-medium uppercase tracking-wider mb-8">
          Trusted by students at top universities
        </p>

        {/* University logos row */}
        <div className="flex flex-wrap justify-center items-center gap-x-10 gap-y-4">
          {universities.map((uni) => (
            <div
              key={uni}
              className="text-slate-400 font-bold text-lg tracking-tight hover:text-slate-600 transition-colors cursor-default select-none"
            >
              {uni}
            </div>
          ))}
        </div>

        {/* Trust stats */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl mx-auto">
          {[
            {
              icon: "🎓",
              value: "50,000+",
              label: "Students helped",
              sub: "across 80+ countries",
            },
            {
              icon: "⭐",
              value: "4.9/5",
              label: "Average rating",
              sub: "from 12,000+ reviews",
            },
            {
              icon: "📈",
              value: "98%",
              label: "Pass rate",
              sub: "vs. 72% without us",
            },
          ].map((item) => (
            <div
              key={item.label}
              className="text-center bg-white rounded-2xl p-6 shadow-sm border border-slate-100"
            >
              <div className="text-3xl mb-2">{item.icon}</div>
              <div className="text-3xl font-extrabold text-indigo-600 mb-1">
                {item.value}
              </div>
              <div className="text-slate-800 font-semibold text-sm">
                {item.label}
              </div>
              <div className="text-slate-400 text-xs mt-1">{item.sub}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
