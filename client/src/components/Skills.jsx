import { useEffect, useRef, useState } from "react";

const skillCategories = [
  {
    title: "Frontend",
    icon: "🎨",
    skills: [
      "React Js",
      "Next Js",
      "HTML",
      "CSS",
      "JavaScript",
      "Material UI",
      "Tailwind CSS",
      "DaisyUI",
    ],
  },
  {
    title: "Backend",
    icon: "⚙️",
    skills: [
      "Node Js",
      "Python",
      "MySQL",
      "MongoDB",
      "Firebase",
      "Nest JS",
      "Express Js",
    ],
  },
  {
    title: "Programming Languages",
    icon: "💻",
    skills: ["JavaScript", "TypeScript", "Python", "C++", "C"],
  },
  {
    title: "Tools & Platforms",
    icon: "🛠️",
    skills: [
      "Git",
      "GitHub",
      "Netlify",
      "VS Code",
      "Postman",
      "Figma",
      "Canva",
      "Google Colab",
    ],
  },
];

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 },
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="skills" ref={sectionRef} className="bg-white py-20 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <h2
          className={`text-3xl md:text-4xl font-bold text-gray-800 mb-3 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-6"
          }`}
        >
          My Skills
        </h2>
        <p
          className={`text-gray-500 mb-14 max-w-2xl mx-auto transition-all duration-700 delay-100 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-6"
          }`}
        >
          Expertise in building modern web applications and advanced AI
          solutions.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, catIndex) => (
            <div
              key={category.title}
              className={`bg-gray-50 rounded-2xl p-6 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-500 ease-out border border-gray-100 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${catIndex * 150}ms` }}
            >
              <div className="text-4xl mb-4">{category.icon}</div>
              <h3 className="text-lg font-semibold text-gray-800 mb-4">
                {category.title}
              </h3>

              <div className="flex flex-wrap gap-2 justify-center">
                {category.skills.map((skill, skillIndex) => (
                  <span
                    key={skill}
                    className={`bg-blue-50 text-blue-700 text-sm font-medium px-3 py-1.5 rounded-full hover:bg-blue-600 hover:text-white transition-all duration-300 ${
                      isVisible ? "opacity-100 scale-100" : "opacity-0 scale-75"
                    }`}
                    style={{
                      transitionDelay: `${catIndex * 150 + skillIndex * 60}ms`,
                    }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
