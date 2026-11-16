import { useEffect, useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faReact,
  faNodeJs,
  faPython,
  faJs,
  faGitAlt,
  faHtml5,
  faCss3Alt,
  faFigma,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
import {
  faPalette,
  faServer,
  faCode,
  faTools,
  faDatabase,
  faCloud,
  faLaptopCode,
  faCogs,
  faSquare,
} from "@fortawesome/free-solid-svg-icons";

const skillCategories = [
  {
    title: "Frontend",
    icon: faPalette,
    iconColor: "#C9A876",
    skills: [
      "React Js",
      "Next Js",
      "HTML5",
      "CSS3",
      "JavaScript",
      "TypeScript",
      "Tailwind CSS",
      "DaisyUI",
    ],
  },
  {
    title: "Backend",
    icon: faServer,
    iconColor: "#C9A876",
    skills: [
      "Node Js",
      "Python",
      "MySQL",
      "MongoDB",
      "postgreSQL",
      "Firebase",
      "Nest JS",
      "Express Js",
    ],
  },
  {
    title: "Programming",
    icon: faCode,
    iconColor: "#C9A876",
    skills: ["JavaScript", "TypeScript", "Python", "C++", "C"],
  },
  {
    title: "Tools & Platforms",
    icon: faTools,
    iconColor: "#C9A876",
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
    <section
      id="skills"
      ref={sectionRef}
      className="pt-10 px-6 bg-[#0F1117] overflow-hidden relative"
    >
      {/* Decorative gradient background */}
      <div className="absolute inset-0 bg-gradient-to-tr from-[#C9A876]/5 via-transparent to-[#C9A876]/5"></div>

      {/* Decorative circles */}
      <div className="absolute top-10 left-10 w-64 h-64 bg-[#C9A876]/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-80 h-80 bg-[#C9A876]/5 rounded-full blur-3xl"></div>

      <div className="max-w-6xl mx-auto text-center relative z-10">


        <h2
          className={`font-['Playfair_Display'] text-3xl md:text-4xl lg:text-5xl font-bold text-[#F5EFE6] mb-3 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-6"
            }`}
        >
          My <span className="text-[#C9A876]">Expertise</span>
        </h2>

        <p
          className={`text-[#F5EFE6]/60 italic mb-5 md:mb-7 max-w-2xl mx-auto font-['Inter'] transition-all duration-700 delay-100 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-6"
            }`}
        >
          Expertise in building modern web applications with cutting-edge technologies
          and best practices.
        </p>

        {/* Full width divider */}
        <div className="relative w-screen left-1/2 -translate-x-1/2 h-px bg-gradient-to-r from-transparent via-[#C9A876]/30 to-transparent mb-5 md:mb-8"></div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, catIndex) => (
            <div
              key={category.title}
              className={`group bg-[#171923]/50 backdrop-blur-sm rounded-2xl p-2  md:p-4 border border-[#C9A876]/20 hover:border-[#C9A876]/60 hover:shadow-2xl hover:shadow-[#C9A876]/10 hover:-translate-y-2 transition-all duration-500 ease-out ${isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
                }`}
              style={{ transitionDelay: `${catIndex * 150}ms` }}
            >
              <div className="relative">
                {/* Icon background glow */}
                <div className="absolute inset-0 bg-[#C9A876]/10 blur-2xl rounded-full -z-10 group-hover:blur-3xl transition-all duration-500"></div>
                <div className="w-16 h-16 mx-auto rounded-full bg-[#C9A876]/10 flex items-center justify-center mb-4 group-hover:bg-[#C9A876]/20 transition-all duration-300">
                  <FontAwesomeIcon
                    icon={category.icon}
                    className="text-3xl text-[#C9A876] group-hover:scale-110 transition-all duration-300"
                  />
                </div>
              </div>

              <h3 className="text-sm sm:text-lg md:text-lg font-semibold text-[#F5EFE6] mb-4 font-['Inter']">
                {category.title}
              </h3>

              <div className="flex flex-wrap gap-2 justify-center">
                {category.skills.map((skill, skillIndex) => (
                  <span
                    key={skill}
                    className={`bg-[#C9A876]/10 text-[#C9A876] text-sm sm:text-lg md:text-lg font-medium px-3 py-1.5 rounded-full border border-[#C9A876]/20 hover:bg-[#C9A876] hover:text-[#140D0A] hover:border-[#C9A876] transition-all duration-300 cursor-default ${isVisible ? "opacity-100 scale-100" : "opacity-0 scale-75"
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

        {/* Additional Stats */}
        <div
          className={`mt-5 md:mt-8 mb-5 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto transition-all duration-700 delay-300 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
        >
          <div className="bg-[#171923]/30 border  border-[#C9A876]/20 rounded-xl px-4 py-3 hover:border-[#C9A876]/50 transition-all duration-300">
            <p className="text-sm sm:text-lg md:text-lg font-bold text-[#C9A876] font-['Inter']">20+</p>
            <p className="text-xs sm:text-md text-[#F5EFE6]/50 font-['Inter']  tracking-wider">Technologies</p>
          </div>
          <div className="bg-[#171923]/30  border border-[#C9A876]/20 rounded-xl px-4 py-3 hover:border-[#C9A876]/50 transition-all duration-300">
            <p className="text-sm sm:text-lg md:text-lg font-bold text-[#C9A876] font-['Inter']">10+</p>
            <p className="text-xs sm:text-md text-[#F5EFE6]/50 font-['Inter']  tracking-wider">Projects</p>
          </div>
          <div className="bg-[#171923]/30 border  border-[#C9A876]/20 rounded-xl px-4 py-3 hover:border-[#C9A876]/50 transition-all duration-300">
            <p className="text-sm sm:text-lg md:text-lg font-bold text-[#C9A876] font-['Inter']">4+ Years</p>
            <p className="text-xs sm:text-md text-[#F5EFE6]/50 font-['Inter']  tracking-wider"> Experience</p>
          </div>
          <div className="bg-[#171923]/30 border text-xs border-[#C9A876]/20 rounded-xl py-3 flex flex-col items-center justify-center hover:border-[#C9A876]/50 transition-all duration-300">
            <p className="text-sm sm:text-lg md:text-lg font-bold text-[#C9A876] font-['Inter']">24/7</p>
            <p className="text-xs sm:text-md  text-[#F5EFE6]/50  font-['Inter']  ">Available</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;