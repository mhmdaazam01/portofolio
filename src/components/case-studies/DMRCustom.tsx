import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import BackToTop from '../BackToTop';
import SEOHead from '../SEOHead';

export default function DMRCustom() {
  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
    
    // Load TikTok embed script
    const script = document.createElement('script');
    script.src = 'https://www.tiktok.com/embed.js';
    script.async = true;
    document.body.appendChild(script);
    
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="case-study">
      <SEOHead 
        title="DMR Custom Case Study — Muhammad Azzam Ismail"
        description="Membangun TikTok DMR Custom dari 0 ke 330.000+ tayangan dalam 3 bulan. Case study lengkap: strategy, process, dan results."
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
          <h1 className="case-title">DMR Custom</h1>
          <p className="case-subtitle">Membangun kehadiran TikTok dari nol untuk brand konversi motor listrik — dari 0 ke 330.000+ tayangan dalam 3 bulan.</p>
          
          <div className="case-meta-grid">
            <div className="case-meta-item">
              <div className="k">PERAN</div>
              <div className="v">Content Creator TikTok</div>
            </div>
            <div className="case-meta-item">
              <div className="k">PERIODE</div>
              <div className="v">Februari – April 2025</div>
            </div>
            <div className="case-meta-item">
              <div className="k">PLATFORM</div>
              <div className="v">TikTok</div>
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
                DMR Custom adalah brand yang fokus di konversi dan upgrade motor listrik. Sebelum saya masuk, mereka <strong>belum punya kehadiran di TikTok sama sekali</strong> — padahal platform ini adalah tempat paling efektif untuk menjangkau target audience mereka: anak muda yang tertarik dengan kendaraan listrik dan customisasi.
              </p>
              <p className="case-text">
                <strong>Target yang ditetapkan:</strong> Bangun awareness brand, edukasi audience tentang motor listrik, dan bangun engagement organik melalui konten yang informatif tapi tetap entertaining.
              </p>
              <p className="case-text">
                Challenge utama: Niche motor listrik masih relatif baru di Indonesia, jadi perlu cari angle konten yang bisa <em>relatable</em> buat orang awam tapi tetap valuable buat yang udah paham.
              </p>
            </div>
            <div className="case-sidebar">
              <div className="case-highlight-box">
                <div className="highlight-label">Baseline Awal</div>
                <div className="highlight-big">0</div>
                <div className="highlight-desc">Followers, 0 konten, 0 views — mulai dari nol total</div>
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
            Saya handle end-to-end: dari riset tren sampai analisis performa. Ini breakdown proses yang saya jalanin setiap minggu:
          </p>

          <div className="process-flow">
            <div className="process-step">
              <div className="process-num">01</div>
              <div className="process-content">
                <h3 className="process-title">Riset Tren & Ide Konten</h3>
                <p className="process-desc">
                  Monitoring FYP TikTok, tracking trending sound & format, riset kompetitor (akun motor listrik lain & automotif umum). Cari angle yang sedang naik: review, tutorial, behind-the-scenes, debunk mitos, dll.
                </p>
              </div>
            </div>

            <div className="process-step">
              <div className="process-num">02</div>
              <div className="process-content">
                <h3 className="process-title">Produksi Konten</h3>
                <p className="process-desc">
                  <strong>Shooting:</strong> Rekam footage di workshop DMR Custom, ambil b-roll motor, process servis, interview singkat customer.<br/>
                  <strong>Editing:</strong> Adobe Premiere Pro untuk color grading & cuts kompleks, CapCut untuk eksport cepat & overlay teks yang trending di TikTok.<br/>
                  <strong>Copywriting:</strong> Hook kuat di 3 detik pertama, caption yang trigger engagement (pertanyaan, debat, CTA).
                </p>
              </div>
            </div>

            <div className="process-step">
              <div className="process-num">03</div>
              <div className="process-content">
                <h3 className="process-title">Publish & Optimasi</h3>
                <p className="process-desc">
                  Posting di jam optimal (analisis audience active hours), pakai hashtag mix (broad + niche), balas komentar di golden hour pertama buat boost engagement awal. A/B testing berbagai format: carousel vs single video, durasi pendek vs panjang.
                </p>
              </div>
            </div>

            <div className="process-step">
              <div className="process-num">04</div>
              <div className="process-content">
                <h3 className="process-title">Analisis & Iterasi</h3>
                <p className="process-desc">
                  Tracking metrik per video: views, watch time, engagement rate, traffic source. Identifikasi pola: format apa yang perform, hook mana yang retention-nya tinggi, angle apa yang trigger share. Pake insight ini buat refine strategi minggu depan.
                </p>
              </div>
            </div>
          </div>

          <div className="case-tools">
            <div className="tool-label">Tools & Platform</div>
            <div className="tool-tags">
              <span className="tool-tag">Adobe Premiere Pro</span>
              <span className="tool-tag">CapCut</span>
              <span className="tool-tag">TikTok Creator Center</span>
              <span className="tool-tag">Canva (thumbnail)</span>
              <span className="tool-tag">Smartphone (shooting)</span>
            </div>
          </div>
        </div>
      </section>

      {/* Video Showcase Section */}
      <section className="case-section">
        <div className="ctn">
          <h2 className="case-section-title">Video Showcase</h2>
          <p className="case-intro">
            Berikut 4 video terbaik yang berhasil generate engagement tinggi dan representasi range konten yang saya buat:
          </p>

          <div className="video-grid">
            {/* Video 1 */}
            <div className="video-card">
              <div className="video-embed-wrapper">
                <blockquote 
                  className="tiktok-embed" 
                  cite="https://www.tiktok.com/@dhamarcustom/video/7481228339726929158" 
                  data-video-id="7481228339726929158" 
                  style={{maxWidth: '605px', minWidth: '325px'}}
                >
                  <section>
                    <a target="_blank" rel="noopener noreferrer" title="@dhamarcustom" href="https://www.tiktok.com/@dhamarcustom?refer=embed">@dhamarcustom</a>
                  </section>
                </blockquote>
              </div>
              <div className="video-stats">
                <div className="video-stat">
                  <div className="stat-n">234K</div>
                  <div className="stat-l">Views</div>
                </div>
                <div className="video-stat">
                  <div className="stat-n">3,967</div>
                  <div className="stat-l">Likes</div>
                </div>
                <div className="video-stat">
                  <div className="stat-n">76</div>
                  <div className="stat-l">Comments</div>
                </div>
                <div className="video-stat">
                  <div className="stat-n">150</div>
                  <div className="stat-l">Shares</div>
                </div>
              </div>
              <p className="video-desc">
                <strong>Hook strategy:</strong> "Worth it ga?" — trigger debat & engagement. Format review relatable buat orang yang consider konversi motor harian.
              </p>
            </div>

            {/* Video 2 */}
            <div className="video-card">
              <div className="video-embed-wrapper">
                <blockquote 
                  className="tiktok-embed" 
                  cite="https://www.tiktok.com/@dhamarcustom/video/7473812355533589777" 
                  data-video-id="7473812355533589777" 
                  style={{maxWidth: '605px', minWidth: '325px'}}
                >
                  <section>
                    <a target="_blank" rel="noopener noreferrer" title="@dhamarcustom" href="https://www.tiktok.com/@dhamarcustom?refer=embed">@dhamarcustom</a>
                  </section>
                </blockquote>
              </div>
              <p className="video-desc">
                <strong>Format:</strong> Tutorial/tips — "lakuin hal ini kalau pengen motor listrik kamu kenceng". Educational value tinggi, saveworthy content.
              </p>
            </div>

            {/* Video 3 */}
            <div className="video-card">
              <div className="video-embed-wrapper">
                <blockquote 
                  className="tiktok-embed" 
                  cite="https://www.tiktok.com/@dhamarcustom/video/7479036674404519189" 
                  data-video-id="7479036674404519189" 
                  style={{maxWidth: '605px', minWidth: '325px'}}
                >
                  <section>
                    <a target="_blank" rel="noopener noreferrer" title="@dhamarcustom" href="https://www.tiktok.com/@dhamarcustom?refer=embed">@dhamarcustom</a>
                  </section>
                </blockquote>
              </div>
              <p className="video-desc">
                <strong>Angle:</strong> Authority building — "pastiin di tempat yang ngerti". Soft-selling DMR Custom sebagai expert, dengan cinematic visual buat bikin brand keliatan premium.
              </p>
            </div>

            {/* Video 4 */}
            <div className="video-card">
              <div className="video-embed-wrapper">
                <blockquote 
                  className="tiktok-embed" 
                  cite="https://www.tiktok.com/@dhamarcustom/video/7472695754323184901" 
                  data-video-id="7472695754323184901" 
                  style={{maxWidth: '605px', minWidth: '325px'}}
                >
                  <section>
                    <a target="_blank" rel="noopener noreferrer" title="@dhamarcustom" href="https://www.tiktok.com/@dhamarcustom?refer=embed">@dhamarcustom</a>
                  </section>
                </blockquote>
              </div>
              <p className="video-desc">
                <strong>Content type:</strong> Reply to comment — engagement booster, bikin audience feel didengar. Jawab pain point umum (baterai mahal) sambil soft-intro jasa repair.
              </p>
            </div>
          </div>

          <div className="case-note">
            <strong>Note:</strong> Kalau video embed ga load (network block), klik link username di atas tiap video buat buka langsung di TikTok.
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="case-section case-section--alt">
        <div className="ctn">
          <h2 className="case-section-title">Hasil & Impact</h2>
          
          <div className="results-grid">
            <div className="result-card">
              <div className="result-big">330K+</div>
              <div className="result-label">Total Tayangan</div>
              <div className="result-context">Dalam 3 bulan (Feb-Apr 2025)</div>
            </div>
            <div className="result-card">
              <div className="result-big">43</div>
              <div className="result-label">Video / Bulan</div>
              <div className="result-context">Konsistensi posting hampir setiap hari</div>
            </div>
            <div className="result-card">
              <div className="result-big">234K</div>
              <div className="result-label">Views Terbaik</div>
              <div className="result-context">Single video, organic reach</div>
            </div>
            <div className="result-card">
              <div className="result-big delta">+2.48%</div>
              <div className="result-label">Engagement Rate</div>
              <div className="result-context">Di atas benchmark industri (1.5-2%)</div>
            </div>
          </div>

          <div className="case-text-block">
            <p className="case-text">
              <strong>Impact bisnis:</strong> Selain angka reach & engagement, konten yang saya buat berhasil <em>educate</em> audience tentang motor listrik — banyak komentar yang awalnya skeptis, lalu jadi tertarik setelah nonton beberapa video. Brand awareness DMR Custom naik signifikan di komunitas motor Bandung.
            </p>
            <p className="case-text">
              Dari 0 followers ke ratusan follower organik dalam 3 bulan, dengan audience yang genuinely engaged (bukan bot/fake). Traffic ke WhatsApp DMR Custom juga naik, meski saya ga track angka pastinya karena ga handle sales directly.
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
              <li><strong>Hook 3 detik pertama is everything.</strong> Video dengan hook lemah (mulai dari intro brand dulu) average view duration-nya cuma 20-30%. Yang langsung masuk ke pain point atau pertanyaan provokatif bisa tembus 60-70%.</li>
              <li><strong>Reply to comment adalah goldmine.</strong> Format "Membalas @username" itu engagement rate-nya 2x lipat dibanding video biasa, karena audience merasa dilibatkan & algoritma TikTok boost konten yang interaktif.</li>
              <li><strong>Niche content butuh mix edukasi & entertainment.</strong> Pure educational (tutorial teknis) perform bagus di saves tapi views rendah. Pure entertainment (meme motor) views tinggi tapi ga nempel di brand. Sweet spot: edukasi dengan punchline atau twist yang bikin shareable.</li>
              <li><strong>Konsistensi &gt; viral.</strong> Posting 1 video per hari dengan performa stabil (5K-10K views) lebih sustainable daripada ngejar 1 video viral terus mati suri. Algoritma TikTok reward konsistensi.</li>
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
            <a href="https://www.tiktok.com/@dhamarcustom" target="_blank" rel="noopener noreferrer" className="btn btn-s">
              Lihat Akun TikTok ↗
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
