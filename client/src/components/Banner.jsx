import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faDownload } from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faLinkedin,
  faFacebook,
} from "@fortawesome/free-brands-svg-icons";
import { TypeAnimation } from "react-type-animation";

import profileImg from "../../public/images/Shimul.png";
import backgroundImg from "../../public/images/bg.webp";
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      <div
        className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${backgroundImg})`,
        }}
      />

      <div className="absolute inset-0 w-full h-full bg-black/60 backdrop-blur-lg" />

      <div className="absolute -top-44 left-0 w-[450px] h-[450px] rounded-full bg-[#CF15D4]/20 blur-[150px] z-10" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full bg-[#7B14F9]/20 blur-[180px] z-10" />

      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full sm:py-3">
        <div className="grid lg:grid-cols-2 gap-6 md:gap-8 lg:gap-12 xl:gap-16 items-center">
          <div className="order-2 lg:order-1 text-center lg:text-left">
            <span className="inline-block text-[#CF15D4] tracking-[4px] uppercase text-xs sm:text-sm font-semibold mb-1">
              👋 Hello I'm
            </span>

            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-extrabold leading-[1.1]">
              <span className="bg-gradient-to-r from-[#CF15D4] via-[#E879F9] to-[#7B14F9] bg-clip-text text-transparent">
                Shimul
              </span>
            </h1>

            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold text-white mt-1 md:mt-2">
              I'm a{" "}
              <span className="text-[#CF15D4]">
                <TypeAnimation
                  sequence={[
                    "Frontend Developer",
                    1500,
                    "React Developer",
                    1500,
                    "UI/UX Enthusiast",
                    1500,
                    "Problem Solver",
                    1500,
                  ]}
                  wrapper="span"
                  speed={50}
                  repeat={Infinity}
                  cursor={true}
                  className="inline-block"
                />
              </span>
            </h2>

            <p className="mt-3 md:mt-4 max-w-xl mx-auto lg:mx-0 text-sm sm:text-base md:text-lg leading-relaxed text-white/80">
              Passionate Frontend Developer who loves building beautiful, fast
              and user-friendly web applications using React, Tailwind CSS and
              modern JavaScript.
            </p>

            <div className="flex flex-wrap gap-3 sm:gap-4 mt-5 md:mt-6 justify-center lg:justify-start">
              <Link
                to="/projects"
                className="group flex items-center gap-2 md:gap-3 rounded-full bg-gradient-to-r from-[#CF15D4] to-[#7B14F9] px-6 sm:px-8 py-3 sm:py-3.5 text-sm sm:text-base font-semibold text-white shadow-xl transition duration-300 hover:scale-105 hover:shadow-2xl"
              >
                View Projects
                <FontAwesomeIcon
                  icon={faArrowRight}
                  className="group-hover:translate-x-1 transition text-sm sm:text-base"
                />
              </Link>

              <a
                href="/files/Cv_of_Md.Shimul.pdf"
                download={"Cv_of_Md. Shimul.pdf"}
                className="flex items-center gap-2 md:gap-3 rounded-full border border-white/40 bg-white/10 backdrop-blur-md px-6 sm:px-8 py-3 sm:py-3.5 text-sm sm:text-base text-white transition duration-300 hover:bg-white/20 hover:border-white/60"
              >
                <FontAwesomeIcon
                  icon={faDownload}
                  className="text-sm sm:text-base"
                />
                Download CV
              </a>
            </div>

            <div className="flex gap-3 md:gap-4 mt-6 md:mt-8 justify-center lg:justify-start">
              {[faGithub, faLinkedin, faFacebook].map((icon, index) => (
                <a
                  key={index}
                  href="#"
                  className="w-10 h-10 sm:w-11 sm:h-11 md:w-12 md:h-12 rounded-full flex items-center justify-center bg-white/10 border border-white/30 text-white transition duration-300 hover:scale-110 hover:bg-gradient-to-r hover:from-[#CF15D4] hover:to-[#7B14F9] hover:text-white hover:border-transparent"
                >
                  <FontAwesomeIcon
                    icon={icon}
                    className="text-sm sm:text-base"
                  />
                </a>
              ))}
            </div>
          </div>

          <div className="order-1 lg:order-2 min-h-full  mt-0 relative flex justify-center">
            <div className="relative w-[220px] h-[220px] sm:w-[250px] sm:h-[250px] md:w-[300px] md:h-[300px] lg:w-[340px] lg:h-[340px] xl:w-[380px] xl:h-[380px]">
              <div className="relative rounded-full w-full h-full overflow-hidden border-4 border-white shadow-2xl transition-all duration-500 hover:shadow-white">
                <div className="absolute inset-0 rounded-full p-[3px] sm:p-[4px] md:p-[5px] lg:p-[6px] bg-gradient-to-r from-[#CF15D4] via-[#E879F9] to-[#7B14F9]">
                  <div className="w-full h-full rounded-full bg-black/20 backdrop-blur-[2px] overflow-hidden flex  justify-center">
                    <img
                      src={profileImg}
                      alt="Md Shimul"
                      className="w-full h-full object-cover object-center rounded-full transition-transform duration-500 hover:scale-105"
                    />
                  </div>
                </div>

                <div className="absolute inset-0 rounded-full opacity-0 hover:opacity-100 transition-opacity duration-500"></div>
              </div>

              <div className="absolute -bottom-2 -left-2 md:-top-2 md:-right-2 md:bottom-auto md:left-auto lg:-top-1 lg:-right-3 bg-gradient-to-br from-[#CF15D4]/90 to-[#7B14F9]/90 backdrop-blur-xl border border-white/30 rounded-2xl px-2.5 sm:px-3 md:px-4 lg:px-5 py-1.5 sm:py-2 animate-float shadow-2xl shadow-[#CF15D4]/30 transition-all duration-300 z-10">
                <h2 className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold text-white">
                  3+
                </h2>
                <p className="text-white/80 text-[8px] sm:text-[10px] md:text-xs lg:text-sm font-medium whitespace-nowrap">
                  Years Exp.
                </p>
              </div>

              <div className="absolute -top-2 -right-2 md:-bottom-2 md:-left-2 md:top-auto md:right-auto lg:-bottom-1 lg:-left-3 bg-gradient-to-br from-[#7B14F9]/90 to-[#CF15D4]/90 backdrop-blur-xl border border-white/30 rounded-2xl px-2.5 sm:px-3 md:px-4 lg:px-5 py-1.5 sm:py-2 animate-float-delay shadow-2xl shadow-[#7B14F9]/30 transition-all duration-300 z-10">
                <h2 className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold text-white">
                  10+
                </h2>
                <p className="text-white/80 text-[8px] sm:text-[10px] md:text-xs lg:text-sm font-medium whitespace-nowrap">
                  Projects
                </p>
              </div>

              {/* <div className="absolute -top-10 -left-10 w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-pink-500/30 blur-3xl"></div>
              <div className="absolute -bottom-10 -right-10 w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-cyan-400/30 blur-3xl"></div> */}
            </div>
          </div>
        </div>
      </div>

      <div className="hidden lg:flex absolute bottom-8 left-1/2 -translate-x-1/2 flex-col items-center z-20">
        <span className="text-white/60 tracking-[5px] text-[10px] mb-2 font-medium">
          SCROLL
        </span>
        <div className="w-5 h-8 rounded-full border border-white/30 flex justify-center pt-2">
          <div className="w-1.5 h-2.5 rounded-full bg-gradient-to-b from-[#CF15D4] to-[#7B14F9] animate-bounce"></div>
        </div>
      </div>

      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-12px); }
        }
        .animate-float { animation: float 4s ease-in-out infinite; }
        .animate-float-delay { animation: float 4s ease-in-out infinite; animation-delay: 1.5s; }

        @keyframes bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-8px); }
        }
        .animate-bounce { animation: bounce 1.5s ease-in-out infinite; }
      `}</style>
    </section>
  );
};

export default Banner;
