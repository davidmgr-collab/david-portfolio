import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import Experience from './components/Experience';


function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
{/* <ContactForm/> */}
      <Contact />
      <Experience/>
      <Footer />
    
    </>
  );
}

export default App;