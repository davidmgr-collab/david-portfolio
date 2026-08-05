import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <footer
      className="
      bg-white dark:bg-[#0a1628]
      border-t border-gray-300 dark:border-gray-800
      py-10
      transition
      "
    >
      <div className="max-w-5xl mx-auto px-6 text-center">
        
        {/* Name */}
        <h3
          className="
          text-xl font-bold mb-3 tracking-wide
          text-cyan-500
          "
        >
          David Mugiraneza
        </h3>


        {/* Text */}
        <p
          className="
          text-gray-600 dark:text-gray-400
          text-sm mb-6
          "
        >
          Creative IT Developer & Web Designer
        </p>



        {/* Social Icons */}
        <div
          className="
          flex justify-center gap-5 mb-6
          text-gray-600 dark:text-gray-400
          text-lg
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
          w-24 h-[1px]
          bg-gray-300 dark:bg-gray-700
          mx-auto mb-4
          "
        ></div>



        {/* Copyright */}
        <p
          className="
          text-gray-500 dark:text-gray-500
          text-sm
          "
        >
          © {new Date().getFullYear()} David Mugiraneza. All rights reserved.
        </p>


      </div>
    </footer>
  );
};

export default Footer;