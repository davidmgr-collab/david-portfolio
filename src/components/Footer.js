import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <footer
      className="
        bg-white dark:bg-[#0a1628]
        border-t border-gray-300 dark:border-gray-800
        py-8 sm:py-10
        transition-colors duration-300
      "
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 text-center">
        
        {/* Name */}
        <h3
          className="
            text-lg sm:text-xl font-bold mb-2 sm:mb-3 tracking-wide
            text-cyan-500
          "
        >
          David Mugiraneza
        </h3>

        {/* Text */}
        <p
          className="
            text-gray-600 dark:text-gray-400
            text-xs sm:text-sm mb-5 sm:mb-6
          "
        >
          Creative IT Developer & Web Designer
        </p>

        {/* Social Icons */}
        <div
          className="
            flex justify-center gap-5 sm:gap-6 mb-5 sm:mb-6
            text-gray-600 dark:text-gray-400
            text-lg sm:text-xl
          "
        >
          <a
            href="https://github.com/"
            target="_blank"
            rel="noreferrer"
            className="
              hover:text-cyan-400
              transition
              hover:-translate-y-1
            "
          >
            <FaGithub />
          </a>

          <a
            href="https://linkedin.com/"
            target="_blank"
            rel="noreferrer"
            className="
              hover:text-cyan-400
              transition
              hover:-translate-y-1
            "
          >
            <FaLinkedin />
          </a>

          <a
            href="mailto:davidmugiraneza34@gmail.com"
            className="
              hover:text-cyan-400
              transition
              hover:-translate-y-1
            "
          >
            <FaEnvelope />
          </a>
        </div>

        {/* Divider */}
        <div
          className="
            w-20 sm:w-24 h-[1px]
            bg-gray-300 dark:bg-gray-700
            mx-auto mb-3 sm:mb-4
          "
        ></div>

        {/* Copyright */}
        <p
          className="
            text-gray-500 dark:text-gray-500
            text-xs sm:text-sm
          "
        >
          © {new Date().getFullYear()} David Mugiraneza. All rights reserved.
        </p>

      </div>
    </footer>
  );
};

export default Footer;