import React, { useEffect, useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCode,
  faServer,
  faDatabase,
  faKey,
  faTools,
  faLayerGroup,
  faChartLine,
} from "@fortawesome/free-solid-svg-icons";

const SKILL_GROUPS = [
  {
    title: "Frontend",
    icon: faCode,
    skills: [
      { label: "HTML5", level: 90 },
      { label: "CSS3", level: 85 },
      { label: "Tailwind CSS", level: 90 },
      { label: "JavaScript (ES6+)", level: 90 },
      { label: "TypeScript", level: 75 },
      { label: "React.js", level: 90 },
    ],
  },
  {
    title: "Backend",
    icon: faServer,
    skills: [
      { label: "Node.js", level: 80 },
      { label: "Express.js", level: 80 },
      { label: "REST APIs", level: 85 },
    ],
  },
  {
    title: "Database",
    icon: faDatabase,
    skills: [
      { label: "MongoDB", level: 80 },
      { label: "MySQL", level: 75 },
    ],
  },
  {
    title: "Authentication",
    icon: faKey,
    skills: [
      { label: "JWT", level: 80 },
      { label: "Passport.js", level: 70 },
    ],
  },
  {
    title: "Tools",
    icon: faTools,
    skills: [
      { label: "Git", level: 85 },
      { label: "GitHub", level: 85 },
      { label: "VS Code", level: 90 },
      { label: "Postman", level: 80 },
    ],
  },
  {
    title: "Core Concepts",
    icon: faLayerGroup,
    skills: [
      { label: "OOP", level: 80 },
      { label: "Data Structures & Algorithms", level: 80 },
      { label: "DBMS", level: 75 },
      { label: "REST API Design", level: 80 },
      { label: "Computer Networks", level: 70 },
      { label: "Operating Systems", level: 70 },
    ],
  },
];

function SkillBar({ label, level, animate, dark }) {
  return (
    <div className="mb-3 last:mb-0">
      <div className="flex justify-between mb-1">
        <span
          className={`text-sm font-medium ${dark ? "text-white/90" : "text-gray-700"}`}
        >
          {label}
        </span>
        <span className={`text-xs ${dark ? "text-white/60" : "text-gray-400"}`}>
          {level}%
        </span>
      </div>
      <div
        className={`h-2 w-full rounded-full overflow-hidden ${dark ? "bg-white/20" : "bg-white/60"}`}
      >
        <div
          className={`h-full rounded-full transition-all duration-1000 ease-out ${
            dark ? "bg-white" : "bg-linear-to-r from-[#CF15D4] to-[#7B14F9]"
          }`}
          style={{ width: animate ? `${level}%` : "0%" }}
        />
      </div>
    </div>
  );
}

function SkillCard({ title, icon, skills, className }) {
  const cardRef = useRef(null);
  const [animate, setAnimate] = useState(false);
  const dark = Boolean(className);

  useEffect(() => {
    const el = cardRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setAnimate(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={cardRef}
      className={`rounded-2xl shadow-md hover:shadow-lg transition-all duration-200 p-6 ${
        className || "bg-linear-to-br from-purple-50 via-white to-pink-50"
      }`}
    >
      <div className="flex items-center gap-3 mb-5">
        <span
          className={`flex items-center justify-center w-10 h-10 rounded-full shrink-0 ${
            dark
              ? "bg-white/20 text-white"
              : "bg-linear-to-bl from-[#CF15D4] to-[#7B14F9] text-white"
          }`}
        >
          <FontAwesomeIcon icon={icon} className="text-sm" />
        </span>
        <h3
          className={`font-semibold ${dark ? "text-white" : "text-gray-800"}`}
        >
          {title}
        </h3>
      </div>

      {skills.map((s) => (
        <SkillBar key={s.label} {...s} animate={animate} dark={dark} />
      ))}
    </div>
  );
}

export default function Skills() {
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero */}
      <div className="bg-linear-to-bl from-[#CF15D4] to-[#7B14F9] px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-3xl sm:text-4xl font-bold text-white">Skills</h1>
          <p className="mt-3 text-white/85 max-w-xl mx-auto">
            Technologies and tools I use to build full-stack web applications,
            from the browser down to the database.
          </p>
        </div>
      </div>

      {/* Skill cards */}
      <div className="max-w-5xl  mx-auto px-4 sm:px-6 lg:px-8 -mt-10 pb-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 ">
          {SKILL_GROUPS.map((group) => (
            <SkillCard
              key={group.title}
              {...group}
              className="bg-linear-to-bl from-[#CF15D4] to-[#7B14F9] "
            />
          ))}
        </div>

        {/* Problem solving strip */}
        <div className="mt-6 bg-linear-to-bl from-[#CF15D4]  to-[#7B14F9] rounded-2xl shadow-md hover:shadow-lg transition-all duration-200 p-6">
          <div className="flex items-center gap-3 mb-5">
            <span className="flex items-center justify-center w-10 h-10 rounded-full bg-linear-to-bl from-[#CF15D4] to-[#7B14F9] text-white shrink-0">
              <FontAwesomeIcon icon={faChartLine} className="text-sm" />
            </span>
            <div>
              <h3 className="font-semibold text-white">Problem Solving</h3>
              <p className="text-xs text-white">
                226 problems solved on LeetCode
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-5 gap-4 text-center">
            {[
              { label: "Python3", count: 164 },
              { label: "MySQL", count: 44 },
              { label: "JavaScript", count: 12 },
              { label: "TypeScript", count: 2 },
              { label: "C++", count: 1 },
            ].map((row) => (
              <div key={row.label} className="rounded-xl bg-white py-3">
                <div className="text-xl font-bold text-black">
                  {row.count}
                </div>
                <div className="text-xs text-black mt-1">{row.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
