import { Typewriter } from "react-simple-typewriter";

const Hero = () => {
  return (
    <section
      id="home"
      className="
        min-h-screen flex items-center justify-center pt-20 pb-12
        bg-white dark:bg-[#0a1628] transition-colors duration-300
      "
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">

        {/* Profile Photo */}
        <div className="mb-6 sm:mb-8 flex justify-center">
          <img
            src="/dvd.jpg"
            alt="David Mugiraneza"
            className="
              w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48
              rounded-full object-cover
              border-4 border-cyan-400
              shadow-lg shadow-cyan-500/20
            "
          />
        </div>

        {/* Greeting */}
        <p className="text-cyan-400 text-base sm:text-lg mb-2 sm:mb-3">
          Hello, I am
        </p>

        {/* Name */}
        <h1 className="
          text-4xl sm:text-6xl md:text-7xl font-bold mb-3 sm:mb-4 tracking-tight
          text-black dark:text-white
        ">
          David Mugiraneza
        </h1>

        {/* Animated Title */}
        <h2 className="
          text-lg sm:text-xl md:text-2xl font-medium mb-4 sm:mb-6 min-h-[44px] sm:min-h-[36px]
          text-gray-700 dark:text-cyan-400
        ">
          <span>I am a </span>
          <span className="font-semibold text-black dark:text-white">
            <Typewriter
              words={[
                "Creative IT Developer",
                "Web Designer",
                "Full-Stack Developer",
                "Problem Solver"
              ]}
              loop={0}
              cursor
              cursorStyle="|"
              typeSpeed={80}
              deleteSpeed={50}
              delaySpeed={1500}
            />
          </span>
        </h2>

        {/* Description */}
        <p className="
          text-sm sm:text-base md:text-lg max-w-xl sm:max-w-2xl mx-auto leading-relaxed
          text-gray-600 dark:text-gray-400 px-2 sm:px-0
        ">
          I build modern, responsive, and beautiful websites using HTML, CSS,
          JavaScript, MySQL and React.
        </p>

      </div>
    </section>
  );
};

export default Hero;