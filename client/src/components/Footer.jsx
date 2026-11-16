import { FaGithub, FaLinkedinIn, FaFacebookF } from "react-icons/fa6";
import { MdEmail, MdLocationOn } from "react-icons/md";

const Footer = () => {
  const navLinks = ["Home", "About", "Projects", "Blog", "Contact"];

  const socialLinks = [
    {
      icon: <FaFacebookF />,
      label: "Facebook",
      href: "https://www.facebook.com/shimul.mia.79462/",
    },
    {
      icon: <FaLinkedinIn />,
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/md-shimul-71a4b3319/",
    },
    {
      icon: <FaGithub />,
      label: "GitHub",
      href: "https://github.com/Shimul-DIU",
    },
  ];

  return (
    <footer className="max-w-7xl mx-auto bg-[#0f0f0f] text-gray-300 border-t border-[#1e1e1e] pt-12 pb-6 px-6">
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
        {/* Brand */}
        <div>
          <h2 className="text-white text-xl font-medium mb-2">Md. Shimul</h2>

          <p className="text-sm text-gray-500 leading-relaxed mb-5">
            Full-Stack Developer passionate about building clean, scalable web
            apps with React & Node.js.
          </p>

          <div className="flex flex-wrap gap-2">
            {socialLinks.map(({ icon, label, href }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="flex items-center gap-2 px-3 py-1.5 text-xs text-gray-400
                           border border-[#333] rounded-full bg-[#1a1a1a]
                           hover:border-gray-500 hover:text-white transition"
              >
                {icon} {label}
              </a>
            ))}
          </div>
        </div>

        {/* Navigation */}
        <div>
          <h3 className="text-xs text-gray-600 uppercase tracking-widest mb-4">
            Navigate
          </h3>

          <ul className="space-y-2">
            {navLinks.map((link) => (
              <li key={link}>
                <a
                  href={`${link.toLowerCase()}`}
                  className="text-sm text-gray-500 hover:text-white transition"
                >
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-xs text-gray-600 uppercase tracking-widest mb-4">
            Contact
          </h3>

          <div className="space-y-3 text-sm text-gray-500">
            <p className="flex items-center gap-2">
              <MdEmail className="text-gray-600" />
              <a
                href="mailto:md.shimuldiu@gmail.com"
                className="hover:text-white transition"
              >
                md.shimuldiu@gmail.com
              </a>
            </p>

            <p className="flex items-center gap-2">
              <MdLocationOn className="text-gray-600" />
              Dhaka, Bangladesh
            </p>

            <span
              className="inline-block text-xs px-3 py-1 rounded-full
                         bg-green-900/30 text-green-400 border border-green-800"
            >
              Open to work
            </span>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div
        className="max-w-5xl mx-auto border-t border-[#1e1e1e] pt-5
                   flex flex-col sm:flex-row justify-between items-center gap-2 text-xs text-gray-600"
      >
        <p>© {new Date().getFullYear()} Md. Shimul Mia. All rights reserved.</p>

        <p>
          Built with <span className="text-red-500">♥</span> using React &
          Tailwind CSS
        </p>
      </div>
    </footer>
  );
};

export default Footer;