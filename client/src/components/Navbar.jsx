import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faXmark,
  faMagnifyingGlass,
  faArrowLeft,
  faArrowDown,
  faEye,
  faArrowUpRightFromSquare,
} from "@fortawesome/free-solid-svg-icons";
import { Link, useLocation } from "react-router-dom";

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/projects", label: "Projects" },
  { to: "/skills", label: "Skills" },
  { to: "/blog", label: "Blog" },
  { to: "/contact", label: "Contact Me" },
];

// একটাই জায়গায় রিজিউমির পাথ রাখলাম, যাতে ডেস্কটপ ও মোবাইলে একই ফাইল খোলে
const RESUME_URL = "/files/Resume_Md_Shimul.pdf";
const RESUME_FILENAME = "Resume_Md_Shimul.pdf";

const Navbar = () => {
  const [isopen, setIsOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [resumeOpen, setResumeOpen] = useState(false);
  const location = useLocation();

  const handleLinkClick = () => setIsOpen(false);

  const openResume = () => {
    setIsOpen(false); // মোবাইল মেনু খোলা থাকলে বন্ধ করে দেবে
    setResumeOpen(true);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    console.log("Searching for:", searchQuery);
    setSearchOpen(false);
  };

  // Esc চাপলে মডাল বন্ধ + মডাল খোলা থাকলে পেছনের স্ক্রল বন্ধ
  useEffect(() => {
    if (!resumeOpen) return;

    const onKeyDown = (e) => {
      if (e.key === "Escape") setResumeOpen(false);
    };
    document.addEventListener("keydown", onKeyDown);

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = previousOverflow;
    };
  }, [resumeOpen]);

  const searchRingClasses =
    "ring-1 ring-transparent hover:ring-[#C9A876]/50 focus-within:ring-2 focus-within:ring-[#C9A876] transition-all duration-200";

  return (
    <div className="max-w-7xl mx-auto">
      <nav className="sticky  top-0 z-50 bg-[#171923] border-b border-[#C9A876]/20 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative flex items-center h-16 gap-4 lg:gap-6">
            {/* Logo */}
            <Link to="/" className="flex items-center shrink-0 group">
              <div className="w-10 h-10 rounded-full border-2 border-[#C9A876] flex items-center justify-center text-[#C9A876] font-['Playfair_Display'] font-bold text-lg transition-all duration-300 group-hover:scale-110 group-hover:shadow-glow">
                S
              </div>
            </Link>

            {/* Spacer */}
            <div className="hidden md:block flex-1" />

            {/* Search bar */}
            <form
              onSubmit={handleSearchSubmit}
              className={`hidden md:flex items-center shrink-0 w-[clamp(200px,30vw,360px)] bg-[#C9A876] rounded-full px-4 py-2 transition-all duration-300 ${searchRingClasses}`}
            >
              <FontAwesomeIcon
                icon={faMagnifyingGlass}
                className="text-black text-sm mr-2 shrink-0"
              />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search..."
                className="w-full bg-transparent text-black placeholder-black text-sm outline-none font-['Inter']"
              />
            </form>

            {/* Nav items */}
            <ul className="hidden md:flex items-center gap-1 lg:gap-6 shrink-0">
              {navLinks.map((link) => {
                const isActive = location.pathname === link.to;
                return (
                  <li key={link.to} className="flex items-stretch group">
                    <Link
                      to={link.to}
                      className={`relative flex items-center px-2 font-['Inter'] text-[11px] tracking-[1.5px] uppercase font-medium whitespace-nowrap transition-colors duration-200 ${
                        isActive
                          ? "text-[#C9A876]"
                          : "text-[#F5EFE6]/70 hover:text-[#C9A876]"
                      }`}
                    >
                      {link.label}
                      <span
                        className={`absolute left-2 right-2 -bottom-[1px] h-[2px] rounded-full bg-[#C9A876] origin-left transition-transform duration-300 ${
                          isActive
                            ? "scale-x-100"
                            : "scale-x-0 group-hover:scale-x-100"
                        }`}
                      />
                    </Link>
                  </li>
                );
              })}
            </ul>

            {/* Resume Button + Mobile Icons */}
            <div className="flex items-center gap-3 shrink-0 ml-auto md:ml-0">
              {/* Desktop Resume: এখন প্রিভিউ খুলবে */}
              <button
                type="button"
                onClick={openResume}
                className="hidden md:inline-flex items-center overflow-hidden bg-[#C9A876] text-[#140D0A] px-5 py-2 gap-2 rounded-full font-['Inter'] text-sm font-semibold shadow-lg hover:shadow-xl hover:scale-105 active:scale-95 transition-all duration-200"
              >
                Resume
                <FontAwesomeIcon icon={faEye} className="text-xs" />
              </button>

              {/* Mobile search toggle */}
              <button
                onClick={() => setSearchOpen(true)}
                className="md:hidden text-[#F5EFE6] hover:text-[#C9A876] focus:outline-none p-2 rounded-lg hover:bg-[#2A1D16] transition"
                aria-label="Open search"
              >
                <FontAwesomeIcon icon={faMagnifyingGlass} className="text-xl" />
              </button>

              <button
                onClick={() => setIsOpen(!isopen)}
                className="lg:hidden text-[#F5EFE6] hover:text-[#C9A876] focus:outline-none p-2 rounded-lg hover:bg-[#2A1D16] transition"
                aria-label="Toggle menu"
              >
                <FontAwesomeIcon
                  icon={isopen ? faXmark : faBars}
                  className="text-2xl transition-transform duration-300"
                  style={{
                    transform: isopen ? "rotate(180deg)" : "rotate(0deg)",
                  }}
                />
              </button>
            </div>

            {/* Mobile Search Overlay */}
            <form
              onSubmit={handleSearchSubmit}
              className={`md:hidden absolute inset-0 flex items-center gap-2 px-4 bg-[#171923] z-10 transition-all duration-300 ${
                searchOpen
                  ? "opacity-100 visible"
                  : "opacity-0 invisible pointer-events-none"
              }`}
            >
              <button
                type="button"
                onClick={() => setSearchOpen(false)}
                className="flex items-center justify-center w-9 h-9 shrink-0 rounded-full bg-[#C9A876] text-black hover:bg-[#C9A876] hover:text-[#140D0A] active:scale-90 transition"
                aria-label="Close search"
              >
                <FontAwesomeIcon icon={faArrowLeft} />
              </button>
              <div
                className={`flex-1 flex items-center bg-[#C9A876] rounded-full px-4 py-2 transition-all duration-300 ${searchRingClasses}`}
              >
                <input
                  autoFocus
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search..."
                  className="w-full bg-transparent text-black placeholder-black text-sm outline-none font-['Inter']"
                />
              </div>
            </form>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        <div
          className={`lg:hidden transition-all duration-300 ease-in-out ${
            isopen ? "max-h-screen opacity-100" : "max-h-0 opacity-0 invisible"
          } overflow-hidden bg-[#2A1D16] border-t border-[#C9A876]/20 shadow-xl`}
        >
          <ul className="flex flex-col py-3 px-4 space-y-1">
            {navLinks.map((link, i) => (
              <li
                key={link.to}
                className="transition-all duration-300"
                style={{
                  transitionDelay: isopen ? `${i * 60}ms` : "0ms",
                  opacity: isopen ? 1 : 0,
                  transform: isopen ? "translateX(0)" : "translateX(-12px)",
                }}
              >
                <Link
                  to={link.to}
                  onClick={handleLinkClick}
                  className={`block px-4 py-3 rounded-lg font-['Inter'] text-sm font-medium transition ${
                    location.pathname === link.to
                      ? "text-[#C9A876] bg-[#140D0A]"
                      : "text-[#F5EFE6]/70 hover:text-[#C9A876] hover:bg-[#140D0A]/50"
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li
              className="pt-2 transition-all duration-300"
              style={{
                transitionDelay: isopen ? `${navLinks.length * 60}ms` : "0ms",
                opacity: isopen ? 1 : 0,
                transform: isopen ? "translateX(0)" : "translateX(-12px)",
              }}
            >
              {/* Mobile Resume: এখন প্রিভিউ খুলবে */}
              <button
                type="button"
                onClick={openResume}
                className="w-full justify-center text-center bg-[#C9A876] text-[#140D0A] px-4 flex items-center gap-2.5 py-3 rounded-xl font-['Inter'] text-sm font-semibold hover:shadow-md active:scale-95 transition"
              >
                Resume
                <FontAwesomeIcon icon={faEye} />
              </button>
            </li>
          </ul>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isopen && (
        <div
          className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40 md:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Resume Preview Modal */}
      {resumeOpen && (
        <div
          className="fixed inset-0 z-[60] flex items-center justify-center bg-black/70 backdrop-blur-sm p-3 sm:p-6"
          onClick={() => setResumeOpen(false)}
          role="dialog"
          aria-modal="true"
          aria-label="Resume preview"
        >
          <div
            className="w-full max-w-4xl h-[90vh] flex flex-col rounded-2xl border border-[#C9A876]/30 bg-[#171923] shadow-2xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal header */}
            <div className="flex items-center justify-between gap-3 px-4 py-3 border-b border-[#262936]">
              <h3 className="font-['Playfair_Display'] text-lg sm:text-xl font-bold text-[#F5EFE6]">
                Resume
              </h3>

              <div className="flex items-center gap-2">
                <a
                  href={RESUME_URL}
                  download={RESUME_FILENAME}
                  className="inline-flex items-center gap-2 rounded-full bg-[#C9A876] px-4 py-2 text-xs sm:text-sm font-semibold text-[#140D0A] font-['Inter'] hover:bg-[#E8D9BE] active:scale-95 transition"
                >
                  Download
                  <FontAwesomeIcon icon={faArrowDown} className="text-xs" />
                </a>
                <button
                  type="button"
                  onClick={() => setResumeOpen(false)}
                  className="flex items-center justify-center w-9 h-9 rounded-full border border-[#C9A876]/30 text-[#F5EFE6] hover:bg-[#C9A876] hover:text-[#140D0A] active:scale-90 transition"
                  aria-label="Close resume preview"
                >
                  <FontAwesomeIcon icon={faXmark} />
                </button>
              </div>
            </div>

            {/* PDF preview */}
            <div className="flex-1 bg-[#0F1117]">
              <iframe
                src={`${RESUME_URL}#view=FitH`}
                title="Resume preview"
                className="w-full h-full"
              />
            </div>

            {/* মোবাইলে অনেক ব্রাউজার ইনলাইন PDF দেখায় না, তাই ব্যাকআপ লিংক */}
            <div className="px-4 py-2 border-t border-[#262936] text-center">
              <a
                href={RESUME_URL}
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
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;