import { useEffect, useRef, useState } from "react";
import shimul from "../../public/images/Shimul.png";

const About = () => {
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
      { threshold: 0.2 },
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="  py-20 px-6 overflow-hidden"
    >
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
        {/* Image */}
        <div
          className={`flex-1 flex rounded-2xl justify-center shadow-2xl shadow-blue-700  transition-all duration-1000 ease-out ${
            isVisible
              ? "opacity-100 translate-x-0"
              : "opacity-0 -translate-x-10"
          }`}
        >
          <img
            src={shimul}
            alt="Shimul"
            className="w-72 h-72 md:w-80   md:h-80 object-contain rounded-2xl shadow-xl hover:scale-105 hover:shadow-2xl transition-all duration-500"
          />
        </div>

        {/* Content */}
        <div
          className={`flex-[2] transition-all duration-1000 ease-out delay-200 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">
            About Me
          </h2>
          <h3 className="text-lg md:text-xl text-blue-600 font-medium mb-4">
            Frontend Developer
          </h3>
          <p className="text-gray-600 leading-relaxed mb-6">
            I'm a professional web developer with 3+ years of experience
            building modern, responsive websites. I'm skilled in React,
            JavaScript, and UI/UX design. My goal is to create beautiful, fast,
            and user-friendly digital experiences.
          </p>

          <div className="space-y-1 mb-6 text-gray-700 text-sm md:text-base">
            <p>
              <span className="font-semibold">Name:</span> Md.Shimul
            </p>
            <p>
              <span className="font-semibold">Email:</span>{" "}
              md.shimuldiu@gmail.com
            </p>
            <p>
              <span className="font-semibold">Location:</span> Dhaka, Bangladesh
            </p>
          </div>

          <a
            href="#contact"
            className="inline-block bg-blue-600 text-white px-8 py-3 rounded-full font-medium
                       hover:bg-blue-700 hover:-translate-y-1 hover:shadow-lg
                       transition-all duration-300"
          >
            Hire Me
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
