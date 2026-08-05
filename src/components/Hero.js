const Hero = () => {
  return (
    <section
      id="home"
      className="
        min-h-screen flex items-center justify-center pt-20
        bg-white dark:bg-[#0a1628] transition
      "
    >
      <div className="max-w-4xl mx-auto px-6 text-center">

        {/* Profile Photo */}
        <div className="mb-8 flex justify-center">
          <img
            src="/dvd.jpg"
            alt="David Mugiraneza"
            className="
              w-40 h-40 md:w-48 md:h-48
              rounded-full object-cover
              border-4 border-cyan-400
              shadow-lg shadow-cyan-500/20
            "
          />
        </div>

        {/* Greeting */}
        <p className="text-cyan-400 text-lg mb-3">
          Hello, I am
        </p>

        {/* Name */}
        <h1 className="
          text-5xl md:text-7xl font-bold mb-4 tracking-tight
          text-black dark:text-white
        ">
          David Mugiraneza
        </h1>

        {/* Title */}
        <h2 className="
          text-xl md:text-2xl font-medium mb-6
          text-gray-700 dark:text-gray-300
        ">
          Creative IT Developer | Web Designer
        </h2>

        {/* Description */}
        <p className="
          text-base md:text-lg max-w-2xl mx-auto leading-relaxed
          text-gray-600 dark:text-gray-400
        ">
          I build modern, responsive, and beautiful websites using HTML, CSS,
          JavaScript, MySQL and React.
        </p>

      </div>
    </section>
  );
};

export default Hero;