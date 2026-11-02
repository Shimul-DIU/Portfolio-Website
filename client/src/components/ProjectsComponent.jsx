import { useEffect, useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faReact,
  faNodeJs
} from "@fortawesome/free-brands-svg-icons";
import {
  faExternalLinkAlt,
  faCode,
  faDatabase,
  faServer,
  faLaptopCode,
  faArrowRight,
  faStar,
} from "@fortawesome/free-solid-svg-icons";

const projects = [
  {
    title: "E-Commerce Platform",
    description:
      "A full-stack e-commerce platform with a dedicated admin panel for managing products, categories, orders, and users. Customers can browse products, add items to their cart, place orders, and manage their accounts, while administrators can efficiently control the entire store through a secure dashboard.",
    image:
      "images/Ecommerce.png",
    tech: ["React", "Node.js", "MongoDB", "Tailwind CSS"],
    liveLink: "https://shimulshopping.web.app/",
    githubLink: "https://github.com/Shimul-DIU/Ecommerce_website",
    featured: true,
  },
  {
    title: "Khwaja Mozammel Hoque (R) Foundation",
    description:
      "A full-stack foundation website designed to showcase social activities, initiatives, and donation programs while providing users with an accessible platform to learn about and engage with the foundation.",
    image:
      "https://res.cloudinary.com/jfz1pb3v/image/upload/v1788524364/Screenshot_2026-09-04_181338.png",
    tech: ["Next.js", "TypeScript", "Postgresql", "Firebase"],
    liveLink: "https://foundation-a7d60.web.app/",
    githubLink: "https://github.com/Shimul-DIU/Khwaja-Mozammel-Hoque-Foundation",
    featured: false,
  },
  {
    title: "Doctor Tracker",
    description:
      "A doctor tracking and management application that helps users find doctors, view their details and schedules, and keep track of appointments in one organized place.",
    image: "/images/doctor-tracker.png", // নিজের ইমেজ লিংক/পাথ বসান
    tech: ["Next.js", "Node.js", "MongoDB", "TypeScript","Tailwind CSS"], // আপনার আসল টেক স্ট্যাক দিন
    liveLink: "https://doctor-tracker-web-cxf4-sable.vercel.app", // লাইভ লিংক দিন
    githubLink: "https://github.com/Shimul-DIU/doctor-tracker-web", // রিপো লিংক দিন
    featured: false,
  },
];
const ProjectsComponent = () => {
  const [width,setWidth]=useState(window.innerWidth);
  const handleResize=()=>{
    setWidth(window.innerWidth)
  }
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 },
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  // Tech icon mapping
  const getTechIcon = (tech) => {
    const techMap = {
      "React": faReact,
      "Node.js": faNodeJs,
      "MongoDB": faDatabase,
      "Tailwind CSS": faLaptopCode,
      "Next.js": faReact,
      "Firebase": faDatabase,
      "Material UI": faLaptopCode,
      "Express.js": faServer,
      "MySQL": faDatabase,
    };
    return techMap[tech] || faCode;
  };

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="max-w-7xl mx-auto px-3  sm:px-6 lg:px-8 overflow-hidden relative"
    >
      {/* Decorative gradient background */}
      <div className="absolute bg-[#0F1117]  inset-0 "></div>

      {/* Decorative circles
      <div className="absolute top-20 right-10 w-72 h-72"></div>
      <div className="absolute bottom-20 left-10 w-96 h-96"></div> */}

      <div className="max-w-5xl mx-auto bg-[#171923] p-4 md:p-6 lg-p-8 rounded-2xl  w-full text-center relative z-10">


        <h2
          className={`font-['Playfair_Display'] text-3xl md:text-4xl lg:text-5xl font-bold text-[#F5EFE6] mb-3 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-6"
            }`}
        >
          Featured <span className="text-[#C9A876]">Projects</span>
        </h2>

        <p
          className={`text-[#F5EFE6]/60 italic mb-8 max-w-2xl mx-auto font-['Inter'] transition-all duration-700 delay-100 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-6"
            }`}
        >
          Each project represents a unique challenge solved with creativity and technical expertise.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className={`group bg-[#171923] backdrop-blur-sm rounded-2xl overflow-hidden border border-[#C9A876]/20 hover:border-[#C9A876]/60 hover:shadow-2xl hover:shadow-[#C9A876]/10 hover:-translate-y-2 transition-all duration-500 ease-out ${isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
                }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              {/* Featured Badge */}
              {project.featured && (
                <div className="absolute top-4 right-4 z-10 bg-[#C9A876] text-[#140D0A] px-3 py-1 rounded-full text-xs font-semibold font-['Inter'] flex items-center gap-1">
                  <FontAwesomeIcon icon={faStar} className="text-[10px]" />
                  Featured
                </div>
              )}

              {/* Image */}
              <div className="relative overflow-hidden h-56">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#140D0A] via-transparent to-transparent opacity-60"></div>
              </div>

              {/* Content */}
              <div className="p-6 text-left">
                <h3 className="text-xl font-semibold text-[#F5EFE6] mb-2 font-['Inter'] group-hover:text-[#C9A876] transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-[#F5EFE6]/60 text-sm mb-4 leading-relaxed font-['Inter'] line-clamp-3">
                  {project.description}
                </p>

                {/* Tech stack with icons */}
                <div className="flex flex-wrap gap-2 mb-5">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="flex items-center gap-1.5 bg-[#C9A876]/10 text-[#C9A876] text-xs font-medium px-3 py-1.5 rounded-full border border-[#C9A876]/20 hover:bg-[#C9A876] hover:text-[#140D0A] transition-all duration-300 cursor-default"
                    >
                      <FontAwesomeIcon
                        icon={getTechIcon(tech)}
                        className="text-[10px]"
                      />
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Links */}

                <div className="flex gap-1 sm:gap-3">
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm font-medium bg-[#C9A876] text-[#140D0A] px-3 py-2 rounded-full hover:bg-[#E8D9BE] transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-[#C9A876]/20"
                  >
                    <FontAwesomeIcon icon={faExternalLinkAlt} className="text-xs" />
                    {width < 370 ? "Live" : "Live Demo"}
                  </a>

                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm font-medium border border-[#C9A876]/30 text-[#F5EFE6] px-3 py-2 rounded-full hover:bg-[#2A1D16] hover:border-[#C9A876] hover:scale-105 transition-all duration-300"
                  >
                    <FontAwesomeIcon icon={faGithub} className="text-sm" />
                    Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Projects Button */}
        <div
          className={`mt-12 transition-all duration-700 delay-300 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
        >
          <a
            href="/projects"
            className="inline-flex items-center gap-2 rounded-full border border-[#C9A876]/40 px-8 py-3.5 text-sm font-medium text-[#F5EFE6] transition-all duration-300 hover:bg-[#2A1D16] hover:border-[#C9A876] hover:scale-105 font-['Inter'] group"
          >
            View All Projects
            <FontAwesomeIcon
              icon={faArrowRight}
              className="text-xs group-hover:translate-x-1 transition-transform duration-300"
            />
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProjectsComponent;