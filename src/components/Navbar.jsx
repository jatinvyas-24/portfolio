import { useState, useEffect, useRef } from "react";
import OverlayMenu from "./OverlayMenu";
import { FiMenu } from "react-icons/fi";
import Logo from "../assets/Logo.png";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [visible, setVisible] = useState(true);
  const [forceVisible, setForceVisible] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const lastScrollY = useRef(0);
  const timerId = useRef(null);

  const navLinks = [
    "Home",
    "About",
    "Skills",
    "Projects",
    "Profiles",
    "Contact",
  ];

  useEffect(() => {
    const handleScrollState = () => {
      if (window.scrollY > 30) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScrollState, { passive: true });
    return () => window.removeEventListener("scroll", handleScrollState);
  }, []);

  useEffect(() => {
    const homeSection = document.querySelector("#home");

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setForceVisible(true);
          setVisible(true);
        } else {
          setForceVisible(false);
        }
      },
      { threshold: 0.1 },
    );

    if (homeSection) observer.observe(homeSection);

    return () => {
      if (homeSection) observer.unobserve(homeSection);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (forceVisible) {
        setVisible(true);
        return;
      }

      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY.current) {
        setVisible(false);
      } else {
        setVisible(true);

        if (timerId.current) clearTimeout(timerId.current);
        timerId.current = setTimeout(() => {
          setVisible(false);
        }, 3000);
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (timerId.current) clearTimeout(timerId.current);
    };
  }, [forceVisible]);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full flex items-center justify-between px-6 md:px-12 z-50 transition-all duration-350 ${
          visible ? "translate-y-0" : "-translate-y-full"
        } ${
          isScrolled
            ? "bg-black/45 backdrop-blur-md py-3 shadow-lg shadow-black/25"
            : "bg-transparent py-5"
        }`}
      >
        <div className="flex items-center space-x-2">
          <img src={Logo} alt="Logo" className="w-8 h-8" />
          <div className="text-2xl font-bold text-white hidden sm:block">
            Jatin
          </div>
        </div>

        <div className="hidden lg:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="text-sm font-semibold text-gray-300 hover:text-white transition-colors duration-300 relative group"
            >
              {link}

              <span className="absolute bottom-[-6px] left-0 w-0 h-[2px] bg-gradient-to-r from-[#1CD8D2] to-[#00bf8f] transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </div>

        <div className="flex items-center space-x-4">
          <div className="hidden lg:block">
            <a
              href="#contact"
              className="bg-gradient-to-r from-[#1CD8D2] via-[#00bf8f] to-[#302b63] text-white px-5.5 py-2.5 rounded-full font-bold text-xs tracking-wider uppercase shadow-lg hover:scale-105 hover:shadow-[#00bf8f]/20 transition-all duration-300"
            >
              Reach Out
            </a>
          </div>

          <div className="lg:hidden">
            <button
              onClick={() => setMenuOpen(true)}
              className="text-white text-3xl focus:outline-none hover:text-[#1cd8d2] transition-colors"
              aria-label="Open menu"
            >
              <FiMenu />
            </button>
          </div>
        </div>
      </nav>

      <OverlayMenu isOpen={menuOpen} onClose={() => setMenuOpen(false)} />
    </>
  );
}
