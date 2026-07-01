import { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Stats from './components/Stats';
import WorkExperience from './components/WorkExperience';
import Skills from './components/Skills';
import Creatorlytics from './components/Creatorlytics';
import Contact from './components/Contact';
import Footer from './components/Footer';
import BackToTop from './components/BackToTop';
import SEOHead from './components/SEOHead';
import DMRCustom from './components/case-studies/DMRCustom';
import Yourbuddy from './components/case-studies/Yourbuddy';
import HMMEkuitas from './components/case-studies/HMMEkuitas';
import STG from './components/case-studies/STG';
import './index.css';

function HomePage() {
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
      <SEOHead />
      <BackToTop />
      <Navbar />
      <main id="top">
        <Hero />
        <Stats />
        <WorkExperience />
        <Skills />
        <Creatorlytics />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/case-studies/dmr-custom" element={<DMRCustom />} />
        <Route path="/case-studies/yourbuddy" element={<Yourbuddy />} />
        <Route path="/case-studies/hmm-ekuitas" element={<HMMEkuitas />} />
        <Route path="/case-studies/stg" element={<STG />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
