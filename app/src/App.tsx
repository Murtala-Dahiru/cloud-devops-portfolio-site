import './App.css';
import Navigation from './sections/Navigation';
import Hero from './sections/Hero';
import Specializations from './sections/Specializations';
import Projects from './sections/Projects';
import Philosophy from './sections/Philosophy';
import Skills from './sections/Skills';
import About from './sections/About';
import Contact from './sections/Contact';

function App() {
  return (
    <div className="min-h-screen bg-navy text-white overflow-x-hidden">
      <Navigation />
      <main>
        <Hero />
        <Specializations />
        <Projects />
        <Philosophy />
        <Skills />
        <About />
        <Contact />
      </main>
    </div>
  );
}

export default App;
