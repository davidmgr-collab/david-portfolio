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
          
          {/* Paragraph 1: Static */}
          <p>
            Hello! I'm{" "}
            <span className="text-cyan-400 font-semibold">
              David Mugiraneza
            </span>
            , a passionate Creative IT Developer and Web Designer who loves
            building modern, responsive, and beautiful websites.
          </p>

          {/* Paragraph 2: Animated Typewriter */}
          <p className="min-h-[70px] sm:min-h-[32px]">
            I specialize in creating clean and functional digital experiences
            using{" "}
            <span className="text-gray-900 dark:text-white font-semibold">
              <Typewriter
                words={[
                  "HTML, CSS, JavaScript, MySQL, and React",
                  "Modern Web Technologies",
                  "Responsive UI / UX Design",
                  "Full-Stack Web Systems"
                ]}
                loop={0}
                cursor
                cursorStyle="|"
                typeSpeed={70}
                deleteSpeed={40}
                delaySpeed={1500}
              />
            </span>
            . My goal is to turn ideas into reality through well-written and
            efficient code.
          </p>

          {/* Paragraph 3: Static */}
          <p>
            I believe in the values of{" "}
            <span className="text-cyan-400 font-semibold">
              Discipline, Focus, Consistency, and Success
            </span>
            . These principles guide me every day as I continue to grow and
            improve as a developer.
          </p>

        </div>

        {/* Cards (Responsive Grid: 1 column on mobile, 3 columns on small screens and up) */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 mt-10 sm:mt-14">
          
          <div className="bg-gray-100 dark:bg-[#111c33] border border-gray-200 dark:border-gray-800 rounded-xl p-5 sm:p-6 hover:border-cyan-500 transition">
            <h3 className="text-xl sm:text-2xl font-bold text-cyan-400 mb-1 sm:mb-2">2+</h3>
            <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400">
              Years Experience
            </p>
          </div>

          <div className="bg-gray-100 dark:bg-[#111c33] border border-gray-200 dark:border-gray-800 rounded-xl p-5 sm:p-6 hover:border-cyan-500 transition">
            <h3 className="text-xl sm:text-2xl font-bold text-cyan-400 mb-1 sm:mb-2">10+</h3>
            <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400">
              Projects Completed
            </p>
          </div>

          <div className="bg-gray-100 dark:bg-[#111c33] border border-gray-200 dark:border-gray-800 rounded-xl p-5 sm:p-6 hover:border-cyan-500 transition">
            <h3 className="text-xl sm:text-2xl font-bold text-cyan-400 mb-1 sm:mb-2">5+</h3>
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