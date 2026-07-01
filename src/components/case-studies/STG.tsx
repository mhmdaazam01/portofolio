import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import BackToTop from '../BackToTop';
import SEOHead from '../SEOHead';

export default function STG() {
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
        title="PT Spend Time Group Case Study — Muhammad Azzam Ismail"
        description="Mengelola 14 akun media sosial lintas 6 platform. Showcase Poppo Live, Niki Live, Olamet + workflow multi-account management."
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
          <h1 className="case-title">PT Spend Time Group International</h1>
          <p className="case-subtitle">Mengelola 14 akun media sosial secara end-to-end lintas 6 platform — dari perencanaan konten hingga eksekusi iklan berbayar untuk multiple brands.</p>
          
          <div className="case-meta-grid">
            <div className="case-meta-item">
              <div className="k">PERAN</div>
              <div className="v">Social Media Specialist</div>
            </div>
            <div className="case-meta-item">
              <div className="k">PERIODE</div>
              <div className="v">Januari 2026 – Sekarang</div>
            </div>
            <div className="case-meta-item">
              <div className="k">SCOPE</div>
              <div className="v">14 Akun, 6 Platform</div>
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
              <h2 className="case-section-title">Konteks & Scope Pekerjaan</h2>
              <p className="case-text">
                PT Spend Time Group International adalah perusahaan yang mengelola multiple brands di industri live streaming apps — termasuk <strong>Poppo Live, Niki Live, dan Olamet</strong>. Sebagai Social Media Specialist, saya handle <strong>14 akun media sosial</strong> lintas <strong>6 platform</strong> (Instagram, TikTok, YouTube, X, Threads, Facebook) secara end-to-end.
              </p>
              <p className="case-text">
                <strong>Challenge utama:</strong> Mengelola multi-account dengan karakter brand yang berbeda-beda, audience yang overlap tapi behavior-nya beda per platform, dan deadline yang tight karena semua brand butuh konten konsisten. Ini bukan cuma bikin konten, tapi juga orchestrate workflow, koordinasi dengan editor & copywriter, dan balance resource allocation antar brand.
              </p>
              <p className="case-text">
                Dari 14 akun yang saya kelola, <strong>Poppo Live</strong> adalah best performer dan jadi focus utama — platform live streaming yang target audience-nya creator & host yang cari side income. Konten Poppo Live mix antara edukasi (tips jadi host), recruitment (ajak join agency), dan engagement (jawab pertanyaan audience).
              </p>
            </div>
            <div className="case-sidebar">
              <div className="case-highlight-box">
                <div className="highlight-label">Scale of Work</div>
                <div className="highlight-big">14</div>
                <div className="highlight-desc">Akun aktif yang dikelola simultaneously, lintas 6 platform berbeda</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Brands Section */}
      <section className="case-section case-section--alt">
        <div className="ctn">
          <h2 className="case-section-title">Brands & Platforms yang Dikelola</h2>
          <p className="case-intro">
            Berikut beberapa brand utama yang saya handle, masing-masing dengan karakteristik audience dan tone of voice yang berbeda:
          </p>

          <div className="brands-grid">
            <div className="brand-card">
              <h3 className="brand-name">Poppo Live</h3>
              <p className="brand-desc">Platform live streaming — target audience: creator, host, agency. Konten fokus: tips host, recruitment, edukasi fitur app.</p>
              <div className="brand-links">
                <a href="https://www.instagram.com/poppoliveid/" target="_blank" rel="noopener noreferrer">Instagram ↗</a>
                <a href="https://www.tiktok.com/@poppolive.id" target="_blank" rel="noopener noreferrer">TikTok ↗</a>
              </div>
            </div>

            <div className="brand-card">
              <h3 className="brand-name">Niki Live</h3>
              <p className="brand-desc">Live streaming app — audience serupa Poppo tapi positioning lebih global. Konten mix antara showcase host & tips monetisasi.</p>
              <div className="brand-links">
                <a href="https://www.instagram.com/nikilive.id/" target="_blank" rel="noopener noreferrer">Instagram ↗</a>
                <a href="https://www.tiktok.com/@nikiliveapp" target="_blank" rel="noopener noreferrer">TikTok ↗</a>
              </div>
            </div>

            <div className="brand-card">
              <h3 className="brand-name">Olamet</h3>
              <p className="brand-desc">Agency management platform — target: agency owner & manager. Konten lebih B2B, fokus value proposition & case study success.</p>
              <div className="brand-links">
                <a href="https://www.instagram.com/olametagency/reels/" target="_blank" rel="noopener noreferrer">Instagram ↗</a>
                <a href="https://www.tiktok.com/@olametapp" target="_blank" rel="noopener noreferrer">TikTok ↗</a>
              </div>
            </div>

            <div className="brand-card">
              <h3 className="brand-name">+ 11 Akun Lainnya</h3>
              <p className="brand-desc">Multiple sub-brands & regional accounts yang dikelola dengan approach serupa — content planning, production, publishing, analytics.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Workflow Section */}
      <section className="case-section">
        <div className="ctn">
          <h2 className="case-section-title">Workflow & Process Management</h2>
          <p className="case-intro">
            Mengelola 14 akun sekaligus butuh sistem workflow yang tight dan automation wherever possible:
          </p>

          <div className="process-flow">
            <div className="process-step">
              <div className="process-num">01</div>
              <div className="process-content">
                <h3 className="process-title">Content Planning & Calendar</h3>
                <p className="process-desc">
                  Menyusun content plan mingguan & bulanan untuk semua akun. Tools: Google Sheets untuk master calendar, Notion untuk brief konten. Prioritas akun berdasarkan performa & urgency brand. Batch content ideation per brand biar ga switch context terus-terusan — dedicate 1-2 hari khusus buat brainstorm konten semua akun sekaligus.
                </p>
              </div>
            </div>

            <div className="process-step">
              <div className="process-num">02</div>
              <div className="process-content">
                <h3 className="process-title">Production & Team Coordination</h3>
                <p className="process-desc">
                  <strong>Brief ke video editor:</strong> Kasih reference, mood, dan hasil yang diharapkan — clear brief = less revision. <strong>Brief ke copywriter:</strong> Tone of voice per brand, CTA yang mau diangkat, hashtag strategy. <strong>Quality control:</strong> Review hasil editor & copywriter sebelum masuk ke approval final. Handle revision kalau perlu, tapi effort-nya minimize dengan brief yang jelas di awal.
                </p>
              </div>
            </div>

            <div className="process-step">
              <div className="process-num">03</div>
              <div className="process-content">
                <h3 className="process-title">Publishing & Scheduling</h3>
                <p className="process-desc">
                  Pakai scheduling tools (Meta Business Suite untuk Instagram/Facebook, TikTok Creative Center untuk batch upload) wherever possible. Manual posting kalau perlu real-time adjustment (trending sound, breaking news, atau respon cepat ke audience). Posting di jam optimal per platform & audience demographic masing-masing brand.
                </p>
              </div>
            </div>

            <div className="process-step">
              <div className="process-num">04</div>
              <div className="process-content">
                <h3 className="process-title">Community Management</h3>
                <p className="process-desc">
                  Monitoring & balas komentar/DM di semua akun — ini daily task yang ga bisa di-batch. Prioritas respon: inquiry serius (potensial lead) &gt; engagement tinggi (viral post) &gt; general comment. Escalate ke tim internal kalau ada komplain atau pertanyaan teknis yang butuh jawaban official dari brand.
                </p>
              </div>
            </div>

            <div className="process-step">
              <div className="process-num">05</div>
              <div className="process-content">
                <h3 className="process-title">Paid Ads & Traffic Campaign</h3>
                <p className="process-desc">
                  Menjalankan kampanye iklan berbayar lewat <strong>Meta Ads</strong> (Instagram & Facebook) dan <strong>TikTok Ads</strong> untuk drive traffic ke website atau app download. Setup targeting, budget allocation, creative testing (A/B test different hook & CTA). Monitor performance daily, pause underperforming ads, scale yang works. Report ROI & recommendation ke stakeholder.
                </p>
              </div>
            </div>

            <div className="process-step">
              <div className="process-num">06</div>
              <div className="process-content">
                <h3 className="process-title">Analytics & Reporting</h3>
                <p className="process-desc">
                  Weekly check per akun: reach, engagement rate, follower growth, top-performing content. Monthly report agregat: trend lintas brand, insight apa yang bisa di-replicate, rekomendasi strategic shift. Data-driven decision making — kalau format carousel perform 2x lebih baik dari single image, double down on carousel.
                </p>
              </div>
            </div>
          </div>

          <div className="case-tools">
            <div className="tool-label">Tools & Platform</div>
            <div className="tool-tags">
              <span className="tool-tag">Meta Business Suite</span>
              <span className="tool-tag">TikTok Creative Center</span>
              <span className="tool-tag">Meta Ads Manager</span>
              <span className="tool-tag">TikTok Ads Manager</span>
              <span className="tool-tag">Google Sheets</span>
              <span className="tool-tag">Notion</span>
              <span className="tool-tag">Canva Pro</span>
              <span className="tool-tag">CapCut</span>
            </div>
          </div>
        </div>
      </section>

      {/* Poppo Live Showcase */}
      <section className="case-section case-section--alt">
        <div className="ctn">
          <h2 className="case-section-title">Poppo Live — Best Account Showcase</h2>
          <p className="case-intro">
            Dari 14 akun yang saya kelola, Poppo Live adalah yang paling perform dan jadi benchmark approach konten untuk brand lain. Berikut beberapa konten terbaik:
          </p>

          <div className="video-grid">
            {/* Video 1 */}
            <div className="video-card">
              <div className="video-embed-wrapper">
                <blockquote 
                  className="tiktok-embed" 
                  cite="https://www.tiktok.com/@poppolive.id/video/7637828378023726356" 
                  data-video-id="7637828378023726356" 
                  style={{maxWidth: '605px', minWidth: '325px'}}
                >
                  <section>
                    <a target="_blank" rel="noopener noreferrer" title="@poppolive.id" href="https://www.tiktok.com/@poppolive.id?refer=embed">@poppolive.id</a>
                  </section>
                </blockquote>
              </div>
              <p className="video-desc">
                <strong>Hook strategy:</strong> "Jadi host live keliatannya santai, tapi..." — debunk miskonsepsi & trigger curiosity. Format edukasi yang soft-selling.
              </p>
            </div>

            {/* Video 2 */}
            <div className="video-card">
              <div className="video-embed-wrapper">
                <blockquote 
                  className="tiktok-embed" 
                  cite="https://www.tiktok.com/@poppolive.id/video/7636304061909814548" 
                  data-video-id="7636304061909814548" 
                  style={{maxWidth: '605px', minWidth: '325px'}}
                >
                  <section>
                    <a target="_blank" rel="noopener noreferrer" title="@poppolive.id" href="https://www.tiktok.com/@poppolive.id?refer=embed">@poppolive.id</a>
                  </section>
                </blockquote>
              </div>
              <p className="video-desc">
                <strong>CTA approach:</strong> "Save kode ini (4345306)" — actionable CTA yang clear & specific. Drive conversion dengan friction rendah.
              </p>
            </div>

            {/* Video 3 */}
            <div className="video-card">
              <div className="video-embed-wrapper">
                <blockquote 
                  className="tiktok-embed" 
                  cite="https://www.tiktok.com/@poppolive.id/video/7637063237099359508" 
                  data-video-id="7637063237099359508" 
                  style={{maxWidth: '605px', minWidth: '325px'}}
                >
                  <section>
                    <a target="_blank" rel="noopener noreferrer" title="@poppolive.id" href="https://www.tiktok.com/@poppolive.id?refer=embed">@poppolive.id</a>
                  </section>
                </blockquote>
              </div>
              <p className="video-desc">
                <strong>Value content:</strong> "Jangan sampai side income hilang..." — kasih value dulu (aturan penting) sebelum ask audience buat action. Trust-building content.
              </p>
            </div>

            {/* Video 4 */}
            <div className="video-card">
              <div className="video-embed-wrapper">
                <blockquote 
                  className="tiktok-embed" 
                  cite="https://www.tiktok.com/@poppolive.id/video/7638551517854846228" 
                  data-video-id="7638551517854846228" 
                  style={{maxWidth: '605px', minWidth: '325px'}}
                >
                  <section>
                    <a target="_blank" rel="noopener noreferrer" title="@poppolive.id" href="https://www.tiktok.com/@poppolive.id?refer=embed">@poppolive.id</a>
                  </section>
                </blockquote>
              </div>
              <p className="video-desc">
                <strong>Objection handling:</strong> "Masih ragu buat nyoba?" — address common objections preemptively. Conversion-focused tapi ga pushy.
              </p>
            </div>
          </div>

          <div className="case-note">
            <strong>Content pattern Poppo Live:</strong> Hook yang address pain point atau misconception → Edukasi value proposition → CTA yang specific & low-friction. Formula ini saya replicate (dengan adaptasi) ke brand lain yang saya kelola.
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="case-section">
        <div className="ctn">
          <h2 className="case-section-title">Impact & Scale</h2>
          
          <div className="results-grid">
            <div className="result-card">
              <div className="result-big">14</div>
              <div className="result-label">Akun Aktif</div>
              <div className="result-context">Dikelola simultaneously</div>
            </div>
            <div className="result-card">
              <div className="result-big">6</div>
              <div className="result-label">Platform Berbeda</div>
              <div className="result-context">IG, TikTok, YouTube, X, Threads, FB</div>
            </div>
            <div className="result-card">
              <div className="result-big">100+</div>
              <div className="result-label">Konten / Bulan</div>
              <div className="result-context">Lintas semua akun & platform</div>
            </div>
            <div className="result-card">
              <div className="result-big">2</div>
              <div className="result-label">Ad Platforms</div>
              <div className="result-context">Meta Ads & TikTok Ads</div>
            </div>
          </div>

          <div className="case-text-block">
            <p className="case-text">
              <strong>Scale management:</strong> Mengelola 14 akun bukan cuma soal quantity, tapi gimana maintain quality dan consistency di setiap brand. Dengan workflow yang terstruktur dan coordination yang tight dengan editor & copywriter, semua akun bisa jalan tanpa bottleneck di saya.
            </p>
            <p className="case-text">
              <strong>Cross-platform strategy:</strong> Tiap platform punya behavior audience yang beda — Instagram lebih visual-driven & carousel perform well, TikTok butuh hook cepat & trending sound, YouTube fokus long-form value. Konten yang sama ga bisa auto-replicate lintas platform — harus adapt format & messaging.
            </p>
            <p className="case-text">
              <strong>Paid ads impact:</strong> Campaign iklan berbayar yang saya jalankan berhasil drive traffic signifikan ke website & app download. Budget allocation based on data — platform & audience segment mana yang conversion rate-nya tertinggi, scale di situ.
            </p>
          </div>
        </div>
      </section>

      {/* Insights Section */}
      <section className="case-section case-section--alt">
        <div className="ctn">
          <h2 className="case-section-title">Insight & Learning</h2>
          <div className="insight-box">
            <p className="case-text">
              <strong>Apa yang saya pelajari:</strong>
            </p>
            <ul className="insight-list">
              <li><strong>Systems &gt; hustle.</strong> Mengelola 14 akun secara manual = burnout guaranteed. Yang bikin sustainable: workflow system, delegation yang jelas, dan tools automation. Effort saya fokus ke strategy & QC, execution di-distribute ke tim.</li>
              <li><strong>Context switching kills productivity.</strong> Awalnya saya jump antar brand tiap hari — hasilnya slow & mental exhausting. Sekarang batch per brand: dedicate 1 hari khusus Poppo Live, 1 hari Niki Live, dst. Jauh lebih efisien karena ga buang waktu "masuk ke karakter" brand tiap kali switch.</li>
              <li><strong>Template bukan copy-paste.</strong> Saya punya template brief, template reporting, template content structure — tapi setiap brand tetep butuh customization. Template cuma accelerate process, bukan replace thinking.</li>
              <li><strong>Data adalah sumber truth.</strong> Dengan 14 akun, intuition ga reliable lagi — harus liat data. Format konten apa yang perform di Brand A belum tentu works di Brand B meski audience-nya overlap. Testing terus, scale yang works, cut yang ga.</li>
              <li><strong>Paid ads amplify, ga replace organic.</strong> Konten organik yang bagus bisa diboost dengan ads buat jangkauan lebih luas. Tapi kalau konten organiknya jelek, ads cuma buang budget — audience ga engage. Foundation tetep organic content quality.</li>
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
