function Experience() {

  const experiences = [

    {
      title: "L3 Software Development Internship",
      company: "COLEGIO SANTO ANTONIO ARRIA ZACCARIA",
      description:
        "Completed my L3 internship where I gained practical experience in software development, computer systems, IT support, troubleshooting, and applying programming knowledge in a real working environment.",
      year: "2024 - 2025",
    },


    {
      title: "L4 Software Development Internship",
      company: "LANARI TECH",
      description:
        "Completed my L4 internship at LANARI TECH, working on modern software development practices including frontend development, backend systems, databases, APIs, and building real-world applications.",
      year: "2025 - 2026",
    },


    {
      title: "Frontend Development Skills",
      company: "Personal Projects & Practice",
      description:
        "Developed responsive user interfaces using React.js, JavaScript, Tailwind CSS, and modern web development techniques while creating portfolio and management systems.",
      year: "2025 - 2026",
    },


    {
      title: "Full Stack Development",
      company: "Software Development Projects",
      description:
        "Built full-stack applications by connecting frontend interfaces with backend services, databases, authentication systems, and APIs using modern technologies.",
      year: "2025 - 2026",
    },

  ];


  return (

    <section
      id="experience"
      className="py-20 px-6 bg-gray-100 dark:bg-slate-900"
    >

      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900 dark:text-white">
        My Experience
      </h2>


      <div className="max-w-4xl mx-auto relative">


        {/* Vertical line */}

        <div className="absolute left-4 top-0 w-1 h-full bg-blue-500"></div>



        <div className="space-y-10">


          {experiences.map((exp, index) => (

            <div
              key={index}
              className="relative pl-12"
            >


              {/* Circle */}

              <div
                className="
                absolute
                left-0
                top-2
                w-8
                h-8
                bg-blue-500
                rounded-full
                border-4
                border-white
                dark:border-slate-900
                "
              ></div>




              {/* Card */}

              <div
                className="
                bg-white
                dark:bg-slate-800
                p-6
                rounded-xl
                shadow-md
                hover:shadow-xl
                transition
                duration-300
                hover:-translate-y-2
                "
              >



                <h3
                  className="
                  text-xl
                  font-bold
                  text-gray-800
                  dark:text-white
                  "
                >
                  {exp.title}
                </h3>



                <p className="text-blue-500 font-semibold mt-1">
                  {exp.company}
                </p>




                <p
                  className="
                  text-gray-600
                  dark:text-gray-300
                  mt-3
                  leading-relaxed
                  "
                >
                  {exp.description}
                </p>




                <span
                  className="
                  inline-block
                  mt-4
                  text-sm
                  bg-blue-100
                  text-blue-600
                  px-3
                  py-1
                  rounded-full
                  dark:bg-blue-900
                  dark:text-blue-300
                  "
                >
                  {exp.year}
                </span>



              </div>



            </div>

          ))}



        </div>


      </div>


    </section>

  );

}


export default Experience;