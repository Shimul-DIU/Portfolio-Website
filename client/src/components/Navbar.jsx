import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faBars,
  faXmark,
  faMagnifyingGlass,
  faArrowLeft,
} from '@fortawesome/free-solid-svg-icons';
import { Link, useLocation } from 'react-router-dom';
import logo from '../assets/images/icon.png';

const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/projects', label: 'Projects' },
  { to: '/skills', label: 'Skills' },
  { to: '/contact', label: 'Contact' },
  { to: '/blog', label: 'Blog' },
];

const Navbar = () => {
  const [isopen, setIsOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const location = useLocation();

  const handleLinkClick = () => setIsOpen(false);

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    console.log('Searching for:', searchQuery);
    setSearchOpen(false);
  };

const searchRingClasses =
  'ring-1 ring-transparent hover:ring-white/70 focus-within:ring-2 focus-within:ring-white transition-all duration-200';;

  return (
    <>
      <nav className="sticky top-0 z-50 bg-linear-to-bl from-[#CF15D4] to-[#7B14F9] shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative flex items-center h-16 gap-4 lg:gap-6">
            {/* Logo */}
            <Link to="/" className="flex items-center shrink-0 group">
              <img
                src={logo}
                className="h-10 object-contain transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-6"
                alt="icon"
              />
            </Link>

            {/* Spacer - absorbs freed space right after logo */}
            <div className="hidden md:block flex-1" />

            {/* Search bar - smaller fixed width, responsive between breakpoints */}
            <form
              onSubmit={handleSearchSubmit}
              className={`hidden md:flex items-center shrink-0 w-[clamp(220px,35vw,420px)] bg-white/15 rounded-full px-4 py-2 transition-all duration-300 ${searchRingClasses}`}
            >
              <FontAwesomeIcon
                icon={faMagnifyingGlass}
                className="text-white/80 text-sm mr-2 shrink-0"
              />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search..."
                className="w-full bg-transparent text-white placeholder-white/70 text-sm outline-none"
              />
            </form>

            {/* Nav items - natural width, sits right after search bar */}
            <ul className="hidden md:flex items-center gap-1 lg:gap-6 shrink-0">
              {navLinks.map((link) => {
                const isActive = location.pathname === link.to;
                return (
                  <li key={link.to} className="flex items-stretch group">
                    <Link
                      to={link.to}
                      className={`relative flex items-center px-2 font-medium whitespace-nowrap transition-colors duration-200 ${
                        isActive
                          ? 'text-yellow-300'
                          : 'text-white/90 hover:text-yellow-300'
                      }`}
                    >
                      {link.label}
                      <span
                        className={`absolute left-2 right-2 -bottom-[1px] h-[2px] rounded-full bg-yellow-300 origin-left transition-transform duration-300 ${
                          isActive
                            ? 'scale-x-100'
                            : 'scale-x-0 group-hover:scale-x-100'
                        }`}
                      />
                    </Link>
                  </li>
                );
              })}
            </ul>

            {/* Resume Button + Mobile Icons */}
            <div className="flex items-center gap-3 shrink-0 ml-auto md:ml-0">
              <button className="hidden md:inline-flex relative overflow-hidden bg-white text-[#7B14F9] px-5 py-2 rounded-full font-medium shadow-md hover:shadow-lg hover:scale-105 active:scale-95 transition-all duration-200 text-sm">
                Resume
              </button>

              {/* Mobile search toggle */}
              <button
                onClick={() => setSearchOpen(true)}
                className="md:hidden text-white hover:text-yellow-300 focus:outline-none p-2 rounded-lg hover:bg-white/10 transition"
                aria-label="Open search"
              >
                <FontAwesomeIcon icon={faMagnifyingGlass} className="text-xl" />
              </button>

              <button
                onClick={() => setIsOpen(!isopen)}
                className="md:hidden text-white hover:text-yellow-300 focus:outline-none p-2 rounded-lg hover:bg-white/10 transition"
                aria-label="Toggle menu"
              >
                <FontAwesomeIcon
                  icon={isopen ? faXmark : faBars}
                  className="text-2xl transition-transform duration-300"
                  style={{ transform: isopen ? 'rotate(180deg)' : 'rotate(0deg)' }}
                />
              </button>
            </div>

            {/* Mobile Search Overlay */}
            <form
              onSubmit={handleSearchSubmit}
              className={`md:hidden absolute inset-0 flex items-center gap-2 px-4 bg-linear-to-bl from-[#CF15D4] to-[#7B14F9] z-10 transition-all duration-300 ${
                searchOpen
                  ? 'opacity-100 visible'
                  : 'opacity-0 invisible pointer-events-none'
              }`}
            >
              <button
                type="button"
                onClick={() => setSearchOpen(false)}
                className="flex items-center justify-center w-9 h-9 shrink-0 rounded-full bg-white/20 text-white hover:bg-white/30 active:scale-90 transition"
                aria-label="Close search"
              >
                <FontAwesomeIcon icon={faArrowLeft} />
              </button>
              <div
                className={`flex-1 flex items-center bg-white/15 rounded-full px-4 py-2 transition-all duration-300 ${searchRingClasses}`}
              >
                <input
                  autoFocus
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search..."
                  className="w-full bg-transparent text-white placeholder-white/70 text-sm outline-none"
                />
              </div>
            </form>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        <div
          className={`md:hidden transition-all duration-300 ease-in-out ${
            isopen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0 invisible'
          } overflow-hidden bg-white border-t border-gray-100 shadow-lg`}
        >
          <ul className="flex flex-col py-3 px-4 space-y-1">
            {navLinks.map((link, i) => (
              <li
                key={link.to}
                className="transition-all duration-300"
                style={{
                  transitionDelay: isopen ? `${i * 60}ms` : '0ms',
                  opacity: isopen ? 1 : 0,
                  transform: isopen ? 'translateX(0)' : 'translateX(-12px)',
                }}
              >
                <Link
                  to={link.to}
                  onClick={handleLinkClick}
                  className={`block px-4 py-3 rounded-lg font-medium transition ${
                    location.pathname === link.to
                      ? 'text-[#7B14F9] bg-purple-50'
                      : 'text-gray-700 hover:text-[#7B14F9] hover:bg-gray-50'
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li
              className="pt-2 transition-all duration-300"
              style={{
                transitionDelay: isopen ? `${navLinks.length * 60}ms` : '0ms',
                opacity: isopen ? 1 : 0,
                transform: isopen ? 'translateX(0)' : 'translateX(-12px)',
              }}
            >
              <button
                onClick={handleLinkClick}
                className="w-full bg-linear-to-bl from-[#CF15D4] to-[#7B14F9] text-white px-4 py-3 rounded-xl font-medium hover:shadow-md active:scale-95 transition"
              >
                Resume
              </button>
            </li>
          </ul>
        </div>
      </nav>

      {isopen && (
        <div
          className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40 md:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  );
};

export default Navbar;