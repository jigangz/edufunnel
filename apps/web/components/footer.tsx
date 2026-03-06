import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center">
                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" />
                </svg>
              </div>
              <span className="text-white font-bold text-xl">EduFunnel</span>
            </div>
            <p className="text-sm leading-relaxed mb-4">
              Expert-led online courses for students who want to actually understand
              what they&apos;re learning — not just memorize it.
            </p>
            <div className="flex gap-4">
              {["Twitter", "YouTube", "Instagram"].map((social) => (
                <a
                  key={social}
                  href="#"
                  className="text-slate-500 hover:text-indigo-400 transition-colors text-sm"
                >
                  {social}
                </a>
              ))}
            </div>
          </div>

          {/* Subjects */}
          <div>
            <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">
              Subjects
            </h4>
            <ul className="space-y-2 text-sm">
              {["Mathematics", "Science", "English", "Social Studies", "Computer Science", "SAT Prep"].map(
                (item) => (
                  <li key={item}>
                    <Link href="/courses" className="hover:text-indigo-400 transition-colors">
                      {item}
                    </Link>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">
              Company
            </h4>
            <ul className="space-y-2 text-sm">
              {["About Us", "Blog", "Careers", "Press", "Partners", "Contact"].map((item) => (
                <li key={item}>
                  <a href="#" className="hover:text-indigo-400 transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">
              Support
            </h4>
            <ul className="space-y-2 text-sm">
              {["Help Center", "Pricing", "Privacy Policy", "Terms of Service", "Cookie Policy"].map(
                (item) => (
                  <li key={item}>
                    <a href="#" className="hover:text-indigo-400 transition-colors">
                      {item}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-slate-800 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm">
            © {new Date().getFullYear()} EduFunnel Inc. All rights reserved.
          </p>
          <p className="text-sm text-slate-600">
            Built for students, by people who remember being students.
          </p>
        </div>
      </div>
    </footer>
  );
}
