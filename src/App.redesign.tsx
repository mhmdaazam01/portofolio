import './redesign.css';

function Navigation() {
  return (
    <nav className="nav">
      <div className="nav-inner">
        <a href="#top" className="nav-logo">Muhammad Azzam Ismail</a>
        <div className="nav-links">
          <a href="#work">WORKS</a>
          <a href="#creatorlytics">CREATORLYTICS</a>
          <a href="#about">ABOUT</a>
          <a href="#contact" className="nav-cta">HIRE ME</a>
        </div>
      </div>
    </nav>
  );
}

function Hero() {
  return (
    <section className="hero" id="top">
      <div className="hero-inner">
        <div className="hero-content">
          <div className="hero-eyebrow">SOCIAL MEDIA SPECIALIST & CONTENT CREATOR</div>
          <h1>Konten yang terencana.<br/>Hasil yang terukur.</h1>
          <p className="hero-desc">
            Saya Azzam — lulusan S1 Manajemen STIE Ekuitas dengan pengalaman langsung mengelola media sosial. Menangani proses dari perencanaan dan produksi konten hingga evaluasi performa, dengan rekam jejak mengelola 14 akun media sosial dan menembus 330.000+ tayangan dari satu kampanye TikTok.
          </p>
          <div className="hero-ctas">
            <a href="#work" className="btn btn-primary">LIHAT PENGALAMAN</a>
            <a href="https://bit.ly/portokaryasaya" target="_blank" rel="noopener noreferrer" className="btn btn-secondary">
              PORTOFOLIO LENGKAP
            </a>
          </div>
          <div className="hero-meta">
            <div className="hero-meta-item">
              <div className="hero-meta-label">LOKASI</div>
              <div className="hero-meta-value">Bandung, Jawa Barat</div>
            </div>
            <div className="hero-meta-item">
              <div className="hero-meta-label">PENDIDIKAN</div>
              <div className="hero-meta-value">S1 Manajemen, STIE Ekuitas</div>
            </div>
            <div className="hero-meta-item">
              <div className="hero-meta-label">STATUS</div>
              <div className="hero-meta-value">Tersedia untuk peluang penuh waktu</div>
            </div>
          </div>
        </div>
        <div className="hero-preview">
          <div className="hero-preview-title">Konten yang terencana. Hasil yang terukur.</div>
          <div className="hero-preview-content">
            Dari perencanaan hingga evaluasi — saya handle full cycle content creation dengan pendekatan data-driven.
          </div>
          <div className="hero-preview-stats">
            <div className="preview-stat">
              <div className="preview-stat-num">14</div>
              <div className="preview-stat-label">AKUN</div>
            </div>
            <div className="preview-stat">
              <div className="preview-stat-num">43</div>
              <div className="preview-stat-label">VIDEO</div>
            </div>
            <div className="preview-stat">
              <div className="preview-stat-num">4</div>
              <div className="preview-stat-label">BRAND</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Stats() {
  return (
    <section className="stats">
      <div className="stats-inner">
        <div className="stat">
          <div className="stat-num">330K+</div>
          <div className="stat-label">TOTAL TAYANGAN TIKTOK</div>
        </div>
        <div className="stat">
          <div className="stat-num">14</div>
          <div className="stat-label">AKUN MEDIA SOSIAL AKTIF</div>
        </div>
        <div className="stat">
          <div className="stat-num">43</div>
          <div className="stat-label">VIDEO DIPRODUKSI / BULAN</div>
        </div>
        <div className="stat">
          <div className="stat-num">4</div>
          <div className="stat-label">BRAND & ORGANISASI</div>
        </div>
      </div>
    </section>
  );
}

function Work() {
  const works = [
    {
      num: '01',
      title: 'Social Media Manager',
      role: 'PT Spend Time Group',
      desc: 'Mengelola 14 akun besar termasuk Poppo Live. Meningkatkan engagement lintas 6 platform social media dengan strategi konten terintegrasi dan alokasi resource yang efisien.',
      link: '/case-studies/stg'
    },
    {
      num: '02',
      title: 'Community Manager',
      role: 'Yourbuddy',
      desc: 'Membangun komunitas dari nol dengan fokus engagement organik. Meningkatkan interaksi audience melalui content strategy yang personal dan responsif.',
      link: '/case-studies/yourbuddy'
    },
    {
      num: '03',
      title: 'Social Media Analyst',
      role: 'DMR Custom',
      desc: 'Menganalisis dan mengolah data untuk strategi konten berbasis insight. Meraih 330K+ views dengan pendekatan data-driven dan testing sistematis.',
      link: '/case-studies/dmr-custom'
    }
  ];

  return (
    <section className="section work" id="work">
      <div className="section-header">
        <h2 className="section-title">Empat peran, satu cara kerja yang sama.</h2>
        <p className="section-subtitle">
          Riset tren, eksekusi konten, lalu ukur hasilnya — pendekatan yang sama saya ulang di setiap platform dan setiap brand.
        </p>
      </div>
      <div className="work-grid">
        {works.map((work) => (
          <a key={work.num} href={work.link} className="work-card">
            <div className="work-card-num">{work.num}</div>
            <h3 className="work-card-title">{work.title}</h3>
            <div className="work-card-role">{work.role}</div>
            <p className="work-card-desc">{work.desc}</p>
            <span className="work-card-link">VIEW CASE STUDY →</span>
          </a>
        ))}
      </div>
    </section>
  );
}

function Creatorlytics() {
  return (
    <section className="creatorlytics" id="creatorlytics">
      <div className="creatorlytics-inner">
        <div className="creatorlytics-content">
          <div className="creatorlytics-eyebrow">SIDE PROJECT</div>
          <h2 className="creatorlytics-title">Creatorlytics</h2>
          <p className="creatorlytics-desc">
            Dashboard reporting tool yang saya develop buat memudahkan reporting lintas platform. Built with Next.js, React, dengan automated analytics dan data visualization.
          </p>
          <a 
            href="https://social-media-specialist.vercel.app/" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="btn btn-primary"
          >
            LIHAT DEMO
          </a>
        </div>
        <div className="creatorlytics-preview">
          <img src="/screenshots/dashboard.png" alt="Creatorlytics Dashboard" />
        </div>
      </div>
    </section>
  );
}

function FooterCTA() {
  return (
    <section className="footer-cta" id="contact">
      <h2 className="footer-cta-title">Mari berkolaborasi.</h2>
      <a href="mailto:azzamismail@example.com" className="btn">
        HUBUNGI SAYA
      </a>
    </section>
  );
}

function Footer() {
  return (
    <footer>
      <div className="footer-inner">
        <div className="footer-name">Azzam</div>
        <div className="footer-links">
          <a href="https://www.linkedin.com/in/azzam-ismail" target="_blank" rel="noopener noreferrer">LINKEDIN</a>
          <a href="https://www.instagram.com/azzam" target="_blank" rel="noopener noreferrer">INSTAGRAM</a>
          <a href="https://www.threads.net/@azzam" target="_blank" rel="noopener noreferrer">THREADS</a>
          <a href="mailto:azzam@example.com">EMAIL</a>
        </div>
        <div className="footer-copy">© 2025 Muhammad Azzam Ismail · Built for humans</div>
      </div>
    </footer>
  );
}

function App() {
  return (
    <>
      <Navigation />
      <main>
        <Hero />
        <Stats />
        <Work />
        <Creatorlytics />
        <FooterCTA />
      </main>
      <Footer />
    </>
  );
}

export default App;
