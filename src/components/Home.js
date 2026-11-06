import { useState } from "react";
import { Typewriter } from "react-simple-typewriter";
import ContactForm from "../components/ContactForm";

const Home = () => {
  const [openForm, setOpenForm] = useState(false);

  return (
    <section className="min-h-screen bg-[#081225] flex items-center justify-center px-6">
      <div className="text-center">
        <h1 className="text-5xl md:text-7xl font-bold text-white">
          David Mugiraneza
        </h1>

       
        <h2 className="text-2xl text-cyan-400 mt-4 min-h-[40px]">
          <span>I am a </span>
          <span className="font-semibold text-white">
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

        <p className="text-gray-400 max-w-xl mx-auto mt-6">
          I build modern web applications, school management systems, and responsive websites.
        </p>

        <button
          onClick={() => setOpenForm(true)}
          className="mt-8 bg-cyan-400 text-black px-8 py-4 rounded-full font-bold hover:bg-cyan-300 transition"
        >
          Say Hello 👋
        </button>
      </div>

      {openForm && <ContactForm closeForm={() => setOpenForm(false)} />}
    </section>
  );
};

export default Home;