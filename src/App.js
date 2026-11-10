import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
// Removed unused ContactForm import to fix Netlify build error
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
      <Contact />
      <Experience />
      <Footer />
    </>
  );
}

export default App;