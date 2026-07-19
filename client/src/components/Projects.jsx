import { useEffect, useRef, useState } from "react";

const projects = [
  {
    title: "Full Stack Ecommerce website",
    description:
      "A full-stack e-commerce platform with a dedicated admin panel for managing products, categories, orders, and users. Customers can browse products, add items to their cart, place orders, and manage their accounts, while administrators can efficiently control the entire store through a secure dashboard.",
    image: "../../public/images/ecommerce_project.png",
    tech: ["React", "Node Js", "MongoDB", "Tailwind CSS"],
    liveLink: "https://shimulshopping.web.app/",
    githubLink: "https://github.com/Shimul-DIU/Ecommerce_website",
  },
  {
    title: "Project Two",
    description:
      "A short description of what this project does and the problem it solves.",
    image: "/images/project2.png",
    tech: ["Next Js", "Firebase", "Material UI"],
    liveLink: "https://your-live-link.com",
    githubLink: "https://github.com/yourusername/project-two",
  },
  {
    title: "Project Three",
    description:
      "A short description of what this project does and the problem it solves.",
    image: "/images/project3.png",
    tech: ["React", "Express Js", "MySQL"],
    liveLink: "https://your-live-link.com",
    githubLink: "https://github.com/yourusername/project-three",
  },
];

const Projects = () => {
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
      { threshold: 0.1 },
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="projects" ref={sectionRef} className="bg-gray-50 py-20 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <h2
          className={`text-3xl md:text-4xl font-bold text-gray-800 mb-3 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-6"
          }`}
        >
          My Projects
        </h2>
        <p
          className={`text-gray-500 mb-14 max-w-2xl mx-auto transition-all duration-700 delay-100 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-6"
          }`}
        >
          A few things I've built recently.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className={`bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 ease-out border border-gray-100 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              {/* Image */}
              <div className="overflow-hidden h-48">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                />
              </div>

              {/* Content */}
              <div className="p-6 text-left">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Tech stack */}
                <div className="flex flex-wrap gap-2 mb-5">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="bg-blue-50 text-blue-700 text-xs font-medium px-2.5 py-1 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Links - Fixed anchor tags */}
                <div className="flex gap-4">
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-medium bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-blue-700 transition-all duration-300"
                  >
                    Live Demo
                  </a>

                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-medium border border-gray-300 text-gray-700 px-4 py-2 rounded-full hover:bg-gray-100 transition-all duration-300"
                  >
                    GitHub
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
