import { 
  FaHtml5, 
  FaCss3Alt, 
  FaJs, 
  FaReact, 
  FaNodeJs, 
  FaPython, 
  FaGitAlt 
} from "react-icons/fa";

import { SiMysql } from "react-icons/si";
import { MdApi } from "react-icons/md";
import { FiLayout } from "react-icons/fi";


const skills = [
  { name: "HTML", icon: <FaHtml5 className="text-orange-500" /> },
  { name: "CSS", icon: <FaCss3Alt className="text-blue-500" /> },
  { name: "JavaScript", icon: <FaJs className="text-yellow-400" /> },
  { name: "React", icon: <FaReact className="text-cyan-400" /> },
  { name: "Node.js", icon: <FaNodeJs className="text-green-500" /> },
  { name: "Python", icon: <FaPython className="text-blue-400" /> },
  { name: "Git", icon: <FaGitAlt className="text-orange-600" /> },
  { name: "MySQL", icon: <SiMysql className="text-blue-400" /> },
  { name: "REST APIs", icon: <MdApi className="text-purple-400" /> },
  { name: "UI/UX", icon: <FiLayout className="text-pink-400" /> },
];


const Skills = () => {

  return (

    <section
      id="skills"
      className="
        py-24
        bg-white dark:bg-[#0a1628]
        transition
      "
    >

      <div className="max-w-5xl mx-auto px-6 text-center">


        {/* Title */}
        <h2
          className="
          text-3xl md:text-4xl
          font-bold mb-4
          text-black dark:text-white
          "
        >
          Skills
        </h2>


        <div className="w-20 h-1 bg-cyan-400 mx-auto mb-14 rounded-full"></div>



        {/* Skills Grid */}
        <div className="
          grid 
          grid-cols-2 
          sm:grid-cols-3 
          md:grid-cols-5 
          gap-6
        ">


          {skills.map((skill)=>(


            <div
              key={skill.name}
              className="
                group

                bg-gray-100 dark:bg-[#111c33]

                border
                border-gray-300 dark:border-gray-800

                hover:border-cyan-400

                rounded-2xl

                py-8 px-4

                flex flex-col items-center justify-center gap-4

                transition-all duration-300

                hover:-translate-y-2

                hover:shadow-xl
                hover:shadow-cyan-500/10
              "
            >



              {/* Icon */}
              <div
                className="
                text-4xl
                group-hover:scale-110
                transition-transform duration-300
                "
              >
                {skill.icon}
              </div>




              {/* Skill Name */}
              <span
                className="
                font-medium

                text-gray-700 dark:text-gray-200

                group-hover:text-black
                dark:group-hover:text-white

                transition
                "
              >
                {skill.name}
              </span>



            </div>


          ))}


        </div>


      </div>


    </section>

  );
};


export default Skills;