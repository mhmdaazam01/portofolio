export default function Creatorlytics() {
  return (
    <section className="creatorlytics" id="creatorlytics">
      <div className="ctn">
        <span className="eyebrow">Side Project</span>
        <h2 className="sec-title">Creatorlytics — Web Reporting Tool</h2>
        <p className="sec-sub">
          Dashboard reporting tool yang saya develop untuk membantu pekerjaan saya sebagai social media specialist.
        </p>

        <div className="creatorlytics-grid">
          {/* Left: About the project */}
          <div className="creatorlytics-content">
            <div className="project-section">
              <h3 className="subsection-title">Tentang Project</h3>
              <p className="project-text">
                Dari pengalaman mengelola 14 akun media sosial, saya butuh tool reporting yang bisa auto-aggregation data dari multiple platform (Instagram, TikTok, YouTube, Facebook, X) dalam satu dashboard. Makanya saya bikin Creatorlytics — web-based reporting tool yang memudahkan tracking performa konten secara real-time.
              </p>
              <p className="project-text">
                Tool ini saya develop sendiri menggunakan <strong>Next.js</strong> dan <strong>React</strong>, dengan fitur dashboard analytics, content calendar, automated reporting, dan data visualization.
              </p>
            </div>

            <div className="cta-section">
              <a 
                href="https://social-media-specialist.vercel.app/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn btn-p"
              >
                Lihat Demo Creatorlytics →
              </a>
              <p className="cta-note">
                <em>Project masih dalam development.</em>
              </p>
            </div>
          </div>

          {/* Right: Screenshots Showcase */}
          <div className="creatorlytics-visual">
            <div className="screenshots-showcase">
              <div className="screenshot-item">
                <a href="https://social-media-specialist.vercel.app/" target="_blank" rel="noopener noreferrer">
                  <img src="/screenshots/landing.png" alt="Creatorlytics Landing Page" />
                  <p className="screenshot-label">Landing Page</p>
                </a>
              </div>
              
              <div className="screenshot-item">
                <a href="https://social-media-specialist.vercel.app/" target="_blank" rel="noopener noreferrer">
                  <img src="/screenshots/dashboard.png" alt="Creatorlytics Dashboard" />
                  <p className="screenshot-label">Dashboard Analytics</p>
                </a>
              </div>

              <div className="screenshot-item">
                <a href="https://social-media-specialist.vercel.app/" target="_blank" rel="noopener noreferrer">
                  <img src="/screenshots/report.png" alt="Creatorlytics Report" />
                  <p className="screenshot-label">Automated Report</p>
                </a>
              </div>

              <div className="screenshot-item">
                <a href="https://social-media-specialist.vercel.app/" target="_blank" rel="noopener noreferrer">
                  <img src="/screenshots/calendar.png" alt="Creatorlytics Content Calendar" />
                  <p className="screenshot-label">Content Calendar</p>
                </a>
              </div>
            </div>

            <div className="tech-stack">
              <div className="tech-label">Tech Stack</div>
              <div className="tech-tags">
                <span className="tech-tag">Next.js</span>
                <span className="tech-tag">React</span>
                <span className="tech-tag">TypeScript</span>
                <span className="tech-tag">API Integration</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
