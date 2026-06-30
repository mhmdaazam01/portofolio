import { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Stats from './components/Stats';
import WorkExperience from './components/WorkExperience';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './index.css';

function App() {
  useEffect(() => {
    // Add js-enabled class to handle initial states for animations
    document.documentElement.classList.add('js-enabled');

    const els = document.querySelectorAll('.fu');
    if ('IntersectionObserver' in window) {
      const io = new IntersectionObserver((entries) => {
        entries.forEach(e => {
          if (e.isIntersecting) {
            e.target.classList.add('in');
            io.unobserve(e.target);
          }
        });
      }, { threshold: 0.1 });
      els.forEach(el => io.observe(el));
    } else {
      els.forEach(el => el.classList.add('in'));
    }
  }, []);

  return (
    <>
      <Navbar />
      <main id="top">
        <Hero />
        <Stats />
        <WorkExperience />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;
