"use client";

import Link from "next/link";
import { trackEvent } from "@/lib/funnel";

const courses = [
  {
    emoji: "📐",
    subject: "Mathematics",
    color: "from-blue-500 to-indigo-600",
    bg: "bg-blue-50",
    border: "border-blue-100",
    topics: ["Algebra", "Calculus", "Statistics", "Geometry"],
    lessons: 148,
    students: "18,200+",
  },
  {
    emoji: "🔬",
    subject: "Science",
    color: "from-green-500 to-emerald-600",
    bg: "bg-emerald-50",
    border: "border-emerald-100",
    topics: ["Biology", "Chemistry", "Physics", "Earth Science"],
    lessons: 124,
    students: "14,500+",
  },
  {
    emoji: "📖",
    subject: "English",
    color: "from-violet-500 to-purple-600",
    bg: "bg-violet-50",
    border: "border-violet-100",
    topics: ["Grammar", "Essay Writing", "Literature", "SAT Prep"],
    lessons: 96,
    students: "11,800+",
  },
  {
    emoji: "🌍",
    subject: "Social Studies",
    color: "from-amber-500 to-orange-600",
    bg: "bg-amber-50",
    border: "border-amber-100",
    topics: ["History", "Geography", "Economics", "Civics"],
    lessons: 78,
    students: "8,300+",
  },
  {
    emoji: "💻",
    subject: "Computer Science",
    color: "from-cyan-500 to-blue-600",
    bg: "bg-cyan-50",
    border: "border-cyan-100",
    topics: ["Python", "Algorithms", "Data Structures", "Web Dev"],
    lessons: 112,
    students: "9,700+",
  },
  {
    emoji: "🧠",
    subject: "SAT / ACT Prep",
    color: "from-rose-500 to-pink-600",
    bg: "bg-rose-50",
    border: "border-rose-100",
    topics: ["Math Section", "Reading", "Writing", "Practice Tests"],
    lessons: 64,
    students: "6,100+",
  },
];

export default function CourseCards() {
  return (
    <section id="courses" className="py-20 lg:py-28 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block text-indigo-600 font-semibold text-sm uppercase tracking-wider mb-4">
            Subjects
          </span>
          <h2 className="text-4xl lg:text-5xl font-extrabold text-slate-900 mb-4">
            Every subject covered
          </h2>
          <p className="text-xl text-slate-500 max-w-2xl mx-auto">
            From elementary school to college level — we have step-by-step
            lessons for every topic on your syllabus.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {courses.map((course) => (
            <Link
              key={course.subject}
              href="/courses"
              onClick={() => trackEvent("cta_click")}
              className={`group block rounded-2xl ${course.bg} border ${course.border} p-6 hover:shadow-lg hover:-translate-y-1 transition-all duration-200`}
            >
              {/* Header */}
              <div className="flex items-center gap-4 mb-4">
                <div
                  className={`w-14 h-14 rounded-xl bg-gradient-to-br ${course.color} flex items-center justify-center text-2xl shadow-md`}
                >
                  {course.emoji}
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 text-lg">{course.subject}</h3>
                  <p className="text-slate-500 text-sm">{course.lessons} lessons</p>
                </div>
              </div>

              {/* Topics */}
              <div className="flex flex-wrap gap-2 mb-4">
                {course.topics.map((topic) => (
                  <span
                    key={topic}
                    className="text-xs font-medium bg-white text-slate-600 px-2.5 py-1 rounded-full border border-slate-200"
                  >
                    {topic}
                  </span>
                ))}
              </div>

              {/* Footer */}
              <div className="flex items-center justify-between pt-3 border-t border-slate-200/80">
                <span className="text-slate-500 text-sm">{course.students} students</span>
                <span className={`text-sm font-semibold bg-gradient-to-r ${course.color} bg-clip-text text-transparent group-hover:underline`}>
                  Explore →
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
