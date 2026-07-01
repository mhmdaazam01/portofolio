import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import BackToTop from '../BackToTop';
import SEOHead from '../SEOHead';

export default function HMMEkuitas() {
  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="case-study">
      <SEOHead 
        title="HMM Ekuitas Case Study — Muhammad Azzam Ismail"
        description="Menginisiasi program Mancast — podcast edukasi mahasiswa di YouTube HMM STIE Ekuitas. Case study lengkap production & impact."
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
          <h1 className="case-title">Himpunan Mahasiswa Manajemen — STIE Ekuitas</h1>
          <p className="case-subtitle">Mengelola konten YouTube organisasi kampus dan menginisiasi program "Mancast" — podcast edukasi dan diskusi untuk mahasiswa.</p>
          
          <div className="case-meta-grid">
            <div className="case-meta-item">
              <div className="k">PERAN</div>
              <div className="v">Staff Media & Public Relations</div>
            </div>
            <div className="case-meta-item">
              <div className="k">PERIODE</div>
              <div className="v">Januari 2022 – Desember 2024</div>
            </div>
            <div className="case-meta-item">
              <div className="k">PLATFORM</div>
              <div className="v">YouTube</div>
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
                Sebagai Staff Media & Public Relations di Himpunan Mahasiswa Manajemen STIE Ekuitas, saya bertanggung jawab mengelola konten YouTube organisasi — mulai dari dokumentasi kegiatan kampus hingga program konten original.
              </p>
              <p className="case-text">
                <strong>Challenge utama:</strong> Konten organisasi kampus cenderung monoton dan engagement-nya rendah. Perlu format baru yang lebih engaging dan valuable buat mahasiswa, bukan cuma dokumentasi event doang.
              </p>
              <p className="case-text">
                Dari sini muncul ide <strong>"Mancast"</strong> — program podcast yang membahas topik edukasi, diskusi isu kampus, dan sharing pengalaman mahasiswa. Format podcast lebih conversational, relatable, dan bisa diakses kapan aja (on-demand content).
              </p>
            </div>
            <div className="case-sidebar">
              <div className="case-highlight-box">
                <div className="highlight-label">Program Inisiatif</div>
                <div className="highlight-big" style={{fontSize: '2.4rem'}}>Mancast</div>
                <div className="highlight-desc">Podcast edukasi & diskusi mahasiswa — format original yang saya inisiasi dari nol</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="case-section case-section--alt">
        <div className="ctn">
          <h2 className="case-section-title">Proses & Scope Kerja</h2>
          <p className="case-intro">
            Mengelola YouTube channel organisasi secara end-to-end, dari konsep konten hingga publikasi dan analisis performa.
          </p>

          <div className="process-flow">
            <div className="process-step">
              <div className="process-num">01</div>
              <div className="process-content">
                <h3 className="process-title">Perencanaan Konten & Program Mancast</h3>
                <p className="process-desc">
                  Merancang konsep Mancast: format podcast video, durasi 15-30 menit, topik seputar edukasi bisnis, tips mahasiswa, dan diskusi isu kampus. Menentukan narasumber (dosen, alumni, mahasiswa berprestasi), menyusun rundown episode, dan koordinasi jadwal shooting.
                </p>
              </div>
            </div>

            <div className="process-step">
              <div className="process-num">02</div>
              <div className="process-content">
                <h3 className="process-title">Produksi Video</h3>
                <p className="process-desc">
                  <strong>Shooting:</strong> Setup kamera & audio untuk recording podcast, handle lighting & framing buat hasil yang clean. <strong>Editing:</strong> Cut unnecessary parts, tambahkan lower third (nama & title narasumber), background music subtle, color correction. Tools: Adobe Premiere Pro untuk editing, Audacity untuk audio cleanup kalau perlu.
                </p>
              </div>
            </div>

            <div className="process-step">
              <div className="process-num">03</div>
              <div className="process-content">
                <h3 className="process-title">Desain Thumbnail & Copywriting</h3>
                <p className="process-desc">
                  Thumbnail: desain eye-catching dengan Canva, nampilin wajah narasumber + text overlay judul episode yang catchy. Copywriting: tulis judul yang SEO-friendly tapi tetap menarik, deskripsi video lengkap dengan timestamp per topik pembahasan, tambahkan hashtag & link terkait.
                </p>
              </div>
            </div>

            <div className="process-step">
              <div className="process-num">04</div>
              <div className="process-content">
                <h3 className="process-title">Publikasi & Promosi</h3>
                <p className="process-desc">
                  Upload ke YouTube dengan scheduling optimal, promosi cross-platform (Instagram story, grup WhatsApp mahasiswa, poster digital di kampus). Engage dengan comment section — balas pertanyaan viewer, acknowledge feedback, bangun community di sekitar konten.
                </p>
              </div>
            </div>

            <div className="process-step">
              <div className="process-num">05</div>
              <div className="process-content">
                <h3 className="process-title">Analisis & Evaluasi</h3>
                <p className="process-desc">
                  Review YouTube Analytics: average view duration, CTR thumbnail, traffic source, audience retention graph. Identifikasi mana topik yang paling diminati, format mana yang ditonton sampai habis. Gunakan insight ini untuk improve episode selanjutnya — baik dari sisi topik, narasumber, maupun execution.
                </p>
              </div>
            </div>
          </div>

          <div className="case-tools">
            <div className="tool-label">Tools & Platform</div>
            <div className="tool-tags">
              <span className="tool-tag">Adobe Premiere Pro</span>
              <span className="tool-tag">Canva</span>
              <span className="tool-tag">Audacity</span>
              <span className="tool-tag">YouTube Studio</span>
              <span className="tool-tag">DSLR Camera</span>
            </div>
          </div>
        </div>
      </section>

      {/* Video Showcase Section */}
      <section className="case-section">
        <div className="ctn">
          <h2 className="case-section-title">Mancast Episodes Showcase</h2>
          <p className="case-intro">
            Berikut beberapa episode Mancast yang berhasil mendapat engagement baik dari mahasiswa:
          </p>

          <div className="video-grid" style={{gridTemplateColumns: '1fr'}}>
            {/* Video 1 */}
            <div className="video-card">
              <div className="video-embed-wrapper" style={{minHeight: '400px'}}>
                <iframe 
                  width="100%" 
                  height="400" 
                  src="https://www.youtube.com/embed/Oj1BocziRPc?si=av1keE_nk93B-gVq" 
                  title="YouTube video player" 
                  frameBorder="0" 
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                  referrerPolicy="strict-origin-when-cross-origin" 
                  allowFullScreen
                  style={{borderRadius: '8px'}}
                />
              </div>
              <p className="video-desc" style={{marginTop: '16px'}}>
                <strong>Episode highlight:</strong> Diskusi edukasi dengan format conversational yang engaging — approach podcast membuat topik berat jadi lebih accessible buat mahasiswa.
              </p>
            </div>

            {/* Video 2 */}
            <div className="video-card" style={{marginTop: '48px'}}>
              <div className="video-embed-wrapper" style={{minHeight: '400px'}}>
                <iframe 
                  width="100%" 
                  height="400" 
                  src="https://www.youtube.com/embed/DV0LC_RaN2U?si=DsrFbZ0rTWdG1Mi4" 
                  title="YouTube video player" 
                  frameBorder="0" 
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                  referrerPolicy="strict-origin-when-cross-origin" 
                  allowFullScreen
                  style={{borderRadius: '8px'}}
                />
              </div>
              <p className="video-desc" style={{marginTop: '16px'}}>
                <strong>Content pillar:</strong> Sharing pengalaman & insights — konten yang valuable dan bisa di-rewatch mahasiswa kapan pun butuh referensi atau motivasi.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="case-section case-section--alt">
        <div className="ctn">
          <h2 className="case-section-title">Hasil & Impact</h2>
          
          <div className="results-grid">
            <div className="result-card">
              <div className="result-big">1K+</div>
              <div className="result-label">Total Views</div>
              <div className="result-context">Across all content</div>
            </div>
            <div className="result-card">
              <div className="result-big delta">+4.22%</div>
              <div className="result-label">Engagement Rate</div>
              <div className="result-context">Likes, comments, shares</div>
            </div>
            <div className="result-card">
              <div className="result-big delta">+5.50%</div>
              <div className="result-label">Subscribers Growth</div>
              <div className="result-context">Organic growth</div>
            </div>
            <div className="result-card">
              <div className="result-big delta">+4.3%</div>
              <div className="result-label">Impression CTR</div>
              <div className="result-context">Thumbnail effectiveness</div>
            </div>
          </div>

          <div className="case-text-block">
            <p className="case-text">
              <strong>Impact program Mancast:</strong> Format podcast ini berhasil membawa angin segar di konten YouTube HMM — dari yang sebelumnya cuma dokumentasi event jadi punya program original dengan value edukasi yang jelas. Mahasiswa lebih engage karena topik yang dibahas relatable dan bermanfaat.
            </p>
            <p className="case-text">
              Meski ini organisasi kampus dengan budget minimal dan audience terbatas (mahasiswa Ekuitas), tapi learning-nya besar: gimana bikin konten yang valuable dengan resource terbatas, gimana handle production end-to-end, dan gimana bangun program dari nol sampai jalan konsisten.
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
              <li><strong>Inisiatif matters.</strong> Mancast adalah program yang saya propose dan eksekusi dari nol — bukan tugas yang dikasih. Skill untuk identifikasi gap, propose solusi, dan execute sendiri itu yang saya develop di sini.</li>
              <li><strong>Production skills = foundation.</strong> Pengalaman shooting, editing, color grading, audio mixing di Mancast jadi fondasi teknis yang saya pakai terus sampai sekarang di kerjaan profesional. Tools boleh sama, tapi quality dan speed of execution terus improve.</li>
              <li><strong>Long-form content butuh pacing yang beda.</strong> Podcast 15-30 menit ga bisa pakai hook gimmick kayak short-form content. Harus build narrative arc, manage energy narasumber, dan edit biar ga ada dead air — skill yang totally different dari TikTok/Reels.</li>
              <li><strong>Audience kecil bukan excuse buat setengah-setengah.</strong> Meski cuma audience mahasiswa kampus sendiri, saya treat konten ini kayak production value professional. Hasilnya: habit dan standard quality yang saya bawa ke semua kerjaan berikutnya.</li>
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
            <a href="https://www.youtube.com/@hmmekuitasbdg" target="_blank" rel="noopener noreferrer" className="btn btn-s">
              Lihat YouTube Channel ↗
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
