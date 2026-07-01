import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import BackToTop from '../BackToTop';
import SEOHead from '../SEOHead';

export default function Yourbuddy() {
  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
    
    // Load Instagram embed script
    const igScript = document.createElement('script');
    igScript.src = 'https://www.instagram.com/embed.js';
    igScript.async = true;
    document.body.appendChild(igScript);
    
    // Load TikTok embed script
    const ttScript = document.createElement('script');
    ttScript.src = 'https://www.tiktok.com/embed.js';
    ttScript.async = true;
    document.body.appendChild(ttScript);
    
    return () => {
      document.body.removeChild(igScript);
      document.body.removeChild(ttScript);
    };
  }, []);

  return (
    <div className="case-study">
      <SEOHead 
        title="Yourbuddy Case Study — Muhammad Azzam Ismail"
        description="Membangun brand awareness Yourbuddy dari nol di Instagram & TikTok. +4% ER Instagram, +5.31% ER TikTok dalam 3 bulan."
        type="article"
      />
      <BackToTop />

      {/* Minimal Navigation */}
      <nav className="case-nav">
        <div className="case-nav-inner">
          <Link to="/" className="case-logo">
            <span className="mark"></span>
            Muhammad Azzam Ismail
          </Link>
          <Link to="/#work" className="case-back">← Kembali ke Portfolio</Link>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="case-hero">
        <div className="ctn">
          <Link to="/#work" className="case-breadcrumb">Pengalaman Kerja</Link>
          <h1 className="case-title">Yourbuddy</h1>
          <p className="case-subtitle">Membangun kehadiran digital dari nol untuk brand tour organizer outdoor — mengelola Instagram & TikTok dengan fokus awareness dan engagement organik.</p>
          
          <div className="case-meta-grid">
            <div className="case-meta-item">
              <div className="k">PERAN</div>
              <div className="v">Social Media Specialist</div>
            </div>
            <div className="case-meta-item">
              <div className="k">PERIODE</div>
              <div className="v">Juli – September 2025 (3 bulan)</div>
            </div>
            <div className="case-meta-item">
              <div className="k">PLATFORM</div>
              <div className="v">Instagram & TikTok</div>
            </div>
            <div className="case-meta-item">
              <div className="k">LOKASI</div>
              <div className="v">Bandung</div>
            </div>
          </div>
        </div>
      </section>

      {/* Context Section */}
      <section className="case-section">
        <div className="ctn">
          <div className="case-grid">
            <div className="case-content">
              <h2 className="case-section-title">Konteks & Brief</h2>
              <p className="case-text">
                Yourbuddy adalah tour organizer yang menyediakan paket wisata outdoor dan aktivitas petualangan. Sebelum saya masuk, mereka <strong>belum punya akun media sosial dan konten sama sekali</strong> — pure start from scratch.
              </p>
              <p className="case-text">
                <strong>Target utama:</strong> Bangun brand awareness di kalangan anak muda yang suka outdoor activities, mulai establish presence di Instagram dan TikTok, dan ciptakan engagement organik melalui konten visual yang menarik.
              </p>
              <p className="case-text">
                Challenge: Niche outdoor tour organizer itu kompetitif — banyak brand serupa. Perlu cari angle yang unik biar stand out, dan konten harus balance antara aspirational (bikin orang pengen ikut trip) dan approachable (ga keliatan terlalu mahal/eksklusif).
              </p>
            </div>
            <div className="case-sidebar">
              <div className="case-highlight-box">
                <div className="highlight-label">Baseline Awal</div>
                <div className="highlight-big">0</div>
                <div className="highlight-desc">Akun belum ada, dimulai dari setup awal hingga strategi konten pertama</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="case-section case-section--alt">
        <div className="ctn">
          <h2 className="case-section-title">Proses Kerja</h2>
          <p className="case-intro">
            Mengelola dua platform sekaligus dengan karakteristik audience yang berbeda — Instagram untuk storytelling visual, TikTok untuk viral reach.
          </p>

          <div className="process-flow">
            <div className="process-step">
              <div className="process-num">01</div>
              <div className="process-content">
                <h3 className="process-title">Riset & Strategi Konten</h3>
                <p className="process-desc">
                  Analisis kompetitor (tour organizer lokal & nasional), riset trending outdoor content, identifikasi audience pain points. <strong>Instagram:</strong> fokus carousel informasi & storytelling trip, <strong>TikTok:</strong> behind-the-scenes, tips outdoor, dan konten entertaining. Menyusun content pillar: trip highlights, tips & tricks, testimonial, dan brand story.
                </p>
              </div>
            </div>

            <div className="process-step">
              <div className="process-num">02</div>
              <div className="process-content">
                <h3 className="process-title">Produksi Konten Visual</h3>
                <p className="process-desc">
                  <strong>Carousel Instagram:</strong> Desain multi-slide dengan Canva, info paket trip, tips persiapan outdoor, destinasi rekomendasi. Layout clean & on-brand, typography readable di mobile.<br/>
                  <strong>Video TikTok & Reels:</strong> Rekam footage trip (landscape, aktivitas, candid moment), edit dengan CapCut buat quick turnaround, tambahkan trending sound & text overlay buat hook kuat.
                </p>
              </div>
            </div>

            <div className="process-step">
              <div className="process-num">03</div>
              <div className="process-content">
                <h3 className="process-title">Copywriting & Caption</h3>
                <p className="process-desc">
                  Tone of voice: friendly, inspiring, tapi ga over-enthusiastic. Caption mix info (detail trip, harga, itinerary) dengan storytelling (kenapa outdoor activities itu worth it, pengalaman participant). CTA clear tapi soft-selling: ajak engage lewat comment/DM, bukan langsung jualan keras.
                </p>
              </div>
            </div>

            <div className="process-step">
              <div className="process-num">04</div>
              <div className="process-content">
                <h3 className="process-title">Publish & Community Engagement</h3>
                <p className="process-desc">
                  Schedule posting konsisten (3-4x seminggu per platform), posting di jam prime-time (sore-malam buat Instagram, pagi & malam buat TikTok). Aktif balas komentar & DM — banyak yang nanya detail trip lewat DM, jadi ini channel penting buat konversi inquiry. Monitor performance real-time, double down on format yang works.
                </p>
              </div>
            </div>

            <div className="process-step">
              <div className="process-num">05</div>
              <div className="process-content">
                <h3 className="process-title">Analisis & Optimasi</h3>
                <p className="process-desc">
                  Weekly check Instagram Insights & TikTok Analytics: mana konten yang engagement rate-nya tinggi, mana yang reach luas tapi engagement rendah (artinya hook bagus tapi content ga nempel). Iterasi berdasarkan data — kalau carousel "Tips Hiking" perform bagus, bikin series serupa. Kalau video behind-the-scenes trip dapat banyak saves, prioritas format itu.
                </p>
              </div>
            </div>
          </div>

          <div className="case-tools">
            <div className="tool-label">Tools & Platform</div>
            <div className="tool-tags">
              <span className="tool-tag">Canva Pro</span>
              <span className="tool-tag">CapCut</span>
              <span className="tool-tag">Instagram Creator Studio</span>
              <span className="tool-tag">TikTok Creator Center</span>
              <span className="tool-tag">Smartphone</span>
            </div>
          </div>
        </div>
      </section>

      {/* Content Showcase Section */}
      <section className="case-section">
        <div className="ctn">
          <h2 className="case-section-title">Content Showcase</h2>
          <p className="case-intro">
            Berikut pilihan konten yang representasi range format & approach yang saya jalankan di Instagram & TikTok Yourbuddy:
          </p>

          <div className="video-grid">
            {/* Instagram Post 1 */}
            <div className="video-card">
              <div className="video-embed-wrapper" style={{minHeight: '500px'}}>
                <blockquote 
                  className="instagram-media" 
                  data-instgrm-captioned 
                  data-instgrm-permalink="https://www.instagram.com/reel/DL9MuQeRgrd/?utm_source=ig_embed&utm_campaign=loading" 
                  data-instgrm-version="14" 
                  style={{
                    background: '#FFF',
                    border: 0,
                    borderRadius: '3px',
                    boxShadow: '0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15)',
                    margin: '1px',
                    maxWidth: '540px',
                    minWidth: '326px',
                    padding: 0,
                    width: '99.375%'
                  }}
                >
                  <div style={{padding: '16px'}}>
                    <a 
                      href="https://www.instagram.com/reel/DL9MuQeRgrd/?utm_source=ig_embed&utm_campaign=loading" 
                      style={{
                        background: '#FFFFFF',
                        lineHeight: 0,
                        padding: 0,
                        textAlign: 'center',
                        textDecoration: 'none',
                        width: '100%'
                      }} 
                      target="_blank" 
                      rel="noopener noreferrer"
                    >
                      View this post on Instagram
                    </a>
                  </div>
                </blockquote>
              </div>
              <p className="video-desc">
                <strong>Format:</strong> Instagram Reel — showcase trip experience dengan cinematic shots & dynamic editing. Fokus bikin audience "feel" pengalaman outdoor, bukan cuma info.
              </p>
            </div>

            {/* Instagram Post 2 */}
            <div className="video-card">
              <div className="video-embed-wrapper" style={{minHeight: '500px'}}>
                <blockquote 
                  className="instagram-media" 
                  data-instgrm-captioned 
                  data-instgrm-permalink="https://www.instagram.com/p/DMCbi2aRXwg/?utm_source=ig_embed&utm_campaign=loading" 
                  data-instgrm-version="14" 
                  style={{
                    background: '#FFF',
                    border: 0,
                    borderRadius: '3px',
                    boxShadow: '0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15)',
                    margin: '1px',
                    maxWidth: '540px',
                    minWidth: '326px',
                    padding: 0,
                    width: '99.375%'
                  }}
                >
                  <div style={{padding: '16px'}}>
                    <a 
                      href="https://www.instagram.com/p/DMCbi2aRXwg/?utm_source=ig_embed&utm_campaign=loading" 
                      style={{
                        background: '#FFFFFF',
                        lineHeight: 0,
                        padding: 0,
                        textAlign: 'center',
                        textDecoration: 'none',
                        width: '100%'
                      }} 
                      target="_blank" 
                      rel="noopener noreferrer"
                    >
                      View this post on Instagram
                    </a>
                  </div>
                </blockquote>
              </div>
              <p className="video-desc">
                <strong>Angle:</strong> Carousel informasi — breakdown detail trip, itinerary, atau tips praktis. High-value content yang sering di-save audience buat referensi.
              </p>
            </div>

            {/* Instagram Post 3 */}
            <div className="video-card">
              <div className="video-embed-wrapper" style={{minHeight: '500px'}}>
                <blockquote 
                  className="instagram-media" 
                  data-instgrm-captioned 
                  data-instgrm-permalink="https://www.instagram.com/p/DNs9vTE5KhW/?utm_source=ig_embed&utm_campaign=loading" 
                  data-instgrm-version="14" 
                  style={{
                    background: '#FFF',
                    border: 0,
                    borderRadius: '3px',
                    boxShadow: '0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15)',
                    margin: '1px',
                    maxWidth: '540px',
                    minWidth: '326px',
                    padding: 0,
                    width: '99.375%'
                  }}
                >
                  <div style={{padding: '16px'}}>
                    <a 
                      href="https://www.instagram.com/p/DNs9vTE5KhW/?utm_source=ig_embed&utm_campaign=loading" 
                      style={{
                        background: '#FFFFFF',
                        lineHeight: 0,
                        padding: 0,
                        textAlign: 'center',
                        textDecoration: 'none',
                        width: '100%'
                      }} 
                      target="_blank" 
                      rel="noopener noreferrer"
                    >
                      View this post on Instagram
                    </a>
                  </div>
                </blockquote>
              </div>
              <p className="video-desc">
                <strong>Content pillar:</strong> Behind-the-scenes atau candid moment — humanize brand, bikin relatable. Konten kayak gini engagement rate-nya tinggi karena audience connect secara emosional.
              </p>
            </div>

            {/* TikTok Photo Post */}
            <div className="video-card">
              <div className="video-embed-wrapper" style={{minHeight: '500px'}}>
                <blockquote 
                  className="tiktok-embed" 
                  cite="https://www.tiktok.com/@yourbuddy_in/photo/7528414597217275141" 
                  data-video-id="7528414597217275141" 
                  style={{maxWidth: '605px', minWidth: '325px', margin: '0 auto'}}
                >
                  <section>
                    <a 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      title="@yourbuddy_in" 
                      href="https://www.tiktok.com/@yourbuddy_in?refer=embed"
                    >
                      @yourbuddy_in
                    </a>
                  </section>
                </blockquote>
              </div>
              <p className="video-desc">
                <strong>TikTok approach:</strong> Photo carousel format — multi-slide visual storytelling. Konten TikTok lebih casual & engaging, memanfaatkan trending format yang sedang populer.
              </p>
            </div>
          </div>

          <div className="case-note">
            <strong>Note:</strong> Kalau embed Instagram/TikTok ga load karena network block, klik link di embed buat buka langsung di platform aslinya.
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="case-section case-section--alt">
        <div className="ctn">
          <h2 className="case-section-title">Hasil & Impact</h2>
          
          <div className="results-grid">
            <div className="result-card">
              <div className="result-big delta">+4%</div>
              <div className="result-label">Engagement Rate Instagram</div>
              <div className="result-context">Dalam 3 bulan</div>
            </div>
            <div className="result-card">
              <div className="result-big delta">+153</div>
              <div className="result-label">Followers Instagram</div>
              <div className="result-context">Growth organik, no ads</div>
            </div>
            <div className="result-card">
              <div className="result-big delta">+5.31%</div>
              <div className="result-label">Engagement Rate TikTok</div>
              <div className="result-context">Di atas rata-rata industri</div>
            </div>
            <div className="result-card">
              <div className="result-big delta">+275</div>
              <div className="result-label">Profile Visit TikTok</div>
              <div className="result-context">Traffic ke bio & link</div>
            </div>
          </div>

          <div className="case-text-block">
            <p className="case-text">
              <strong>Impact awareness:</strong> Dari nol menjadi established presence di Instagram & TikTok. Brand Yourbuddy mulai dikenal di komunitas outdoor Bandung, dengan engagement organik yang genuine (bukan follower bot). Banyak inquiry masuk lewat DM Instagram & comment section — indikasi awareness yang terkonversi jadi interest.
            </p>
            <p className="case-text">
              <strong>Content performance:</strong> Konten carousel informasi (tips hiking, packing list) punya save rate tinggi — artinya audience anggap valuable & worth revisit. Video behind-the-scenes trip dapat engagement tertinggi karena audience connect dengan experience-nya. Format yang paling drive inquiry: post showcase trip dengan detail harga & itinerary di caption.
            </p>
          </div>
        </div>
      </section>

      {/* Insights Section */}
      <section className="case-section">
        <div className="ctn">
          <h2 className="case-section-title">Insight & Learning</h2>
          <div className="insight-box">
            <p className="case-text">
              <strong>Apa yang saya pelajari:</strong>
            </p>
            <ul className="insight-list">
              <li><strong>Dual-platform butuh adaptasi format, bukan copy-paste.</strong> Konten yang works di Instagram (carousel panjang, caption detail) ga selalu works di TikTok (butuh hook cepat, info singkat). Effort lebih besar, tapi reach lebih luas.</li>
              <li><strong>Dari nol itu advantage, bukan hambatan.</strong> Ga ada legacy content jelek atau brand perception yang udah terlanjur salah. Bisa define tone & direction dari awal, trial-error tanpa khawatir ngerusak brand image yang udah ada.</li>
              <li><strong>Value content &gt; promotional content.</strong> Post yang pure jualan ("Daftar trip sekarang!") engagement-nya rendah. Yang kasih value duluan (tips, insight, inspiration) justru drive lebih banyak inquiry organik — audience approach karena trust, bukan karena dipaksa.</li>
              <li><strong>Community engagement is the real growth hack.</strong> Balas komentar cepat, reply DM detail, acknowledge user-generated content (repost foto participant) — ini yang bangun loyalty. Follower count boleh lambat, tapi yang stay itu genuinely engaged.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="case-cta">
        <div className="ctn">
          <h2 className="case-cta-title">Lihat Pengalaman Lainnya</h2>
          <div className="case-cta-buttons">
            <Link to="/#work" className="btn btn-p">← Kembali ke Portfolio</Link>
            <a href="https://www.instagram.com/yourbuddy_in/" target="_blank" rel="noopener noreferrer" className="btn btn-s">
              Lihat Instagram ↗
            </a>
            <a href="https://www.tiktok.com/@yourbuddy_in" target="_blank" rel="noopener noreferrer" className="btn btn-s">
              Lihat TikTok ↗
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer>
        <div className="footer-inner">
          <div>&copy; 2025 Muhammad Azzam Ismail</div>
          <div>Portfolio — Case Study</div>
        </div>
      </footer>
    </div>
  );
}
