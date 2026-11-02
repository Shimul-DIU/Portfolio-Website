import React, { useEffect, useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faDownload,
  faCode,
  faEye,
  faXmark,
  faArrowUpRightFromSquare,
} from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faLinkedin,
  faFacebook,
} from "@fortawesome/free-brands-svg-icons";
import Typed from "typed.js";

// CV-র পাথ একটাই জায়গায় রাখলাম। public/files/ এর আসল ফাইলনামের সাথে মিলিয়ে নিন
const CV_URL = "/files/Cv_of_Md.Shimul mia.pdf";
const CV_FILENAME = "Cv_of_Md.Shimul mia.pdf";

const Banner = () => {
  const typedElement = useRef(null);
  const [width, setWidth] = useState(window.innerWidth);
  const [cvOpen, setCvOpen] = useState(false);
  const [cvExists, setCvExists] = useState(true);

  useEffect(() => {
    setWidth(window.innerWidth);
  }, [window.innerWidth]);

  useEffect(() => {
    if (!typedElement.current) return;

    const typed = new Typed(typedElement.current, {
      strings: [
        "Frontend Developer",
        "React Developer",
        "Problem Solver",
        "MERN Enthusiast",
        "UI/UX Designer",
      ],
      typeSpeed: 50,
      backSpeed: 30,
      backDelay: 1500,
      startDelay: 500,
      loop: true,
      cursorChar: "|",
      smartBackspace: true,
      shuffle: false,
      fadeOut: false,
      fadeOutDelay: 100,
      loopCount: Infinity,
      showCursor: true,
      autoInsertCss: true,
    });

    return () => {
      typed.destroy();
    };
  }, []);

  // মডাল খোলার আগে ফাইল আসলেই PDF কি না চেক করে
  const openCv = async () => {
    try {
      const res = await fetch(CV_URL, { method: "HEAD" });
      const type = res.headers.get("content-type") || "";
      setCvExists(res.ok && type.includes("pdf"));
    } catch {
      setCvExists(false);
    }
    setCvOpen(true);
  };

  // Esc চাপলে মডাল বন্ধ + মডাল খোলা থাকলে পেছনের স্ক্রল বন্ধ
  useEffect(() => {
    if (!cvOpen) return;

    const onKeyDown = (e) => {
      if (e.key === "Escape") setCvOpen(false);
    };
    document.addEventListener("keydown", onKeyDown);

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = previousOverflow;
    };
  }, [cvOpen]);

  const socialLinks = [
    { icon: faGithub, url: "https://github.com/Shimul-DIU", label: "GitHub" },
    {
      icon: faLinkedin,
      url: "https://www.linkedin.com/in/md-shimul-71a4b3319/",
      label: "LinkedIn",
    },
    {
      icon: faFacebook,
      url: "https://www.facebook.com/shimul.mia.79462/",
      label: "Facebook",
    },
    {
      icon: faCode,
      url: "https://leetcode.com/u/MdShimul/",
      label: "LeetCode",
    },
  ];

  return (
    <div className="w-full">
      <section
        className="bg-[#0F1117] text-white min-h-[calc(100vh-64px)] flex flex-col justify-center py-4 px-3 sm:px-6 lg:px-8 max-w-7xl mx-auto"
      >
        <div className="w-full max-w-5xl mx-auto bg-[#171923] rounded-2xl overflow-hidden border border-[#262936] shadow-2xl">
          {/* Cover Photo Container */}
          <div className="relative w-full aspect-[16/9] sm:aspect-[2.2/1] md:aspect-[2.8/1] lg:aspect-[3.2/1] bg-[#222629]">
            <img
              src="/images/cover1.jpg"
              alt="Cover Background"
              className="w-full h-full object-cover object-center md:object-contain"
            />

            {/* Mobile Profile Image Position */}
            <div className="sm:hidden absolute left-1/2 -translate-x-1/2 -bottom-14 z-30 w-28 h-28 rounded-full overflow-hidden shadow-2xl ring-2 ring-[#979ec4] bg-[#0F1117]">
              <img
                src="/images/ProfileImg.png"
                alt="Md. Shimul Profile"
                className="w-full h-full object-contain"
              />
            </div>
          </div>

          <div className="relative px-4 sm:px-6 lg:px-8 bg-[#171923]">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pt-16 sm:pt-0 sm:-mt-16 lg:-mt-[72px] pb-4">
              <div className="flex flex-col items-center justify-center sm:flex-row sm:items-center gap-0 sm:gap-4 text-center sm:text-left z-20">
                <div className="hidden sm:block sm:w-36 sm:h-36 lg:w-[152px] lg:h-[152px] rounded-full overflow-hidden bg-[#0F1117] shadow-2xl shrink-0 ring-2 ring-[#C9A876]">
                  <img
                    src="/images/ProfileImg.png"
                    alt="Md. Shimul Profile"
                    className="w-full h-full object-contain"
                  />
                </div>

                <div className=" ">
                  <h1 className="font-['Playfair_Display'] text-2xl sm:text-3xl lg:text-[34px] font-bold text-white leading-tight">
                    Md. Shimul
                  </h1>
                  <h2 className="font-['Inter'] text-base sm:text-md md:text-lg font-medium text-white/70 mt-0.5">
                    I&apos;m a{" "}
                    <span
                      ref={typedElement}
                      className="text-[#C9A876] text-base sm:text-md md:text-lg italic font-semibold"
                    />
                  </h2>
                </div>
              </div>

              <div className="flex flex-col items-center sm:items-end gap-2.5 z-20 w-full sm:w-auto">
                <div className="flex gap-2 sm:gap-3 bg-[#171923] px-3 sm:px-4 py-1.5 sm:py-2 rounded-xl border border-[#C9A876]/30 flex-shrink-0">
                  <div className="text-center">
                    <p className="text-base font-bold text-[#C9A876] font-['Inter']">
                      2+
                    </p>
                    <p className="text-[7px] sm:text-[9px] text-white/80 font-['Inter'] uppercase tracking-wider">
                      Years Exp.
                    </p>
                  </div>
                  <div className="w-px h-5 sm:h-7 bg-[#0F1117]/30 my-auto"></div>
                  <div className="text-center">
                    <p className="sm:text-base font-bold text-[#C9A876] font-['Inter']">
                      10+
                    </p>
                    <p className="text-[7px] sm:text-[9px] text-white/80 font-['Inter'] uppercase tracking-wider">
                      Projects
                    </p>
                  </div>
                </div>

                <div className="flex flex-row flex-nowrap items-center justify-center gap-1.5 sm:gap-2 flex-shrink-0">
                  {/* CV বাটন: এখন আগে প্রিভিউ খুলবে */}
                  <button
                    type="button"
                    onClick={openCv}
                    className="flex items-center justify-center gap-1 rounded-lg border border-[#C9A876]/40 bg-[#171923] px-2.5 sm:px-3 py-1.5 sm:py-2 text-[10px] sm:text-xs text-[#F5EFE6] transition-all duration-300 hover:bg-[#0F1117] font-['Inter'] whitespace-nowrap"
                  >
                    <FontAwesomeIcon
                      icon={faEye}
                      className="text-[15px] sm:text-md md:text-lg md:p-1"
                    />
                    <span className="hidden xs:inline">View CV</span>
                    <span className="xs:hidden">CV</span>
                  </button>

                  <div className="flex gap-1 sm:gap-1.5">
                    {socialLinks.map((social, index) => (
                      <a
                        key={index}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-7 h-7 sm:w-8 sm:h-8 md:w-9 md:h-9 lg:h-12 lg:w-12 rounded-full flex justify-center items-center border border-[#C9A876]/30 bg-[#171923] hover:bg-[#0F1117] text-white hover:text-[#F5EFE6] transition-all duration-300 hover:scale-110 shadow-sm"
                        title={social.label}
                      >
                        <FontAwesomeIcon
                          icon={social.icon}
                          className="text-[15px] sm:text-md md:text-lg"
                        />
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <p className="hidden sm:block italic  text-left mt-2 max-w-7xl text-white/60 font-['Inter'] leading-relaxed">
              Building fast, clean full stack applications with React, Node.js and
              MongoDB. Available for entry-level developer roles worldwide.
            </p>

            <p className="sm:hidden text-center text-xs text-white/60 font-['Inter'] leading-relaxed pb-4 -mt-2">
              Building fast, clean full stack applications with React, Node.js and
              MongoDB. Available for entry-level developer roles worldwide.
            </p>

            <div className="border-t border-[#C9A876]/15 pt-3 mt-3">
              <p className="text-sm md:text-md text-white/50 uppercase tracking-wider font-['Inter'] font-semibold mb-2.5">
                Achievements
              </p>
              <div className="flex pb-3 md:pb-4 max-w-40 justify-between items-center gap-2.5">
                <a href="#" className="flex-shrink-0">
                  <img
                    src="/images/lg2550.png"
                    alt="50 days problem solve batch"
                    className="w-10 h-auto sm:w-12 object-contain"
                  />
                </a>
                <a href="#" className="flex-shrink-0">
                  <img
                    src="/images/lg25100.png"
                    alt="100 days problem solve batch"
                    className="w-10 h-auto sm:w-12 object-contain"
                  />
                </a>
                <a href="#" className="flex-shrink-0">
                  <img
                    src="/images/pull-shark.png"
                    alt="Pull shark badge"
                    className="w-10 h-auto sm:w-12 object-contain"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CV Preview Modal */}
      {cvOpen && (
        <div
          className="fixed inset-0 z-[70] flex items-center justify-center bg-black/70 backdrop-blur-sm p-3 sm:p-6"
          onClick={() => setCvOpen(false)}
          role="dialog"
          aria-modal="true"
          aria-label="CV preview"
        >
          <div
            className="w-full max-w-4xl h-[90vh] flex flex-col rounded-2xl border border-[#C9A876]/30 bg-[#171923] shadow-2xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal header */}
            <div className="flex items-center justify-between gap-3 px-4 py-3 border-b border-[#262936]">
              <h3 className="font-['Playfair_Display'] text-lg sm:text-xl font-bold text-[#F5EFE6]">
                Curriculum Vitae
              </h3>

              <div className="flex items-center gap-2">
                {cvExists && (
                  <a
                    href={CV_URL}
                    download={CV_FILENAME}
                    className="inline-flex items-center gap-2 rounded-full bg-[#C9A876] px-4 py-2 text-xs sm:text-sm font-semibold text-[#140D0A] font-['Inter'] hover:bg-[#E8D9BE] active:scale-95 transition"
                  >
                    Download
                    <FontAwesomeIcon icon={faDownload} className="text-xs" />
                  </a>
                )}
                <button
                  type="button"
                  onClick={() => setCvOpen(false)}
                  className="flex items-center justify-center w-9 h-9 rounded-full border border-[#C9A876]/30 text-[#F5EFE6] hover:bg-[#C9A876] hover:text-[#140D0A] active:scale-90 transition"
                  aria-label="Close CV preview"
                >
                  <FontAwesomeIcon icon={faXmark} />
                </button>
              </div>
            </div>

            {/* PDF preview */}
            <div className="flex-1 bg-[#0F1117]">
              {cvExists ? (
                <iframe
                  src={`${CV_URL}#view=FitH`}
                  title="CV preview"
                  className="w-full h-full"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center text-center px-6 text-[#F5EFE6]/70 font-['Inter'] text-sm">
                  CV file not found. Please check the file name in public/files.
                </div>
              )}
            </div>

            {/* মোবাইলে অনেক ব্রাউজার ইনলাইন PDF দেখায় না, তাই ব্যাকআপ লিংক */}
            {cvExists && (
              <div className="px-4 py-2 border-t border-[#262936] text-center">
                <a
                  href={CV_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-xs text-[#C9A876] font-['Inter'] hover:underline"
                >
                  Preview not showing? Open in new tab
                  <FontAwesomeIcon
                    icon={faArrowUpRightFromSquare}
                    className="text-[10px]"
                  />
                </a>
              </div>
            )}
          </div>
        </div>
      )}

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,600;0,700;1,600&family=Inter:wght@400;500;600;700&display=swap');
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(15px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in-up { animation: fadeInUp 0.8s ease-out forwards; }
        .animation-delay-200 { animation-delay: 0.2s; }
        @media (min-width: 480px) {
          .xs\\:inline { display: inline; }
          .xs\\:hidden { display: none; }
        }
      `}</style>
    </div>
  );
};

export default Banner;