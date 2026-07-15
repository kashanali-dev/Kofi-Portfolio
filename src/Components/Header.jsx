import { useState, useEffect } from "react";
import { FaLinkedinIn, FaTwitter } from "react-icons/fa6";
import { SiOrcid } from "react-icons/si";
import { FaBars } from "react-icons/fa";

export default function Header() {
  const [mobileMenu, setMobileMenu] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const navItems = [
    { name: "Home", id: "home" },
    { name: "About", id: "about" },
    { name: "Research", id: "research" },
    { name: "Projects", id: "projects" },
    { name: "Books", id: "books" },
    { name: "Contact", id: "contact" },
  ];

  const socials = [
    {
      icon: <FaLinkedinIn />,
      link: "https://linkedin.com",
    },
    {
      icon: <SiOrcid />,
      link: "https://orcid.org",
    },
    {
      icon: <FaTwitter />,
      link: "https://twitter.com/",
    },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 border-b border-[#E8E4DA] transition-all duration-500 ${
        scrolled ? "bg-[#F8F6F1]/90 backdrop-blur-lg" : "bg-[#F8F6F1]"
      }`}
    >
      <div className="relative max-w-7xl mx-auto px-6 lg:px-10">
        <div className="flex h-20 items-center justify-between">
          <div className="flex items-center gap-14">
            {/* Logo */}
            <a
              href="/"
              className="text-[32px] font-bold tracking-[-0.03em] text-[#232323]"
            >
              Kofi
              <span className="text-[#C68A2B]">•</span>
            </a>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-8">
              {navItems.map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  className="relative text-[15px] font-medium text-[#2E2E2E] transition-all duration-300 hover:text-black after:absolute after:left-0 after:-bottom-1 after:h-[1.5px] after:w-0 after:bg-[#2E2E2E] after:transition-all after:duration-300 hover:after:w-full"
                >
                  {item.name}
                </a>
              ))}
            </nav>
          </div>

          {/* Right Side Items */}
          <div className="flex items-center gap-8">
            {/* Social Icons - Desktop Only */}
            <div className="hidden lg:flex items-center gap-5">
              {socials.map((item, index) => (
                <a
                  key={index}
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[18px] text-[#2E2E2E] transition-all duration-500 ease-in-out hover:text-[#C68A2B]"
                >
                  {item.icon}
                </a>
              ))}
            </div>

            {/* CTA Button */}
            <a
              href="#contact"
              className="hidden lg:inline-flex items-center gap-2 rounded-lg bg-[#C68A2B] px-8 py-3 text-[14px] font-semibold uppercase tracking-[0.08em] text-white transition-all duration-300 hover:bg-[#B8771F] hover:-translate-y-1"
            >
              GET IN TOUCH
              <span>→</span>
            </a>

            {/* Hamburger Menu Button - Mobile Only */}
            <button
              onClick={() => setMobileMenu(!mobileMenu)}
              className="lg:hidden p-2 text-[#2E2E2E] hover:text-black transition-all duration-300 text-2xl transform hover:scale-110"
            >
              <FaBars
                className={`transition-transform duration-300 ${mobileMenu ? "rotate-90" : "rotate-0"}`}
              />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu - Slides from Left with Smooth Animation */}
      {mobileMenu && (
        <div className="fixed inset-0 z-40 lg:hidden">
          {/* Backdrop with smooth fade */}
          <div
            className="absolute inset-0 bg-black/20 opacity-100 transition-opacity duration-300"
            onClick={() => setMobileMenu(false)}
          />

          {/* Slide Menu with smooth transform animation */}
          <div
            className={`absolute top-20 right-4 h-[70vh] w-72 rounded-2xl bg-[#F8F6F1] shadow-2xl overflow-y-auto transition-transform duration-300 ease-in-out ${
              mobileMenu ? "translate-x-0" : "translate-x-full"
            }`}
          >
            {/* Close Button */}
            <button
              onClick={() => setMobileMenu(false)}
              className="absolute right-4 top-4 text-2xl text-[#2E2E2E] hover:text-black transition-colors duration-200"
            >
              ✕
            </button>

            <div className="flex flex-col pt-16 pb-6">
              {/* Social Icons */}
              <div className="flex items-center gap-4 px-6 py-6 border-b border-[#E8E4DA] transition-all duration-300">
                <span className="text-[13px] font-medium text-[#2E2E2E]">
                  Follow:
                </span>
                <div className="flex items-center gap-3 ml-auto">
                  {socials.map((item, index) => (
                    <a
                      key={index}
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[18px] text-[#2E2E2E] transition-all duration-300 hover:text-[#C68A2B] hover:scale-110"
                    >
                      {item.icon}
                    </a>
                  ))}
                </div>
              </div>

              {/* Navigation Links */}
              {navItems.map((item, index) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  onClick={() => setMobileMenu(false)}
                  className="relative px-6 py-4 text-[15px] font-medium text-[#232323] transition-all border-b border-[#E8E4DA]/50 group after:absolute after:left-6 after:bottom-3 after:h-[1.5px] after:w-0 after:bg-[#2E2E2E] after:transition-all after:duration-300 hover:after:w-[calc(100%-48px)] transform duration-300 hover:translate-x-2"
                  style={{
                    animation: `slideIn 0.3s ease-out ${index * 50}ms forwards`,
                    opacity: 0,
                  }}
                >
                  {item.name}
                </a>
              ))}

              {/* Mobile CTA Button */}
              <div className="px-6 pt-6 transform transition-all duration-300">
                <a
                  href="#contact"
                  onClick={() => setMobileMenu(false)}
                  className="group flex w-full items-center justify-center gap-2 rounded-lg bg-[#C68A2B] px-6 py-3 text-[14px] font-semibold uppercase tracking-[0.08em] text-[#F8F6F1] transition-all duration-300 hover:bg-[#B8771F] hover:-translate-y-1 hover:shadow-sm"
                >
                  Get In Touch
                  <span className="transition-transform duration-300 group-hover:translate-x-1">
                    →
                  </span>
                </a>
              </div>
            </div>

            {/* Smooth Animation Keyframes */}
            <style>{`
            @keyframes slideIn {
              from {
                opacity: 0;
                transform: translateX(20px);
              }

              to {
                opacity: 1;
                transform: translateX(0);
              }
            }
            `}</style>
          </div>
        </div>
      )}
    </header>
  );
}
