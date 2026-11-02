import { useEffect, useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRocket } from "@fortawesome/free-solid-svg-icons";

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
      { threshold: 0.15 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="max-w-7xl  mx-auto min-h-fit bg-[#0F1117]  flex items-center py-2 px-3 sm:px-6 lg:px-8  overflow-hidden"
    >
      <div
        className={`max-w-5xl mx-auto w-full border  border-[#262936] bg-[#171923] p-3 sm:p-5 lg:px-8 rounded-2xl transition-all duration-1000 ease-out delay-200 flex flex-col md:flex-row gap-4 md:gap-6 items-stretch ${isVisible
          ? "opacity-100 translate-x-0"
          : "opacity-0 translate-x-10 lg:translate-x-16"
          }`}
      >
        {/* Left side image - hidden on small devices, visible from md up. Stretches to match right side height */}
        <div className="hidden md:block md:w-2/5 flex-shrink-0">
          <img
            src="./images/about_me.png"
            alt="Md. Shimul"
            className="w-full h-full object-cover rounded-xl"
          />
        </div>

        <div className="w-full md:w-3/5">
          {/* Header Title */}
          <div className="mb-2 sm:mb-4">
            <span className="text-[#C9A876] tracking-[3px] sm:tracking-[5px] uppercase text-[10px] sm:text-xs font-semibold font-['Inter'] block mb-1">
              About Me
            </span>
            <h2 className="font-['Playfair_Display'] text-2xl sm:text-4xl lg:text-5xl font-bold text-[#F5EFE6] leading-tight">
              Md. Shimul
            </h2>
            <h3 className="text-base sm:text-xl lg:text-2xl text-[#C9A876] font-['Inter'] mt-1 font-medium">
              Full Stack Developer
            </h3>
          </div>

          {/* Bio Description */}
          <p className="text-[#F5EFE6]/70 italic leading-relaxed mb-2 sm:mb-5 font-['Inter'] text-xs md:text-base">
            Building fast, clean full stack applications with React, Node.js
            and MongoDB. Available for entry-level developer roles worldwide.
            Passionate about creating seamless digital experiences that solve
            real-world problems.
          </p>

          {/* Personal Info Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-4 mb-2 sm:mb-5">
            <div className="border-b border-[#C9A876]/20 pb-1 sm:pb-2">
              <p className="text-[#C9A876] text-[10px] sm:text-xs font-['Inter'] uppercase tracking-wider mb-0.5">
                Full Name
              </p>
              <p className="text-[#F5EFE6] font-['Inter'] font-medium text-xs sm:text-base">
                Md. Shimul
              </p>
            </div>

            <div className="border-b border-[#C9A876]/20 pb-1 sm:pb-2">
              <p className="text-[#C9A876] text-[10px] sm:text-xs font-['Inter'] uppercase tracking-wider mb-0.5">
                Email
              </p>
              <p className="text-[#F5EFE6] font-['Inter'] font-medium text-xs sm:text-base truncate">
                md.shimuldiu@gmail.com
              </p>
            </div>

            <div className="border-b border-[#C9A876]/20 pb-1 sm:pb-2">
              <p className="text-[#C9A876] text-[10px] sm:text-xs font-['Inter'] uppercase tracking-wider mb-0.5">
                Location
              </p>
              <p className="text-[#F5EFE6] font-['Inter'] font-medium text-xs sm:text-base">
                Dhaka, Bangladesh
              </p>
            </div>

            <div className="border-b border-[#C9A876]/20 pb-1 sm:pb-2">
              <p className="text-[#C9A876] text-[10px] sm:text-xs font-['Inter'] uppercase tracking-wider mb-0.5">
                Experience
              </p>
              <p className="text-[#F5EFE6] font-['Inter'] font-medium text-xs sm:text-base">
                4+ Years
              </p>
            </div>

            <div className="border-b border-[#C9A876]/20 pb-1 sm:pb-2">
              <p className="text-[#C9A876] text-[10px] sm:text-xs font-['Inter'] uppercase tracking-wider mb-0.5">
                Phone
              </p>
              <p className="text-[#F5EFE6] font-['Inter'] font-medium text-xs sm:text-base">
                +880 1234 567890
              </p>
            </div>

            <div className="border-b border-[#C9A876]/20 pb-1 sm:pb-2">
              <p className="text-[#C9A876] text-[10px] sm:text-xs font-['Inter'] uppercase tracking-wider mb-0.5">
                Availability
              </p>
              <p className="text-[#F5EFE6] font-['Inter'] font-medium text-xs sm:text-base">
                Open to Work
              </p>
            </div>
          </div>

          {/* Statistics Counter */}
          <div className="grid grid-cols-3 gap-2 sm:gap-4 mb-3 sm:mb-5 pt-1">
            <div>
              <p className="text-xl sm:text-3xl  font-bold text-[#C9A876] font-['Inter']">
                10+
              </p>
              <p className="text-[9px] sm:text-xs text-[#F5EFE6]/60 font-['Inter'] uppercase tracking-wider mt-0.5">
                Projects
              </p>
            </div>

            <div>
              <p className="text-xl sm:text-3xl  font-bold text-[#C9A876] font-['Inter']">
                4+
              </p>
              <p className="text-[9px] sm:text-xs text-[#F5EFE6]/60 font-['Inter'] uppercase tracking-wider mt-0.5">
                Experience
              </p>
            </div>

            <div>
              <p className="text-xl sm:text-3xl  font-bold text-[#C9A876] font-['Inter']">
                20+
              </p>
              <p className="text-[9px] sm:text-xs text-[#F5EFE6]/60 font-['Inter'] uppercase tracking-wider mt-0.5">
                Technologies
              </p>
            </div>
          </div>

          {/* Action Button */}
          <div>
            <a
              href="/contact"
              className="inline-flex items-center justify-center gap-2.5 rounded-full bg-[#C9A876] px-4 py-2.5 sm:px-8 sm:py-3 text-xs sm:text-sm font-semibold text-[#140D0A] transition-all duration-300 hover:bg-[#E8D9BE] hover:-translate-y-0.5 hover:shadow-xl shadow-md font-['Inter'] w-full sm:w-auto"
            >
              <span>Hire Me</span>
              <FontAwesomeIcon icon={faRocket} className="text-xs" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
