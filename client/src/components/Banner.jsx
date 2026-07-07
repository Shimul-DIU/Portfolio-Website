import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faDownload } from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faLinkedin,
  faFacebook,
} from "@fortawesome/free-brands-svg-icons";
import profileImg from "../assets/images/profile.png";

const roles = ["Web Developer", "UI/UX Enthusiast", "Problem Solver"];

const Banner = () => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentRole = roles[roleIndex];
    const typingSpeed = isDeleting ? 40 : 90;

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (displayText.length < currentRole.length) {
          setDisplayText(currentRole.slice(0, displayText.length + 1));
        } else {
          setTimeout(() => setIsDeleting(true), 1200);
        }
      } else {
        if (displayText.length > 0) {
          setDisplayText(currentRole.slice(0, displayText.length - 1));
        } else {
          setIsDeleting(false);
          setRoleIndex((prev) => (prev + 1) % roles.length);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, roleIndex]);

  return (

    <section className="relative overflow-hidden flex items-start  ">
      <div className="relative max-w-7xl mx-auto  sm:px-6 lg:px-8 w-full">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="text-center md:text-left order-2 md:order-1">
            <p className="inline-block text-sm font-medium tracking-widest uppercase text-[#CF15D4] mb-3">
              👋 Hello, I&apos;m
            </p>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-4">
              Md.{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#CF15D4] to-[#7B14F9]">
                Shimul
              </span>
            </h1>

            <h2 className="text-xl sm:text-2xl font-semibold text-white/80 mb-6 h-8">
              I&apos;m a{" "}
              <span className="text-[#E879F9]">
                {displayText}
                <span className="inline-block w-[2px] h-6 bg-[#E879F9] ml-1 align-middle animate-pulse" />
              </span>
            </h2>

            <p className="text-black text-base sm:text-lg mb-8 max-w-lg mx-auto md:mx-0">
              I build clean, responsive, and user-friendly web experiences —
              turning ideas into interactive products that people enjoy using.
            </p>

            <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 mb-8">
              <button className="group relative overflow-hidden inline-flex items-center gap-2 bg-gradient-to-r from-[#CF15D4] to-[#7B14F9] text-white px-6 py-3 rounded-full font-medium shadow-lg hover:shadow-[#CF15D4]/40 hover:scale-105 active:scale-95 transition-all duration-200">
                View My Work
                <FontAwesomeIcon
                  icon={faArrowRight}
                  className="transition-transform duration-200 group-hover:translate-x-1"
                />
              </button>

              <button className="inline-flex items-center gap-2 text-white px-6 py-3 rounded-full font-medium bg-gradient-to-r from-[#CF15D4] to-[#7B14F9] shadow-lg hover:shadow-[#CF15D4]/40 hover:scale-105 active:scale-95 transition-all duration-200 border-0">
                <FontAwesomeIcon icon={faDownload} />
                Download CV
              </button>
            </div>

            <div className="flex items-center justify-center md:justify-start gap-4">
              {[faGithub, faLinkedin, faFacebook].map((icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="flex items-center justify-center w-10 h-10 rounded-full bg-white/10 text-white hover:bg-gradient-to-r hover:from-[#CF15D4] hover:to-[#7B14F9] hover:scale-110 transition-all duration-200"
                >
                  <FontAwesomeIcon icon={icon} />
                </a>
              ))}
            </div>
          </div>

          <div className="relative w-full max-w-70 sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl mx-auto h-70 sm:h-90 md:h-105 lg:h-130 xl:h-150 bg-[#B0EACD] rounded-bl-full flex items-center justify-center order-1 md:order-2">
            <div className="relative z-10 w-40 h-40 sm:w-56 sm:h-56 md:w-64 md:h-64 lg:w-72 lg:h-72 xl:w-80 xl:h-80">
              <div className="absolute -inset-2 rounded-full border-4 border-emerald-500" />

              <img
                src={profileImg}
                alt="Md. Shimul"
                className="relative z-10 w-full h-full rounded-full object-cover border-4 border-white"
              />

              <div className="absolute -top-4 -right-4 sm:-top-6 sm:-right-6 z-20 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl px-3 py-1.5 sm: sm:py-2 shadow-lg animate-very-slow-bounce">
                <p className="text-white font-bold text-base sm:text-lg leading-none">
                  3+
                </p>
                <p className="text-white/60 text-[10px] sm:text-xs">
                  Years Exp.
                </p>
              </div>

              <div className="absolute -bottom-2 -left-4 sm:-left-8 z-20 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl px-3 py-1.5 sm: sm:py-2 shadow-lg animate-very-slow-bounce-delayed">
                <p className="text-white font-bold text-base sm:text-lg leading-none">
                  20+
                </p>
                <p className="text-white/60 text-[10px] sm:text-xs">Projects</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="hidden md:flex absolute bottom-12 left-1/2 -translate-x-1/2 flex-col items-center gap-2 animate-very-slow-bounce">
        <span className="text-white/50 text-xs tracking-widest uppercase">
          SCROLL
        </span>
        <div className="w-5 h-8 rounded-full border-2 border-white/30 flex items-start justify-center p-1">
          <div className="w-1 h-2 bg-white/60 rounded-full animate-pulse" />
        </div>
      </div>

      <style>{`
        @keyframes very-slow-bounce {
          0%, 100% {
            transform: translateY(0);
            animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
          }
          50% {
            transform: translateY(-10px);
            animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
          }
        }
        .animate-very-slow-bounce {
          animation: very-slow-bounce 3.5s infinite;
        }
        .animate-very-slow-bounce-delayed {
          animation: very-slow-bounce 3.5s infinite 0.8s;
        }
      `}</style>
    </section>
  );
};

export default Banner;
