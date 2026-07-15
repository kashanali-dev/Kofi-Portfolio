import { useState, useEffect } from "react";
import { FaLinkedinIn, FaTwitter } from "react-icons/fa6";
import { SiOrcid } from "react-icons/si";
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
export default function Header() {
  const [mobileMenu, setMobileMenu] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 border-b border-[#E8E4DA] transition-all duration-300 ${
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
              <span className="text-[#0F7D86]">•</span>
            </a>

            {/* Desktop Navigation */}

            <nav className="hidden lg:flex items-center gap-10">
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

          {/* Mobile Menu Button */}

          <div className="flex items-center gap-8">
            {/* Social Icons */}

            <div className="hidden lg:flex items-center gap-5">
              {socials.map((item, index) => (
                <a
                  key={index}
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[18px] text-[#2E2E2E] transition duration-300 hover:text-black"
                >
                  {item.icon}
                </a>
              ))}
            </div>

            {/* CTA */}

            <a
              href="#contact"
              className="hidden lg:inline-flex items-center gap-2 rounded-lg bg-[#0F7D86] px-8 py-3 text-[14px] font-semibold uppercase tracking-[0.08em] text-white transition-all duration-300 hover:-translate-y-1"
            >
              GET IN TOUCH
              <span>→</span>
            </a>

            {/* Mobile */}

            <button
              onClick={() => setMobileMenu(!mobileMenu)}
              className="lg:hidden text-2xl"
            >
              {mobileMenu ? "✕" : "☰"}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}

      {/* Mobile Menu */}
      {mobileMenu && (
        <div className="lg:hidden border-t border-[#E8E4DA] bg-[#F8F6F1] shadow-lg">
          <div className="flex flex-col py-4">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={() => setMobileMenu(false)}
                className="px-6 py-3 text-[15px] font-medium text-[#232323] hover:bg-white transition"
              >
                {item.name}
              </a>
            ))}

            {/* Mobile CTA Button */}
            <div className="px-6 pt-5">
              <a
                href="#contact"
                onClick={() => setMobileMenu(false)}
                className="group flex w-full items-center justify-center gap-2 rounded-lg bg-[#232323] px-6 py-3 text-[14px] font-semibold uppercase tracking-[0.08em] text-[#F8F6F1] transition-all duration-300 hover:-translate-y-1 hover:bg-[#4FB3A5] hover:shadow-lg"
              >
                Get In Touch
                <span className="transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
