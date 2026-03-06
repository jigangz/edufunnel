export default function HowItWorks() {
  const steps = [
    {
      number: "01",
      icon: (
        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
        </svg>
      ),
      title: "Sign Up Free",
      description:
        "Create your account in under 60 seconds. No credit card needed — start with our full free tier immediately.",
    },
    {
      number: "02",
      icon: (
        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      ),
      title: "Pick Your Subject",
      description:
        "Browse Math, Science, English, and more. Select your grade level and get a personalized learning path.",
    },
    {
      number: "03",
      icon: (
        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: "Start Learning",
      description:
        "Watch short expert-led videos, solve practice problems with hints, and track your progress in real time.",
    },
  ];

  return (
    <section id="how-it-works" className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block text-indigo-600 font-semibold text-sm uppercase tracking-wider mb-4">
            How It Works
          </span>
          <h2 className="text-4xl lg:text-5xl font-extrabold text-slate-900 mb-4">
            From signup to success
            <br className="hidden sm:block" /> in three steps
          </h2>
          <p className="text-xl text-slate-500 max-w-2xl mx-auto">
            No fluff, no filler. We get you learning the right things, in the right order, fast.
          </p>
        </div>

        <div className="relative">
          {/* Connector line — desktop only */}
          <div className="hidden lg:block absolute top-16 left-1/2 -translate-x-1/2 w-full max-w-3xl">
            <div className="h-0.5 bg-gradient-to-r from-transparent via-indigo-200 to-transparent" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
            {steps.map((step, i) => (
              <div key={step.number} className="flex flex-col items-center text-center">
                {/* Icon circle */}
                <div className="relative mb-6">
                  <div className="w-16 h-16 bg-indigo-600 rounded-2xl flex items-center justify-center text-white shadow-lg shadow-indigo-200">
                    {step.icon}
                  </div>
                  <div className="absolute -top-2 -right-2 w-6 h-6 bg-white border-2 border-indigo-600 rounded-full flex items-center justify-center">
                    <span className="text-indigo-600 text-xs font-bold">{i + 1}</span>
                  </div>
                </div>

                <h3 className="text-xl font-bold text-slate-900 mb-3">{step.title}</h3>
                <p className="text-slate-500 leading-relaxed max-w-xs">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
