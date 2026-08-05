import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const Projects = () => {

  const projects = [
    {
      number: "01",
      title: "Sozi Primary School Attendance System",
      description:
        "A QR code based attendance management system that helps schools register students, generate QR codes, and track attendance digitally.",
      tech: ["React", "Node.js", "Express", "MySQL", "QR Code"],
      github:
        "https://github.com/davidmgr-collab/sozi-attendance-system",
      demo:
        "https://sozi-attendance.vercel.app",
      image: "/sozi.png",
    },

    {
      number: "02",
      title: "Kagogo Secondary School Dashboard",
      description:
        "A modern school administration dashboard for managing students, teachers, classes, and school activities.",
      tech: ["React", "Tailwind CSS", "React Router", "Node.js"],
      github:
        "https://github.com/davidmgr-collab/kagogo-dashboard",
      demo:
        "https://kagogo-dashboard.vercel.app",
      image: "/kagogo.png",
    },

    {
      number: "03",
      title: "David Mugiraneza Portfolio",
      description:
        "A professional developer portfolio website showing my skills, experience, and projects.",
      tech: ["React", "Tailwind CSS", "JavaScript"],
      github:
        "https://github.com/davidmgr-collab/david-portfolio",
      demo:
        "https://davidmugiraneza.vercel.app",
      image: "/portfolio.png",
    },
  ];

  return (
    <section
      id="projects"
      className="py-24 bg-white dark:bg-gradient-to-b dark:from-[#081225] dark:to-[#0a1628]"
    >
      <div className="max-w-6xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-black dark:text-white">
            My Projects
          </h2>
          <p className="mt-4 text-gray-600 dark:text-gray-400">
            Some systems and applications I have built as an IT Developer.
          </p>
          <div className="w-20 h-1 bg-cyan-400 mx-auto mt-4 rounded-full"></div>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {projects.map((project) => (

            <div
              key={project.number}
              className="
              group
              bg-gray-100 dark:bg-white/5
              border border-gray-200 dark:border-white/10
              rounded-2xl
              overflow-hidden
              shadow-lg
              hover:shadow-cyan-500/20
              transition duration-500
              hover:-translate-y-3
              "
            >

              {/* Image */}
              <div className="overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition duration-500"
                />
              </div>

              {/* Content */}
              <div className="p-6 relative">

                {/* Number */}
                <span className="absolute top-4 right-5 text-4xl font-bold text-gray-200 dark:text-white/10">
                  {project.number}
                </span>

                {/* Title */}
                <h3 className="text-xl font-bold mb-2 text-black dark:text-white group-hover:text-cyan-400 transition">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 dark:text-gray-400 mb-4 text-sm">
                  {project.description}
                </p>

                {/* Tech */}
                <div className="flex flex-wrap gap-2 mb-5">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs px-3 py-1 rounded-full bg-cyan-400/10 text-cyan-600 dark:text-cyan-300 border border-cyan-400/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Buttons */}
                <div className="flex justify-between items-center">

                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 text-sm text-gray-700 dark:text-gray-300 hover:text-cyan-400"
                  >
                    <FaGithub />
                    Code
                  </a>

                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 text-sm font-semibold text-cyan-500 hover:text-cyan-300"
                  >
                    Live
                    <FaExternalLinkAlt />
                  </a>

                </div>

              </div>

            </div>

          ))}

        </div>
      </div>
    </section>
  );
};

export default Projects;