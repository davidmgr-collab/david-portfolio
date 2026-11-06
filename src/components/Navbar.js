import { useState, useEffect } from "react";
import { FiMenu, FiX, FiMoon, FiSun } from "react-icons/fi";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  // Load theme properly
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");

    if (savedTheme === "dark") {
      document.documentElement.classList.add("dark");
      setDarkMode(true);
    } else {
      document.documentElement.classList.remove("dark");
      setDarkMode(false);
    }
  }, []);

  // Scroll shadow + blur
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Toggle Theme
  const toggleTheme = () => {
    if (darkMode) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
      setDarkMode(false);
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
      setDarkMode(true);
    }
  };

  const links = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Experience", href: "#experience" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "backdrop-blur-md bg-white/70 dark:bg-[#0a1628]/70 shadow-lg"
          : "bg-white dark:bg-[#0a1628]"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">

        {/* Logo */}
        <a
          href="#home"
          className="text-xl sm:text-2xl font-bold text-cyan-400 tracking-wide"
        >
          David
        </a>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-6 lg:gap-8">
          {links.map((link) => (
            <li key={link.name}>
              <a
                href={link.href}
                className="
                  relative text-sm lg:text-base text-gray-800 dark:text-white
                  hover:text-cyan-400 transition
                  after:content-['']
                  after:absolute after:left-0 after:-bottom-1
                  after:w-0 after:h-[2px]
                  after:bg-cyan-400
                  after:transition-all
                  hover:after:w-full
                "
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>

        {/* Right Controls */}
        <div className="flex items-center gap-3 sm:gap-4">

          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            className="
              w-9 h-9 sm:w-10 sm:h-10 rounded-full
              bg-gray-200 dark:bg-gray-700
              flex items-center justify-center
              transition hover:scale-110
            "
            aria-label="Toggle Theme"
          >
            {darkMode ? (
              <FiSun size={18} className="text-yellow-400" />
            ) : (
              <FiMoon size={18} className="text-gray-700" />
            )}
          </button>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-800 dark:text-white p-1"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle Menu"
          >
            {isOpen ? <FiX size={26} /> : <FiMenu size={26} />}
          </button>

        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <ul className="
          md:hidden flex flex-col items-center gap-5 py-6
          bg-white dark:bg-[#0a1628]
          border-t border-gray-200 dark:border-gray-700
          shadow-xl transition-all
        ">
          {links.map((link) => (
            <li key={link.name}>
              <a
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="
                  text-base sm:text-lg text-gray-800 dark:text-white
                  hover:text-cyan-400 transition font-medium
                "
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
};

export default Navbar;