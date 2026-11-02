import React, { useEffect, useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faPhone,
  faLocationDot,
  faPaperPlane,
  faSpinner,
} from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faLinkedin,
  faFacebook,
} from "@fortawesome/free-brands-svg-icons";

const WEB3FORMS_ACCESS_KEY = "7b1e4fb6-5fdb-4755-a947-72f61f7728c2";

const Contact = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [status, setStatus] = useState("idle"); // idle | sending | success | error
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    setStatus("sending");

    const formData = new FormData(form);
    formData.append("access_key", WEB3FORMS_ACCESS_KEY);
    formData.append("from_name", "Portfolio Contact Form");

    // subject খালি থাকলে একটা ডিফল্ট সাবজেক্ট দেওয়া হবে
    if (!formData.get("subject")) {
      formData.set("subject", "New message from your portfolio");
    }

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });
      const data = await response.json();

      if (data.success) {
        setStatus("success");
        form.reset();
        setTimeout(() => setStatus("idle"), 5000);
      } else {
        setStatus("error");
      }
    } catch (error) {
      setStatus("error");
    }
  };

  const contactInfo = [
    {
      icon: faEnvelope,
      label: "Email",
      value: "md.shimuldiu@gmail.com",
      link: "mailto:md.shimuldiu@gmail.com",
    },
    {
      icon: faPhone,
      label: "Phone",
      value: "+880 1922773703",
      link: "tel:+8801922773703",
    },
    {
      icon: faLocationDot,
      label: "Location",
      value: "Dhaka, Bangladesh",
      link: "https://maps.google.com/?q=Dhaka+Bangladesh",
    },
  ];

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
  ];

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="max-w-7xl mx-auto min-h-fit bg-[#0F1117] flex items-center py-8 px-3 sm:px-6 lg:px-8 overflow-hidden"
    >
      <div
        className={`max-w-5xl mx-auto w-full border border-[#262936] bg-[#171923] p-4 sm:p-6 rounded-2xl transition-all duration-1000 ease-out delay-200 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        {/* Header */}
        <div className="text-center mb-8">
          <h2 className="font-['Playfair_Display'] text-2xl sm:text-4xl lg:text-5xl font-bold text-[#F5EFE6] leading-tight">
            Let's Connect
          </h2>
          <p className="text-[#F5EFE6]/60 text-sm sm:text-base font-['Inter'] mt-2 max-w-2xl mx-auto">
            Have a project in mind or want to collaborate? I'd love to hear from you.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-6 lg:gap-8">
          {/* Contact Info (Left) */}
          <div className="lg:w-2/5 space-y-6">
            <div className="space-y-4">
              {contactInfo.map((item, index) => (
                <a
                  key={index}
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-4 p-4 rounded-xl bg-[#0F1117] border border-[#262936] transition-all duration-300 hover:border-[#C9A876]/40 hover:-translate-y-0.5 group"
                >
                  <div className="w-10 h-10 flex-shrink-0 rounded-full bg-[#C9A876]/10 flex items-center justify-center text-[#C9A876] group-hover:bg-[#C9A876] group-hover:text-[#140D0A] transition-all duration-300">
                    <FontAwesomeIcon icon={item.icon} className="text-sm" />
                  </div>
                  <div>
                    <p className="text-[#C9A876] text-xs font-['Inter'] uppercase tracking-wider">
                      {item.label}
                    </p>
                    <p className="text-[#F5EFE6] font-['Inter'] font-medium text-sm sm:text-base break-all">
                      {item.value}
                    </p>
                  </div>
                </a>
              ))}
            </div>

            {/* Social Links */}
            <div className="p-4 rounded-xl bg-[#0F1117] border border-[#262936]">
              <p className="text-[#C9A876] text-xs font-['Inter'] uppercase tracking-wider mb-3">
                Connect with me
              </p>
              <div className="flex gap-3">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-9 h-9 rounded-full flex items-center justify-center border border-[#C9A876]/30 bg-[#171923] text-white hover:bg-[#C9A876] hover:text-[#140D0A] transition-all duration-300 hover:scale-110"
                    title={social.label}
                  >
                    <FontAwesomeIcon icon={social.icon} className="text-sm" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form (Right) */}
          <div className="lg:w-3/5">
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Spam protection (honeypot) - ইউজার দেখতে পাবে না */}
              <input
                type="checkbox"
                name="botcheck"
                className="hidden"
                style={{ display: "none" }}
                tabIndex={-1}
                autoComplete="off"
              />

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-[#C9A876] text-xs font-['Inter'] uppercase tracking-wider mb-1"
                  >
                    Your Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full px-4 py-2.5 rounded-xl bg-[#0F1117] border border-[#262936] text-[#F5EFE6] placeholder-[#F5EFE6]/40 font-['Inter'] text-sm outline-none focus:border-[#C9A876] transition-colors"
                    placeholder="Enter your name"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-[#C9A876] text-xs font-['Inter'] uppercase tracking-wider mb-1"
                  >
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-4 py-2.5 rounded-xl bg-[#0F1117] border border-[#262936] text-[#F5EFE6] placeholder-[#F5EFE6]/40 font-['Inter'] text-sm outline-none focus:border-[#C9A876] transition-colors"
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="subject"
                  className="block text-[#C9A876] text-xs font-['Inter'] uppercase tracking-wider mb-1"
                >
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  className="w-full px-4 py-2.5 rounded-xl bg-[#0F1117] border border-[#262936] text-[#F5EFE6] placeholder-[#F5EFE6]/40 font-['Inter'] text-sm outline-none focus:border-[#C9A876] transition-colors"
                  placeholder="Project discussion"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-[#C9A876] text-xs font-['Inter'] uppercase tracking-wider mb-1"
                >
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  className="w-full px-4 py-2.5 rounded-xl bg-[#0F1117] border border-[#262936] text-[#F5EFE6] placeholder-[#F5EFE6]/40 font-['Inter'] text-sm outline-none focus:border-[#C9A876] transition-colors resize-none"
                  placeholder="Tell me about your project..."
                />
              </div>

              <button
                type="submit"
                disabled={status === "sending"}
                className="inline-flex items-center justify-center gap-2.5 w-full sm:w-auto rounded-full bg-[#C9A876] px-8 py-3 text-sm font-semibold text-[#140D0A] transition-all duration-300 hover:bg-[#E8D9BE] hover:-translate-y-0.5 hover:shadow-xl shadow-md font-['Inter'] disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:translate-y-0"
              >
                <span>{status === "sending" ? "Sending..." : "Send Message"}</span>
                <FontAwesomeIcon
                  icon={status === "sending" ? faSpinner : faPaperPlane}
                  spin={status === "sending"}
                  className="text-xs"
                />
              </button>

              {/* Status message */}
              {status === "success" && (
                <p className="text-green-400 text-sm font-['Inter']">
                  ✓ Thank you! Your message has been sent. I'll get back to you soon.
                </p>
              )}
              {status === "error" && (
                <p className="text-red-400 text-sm font-['Inter']">
                  Something went wrong. Please try again or email me directly at
                  md.shimuldiu@gmail.com.
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;