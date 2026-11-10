import { Typewriter } from "react-simple-typewriter";

const About = () => {
  return (
    <section
      id="about"
      className="py-16 md:py-24 bg-white dark:bg-[#0a1628] transition-colors duration-300"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
        
        {/* Section Title */}
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
          About Me
        </h2>

        <div className="w-16 sm:w-20 h-1 bg-cyan-400 mx-auto mb-8 sm:mb-12 rounded-full"></div>

        {/* Content */}
        <div className="space-y-6 text-gray-600 dark:text-gray-300 text-base sm:text-lg leading-relaxed text-left sm:text-center">
          
          {/* Paragraph 1 */}
          <p>
            Hello! I'm{" "}
            <span className="text-cyan-400 font-semibold">
              David Mugiraneza
            </span>
            ,{" "}
            <Typewriter
              words={[
                "a passionate Creative IT Developer and Web Designer",
                "who loves building modern, responsive, and beautiful websites."
              ]}
              loop={0}
              cursor
              cursorStyle="|"
              typeSpeed={70}
              deleteSpeed={40}
              delaySpeed={2000}
            />
          </p>

          {/* Paragraph 2 */}
          <p>
            I specialize in creating clean and functional digital experiences using{" "}
            <span className="text-gray-900 dark:text-white font-semibold">
              HTML, CSS, JavaScript, MySQL, and React
            </span>
            . I also work with modern web technologies, responsive UI/UX design, and full-stack web systems. My goal is to turn ideas into reality through well-written and efficient code.
          </p>

          {/* Paragraph 3 */}
          <p>
            I believe in the values of{" "}
            <span className="text-cyan-400 font-semibold">
              Discipline, Focus, Consistency, and Success
            </span>
            . These principles guide me every day as I continue to grow and improve as a developer.
          </p>
        </div>

        {/* ========== DOWNLOAD RESUME SECTION ========== */}
        <div className="mt-10 sm:mt-12">
          <a
            href="/David_Mugiraneza_Resume.pdf"
            download="David_Mugiraneza_Resume.pdf"
            className="inline-flex items-center gap-2 px-6 py-3 bg-cyan-500 hover:bg-cyan-600 text-white font-medium rounded-lg transition-all duration-300 shadow-md hover:shadow-lg"
          >
            {/* Download Icon */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
              />
            </svg>
            Download Resume (PDF)
          </a>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 mt-10 sm:mt-14">
          
          <div className="bg-gray-100 dark:bg-[#111c33] border border-gray-200 dark:border-gray-800 rounded-xl p-5 sm:p-6 hover:border-cyan-500 transition">
            <h3 className="text-xl sm:text-2xl font-bold text-cyan-400 mb-1 sm:mb-2">
              3+
            </h3>
            <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400">
              Years Experience
            </p>
          </div>

          <div className="bg-gray-100 dark:bg-[#111c33] border border-gray-200 dark:border-gray-800 rounded-xl p-5 sm:p-6 hover:border-cyan-500 transition">
            <h3 className="text-xl sm:text-2xl font-bold text-cyan-400 mb-1 sm:mb-2">
              10+
            </h3>
            <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400">
              Projects Completed
            </p>
          </div>

          <div className="bg-gray-100 dark:bg-[#111c33] border border-gray-200 dark:border-gray-800 rounded-xl p-5 sm:p-6 hover:border-cyan-500 transition">
            <h3 className="text-xl sm:text-2xl font-bold text-cyan-400 mb-1 sm:mb-2">
              Many
            </h3>
            <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400">
              Happy Clients
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;