export default function Skills() {
  return (
    <section className="skills" id="skills">
      <div className="ctn">
        <span className="eyebrow">Skill & Tools</span>
        <h2 className="sec-title">Yang saya kuasai.</h2>

        <div className="skills-grid">
          <div className="skill-col fu">
            <h3>Tools</h3>
            <p className="skill-flow">
              <b>Adobe Premiere Pro</b><span className="sp">&middot;</span>
              <b>Adobe Photoshop</b><span className="sp">&middot;</span>
              <b>Canva</b><span className="sp">&middot;</span>
              <b>CapCut</b><span className="sp">&middot;</span>
              <b>Meta Ads</b><span className="sp">&middot;</span>
              <b>TikTok Ads</b><span className="sp">&middot;</span>
              <b>Google Analytics</b><span className="sp">&middot;</span>
              <b>Spreadsheet & Docs</b>
            </p>
          </div>
          <div className="skill-col fu">
            <h3>Kemampuan Teknis</h3>
            <p className="skill-flow">
              <b>Content Planning</b><span className="sp">&middot;</span>
              <b>Content Calendar</b><span className="sp">&middot;</span>
              <b>Basic SEO</b><span className="sp">&middot;</span>
              <b>Content Creation</b><span className="sp">&middot;</span>
              <b>Copywriting</b><span className="sp">&middot;</span>
              <b>Social Media Ads</b><span className="sp">&middot;</span>
              <b>Analytics & Reporting</b>
            </p>
          </div>
          <div className="skill-col fu">
            <h3>Sertifikasi</h3>
            <div className="cert-row">
              <div><div className="cert-n"><span className="ck">&#10003;</span>BNSP Digital Marketing</div><div className="cert-o">LSP Digital Marketing</div></div>
              <span className="cert-y">2025</span>
            </div>
            <div className="cert-row">
              <div><div className="cert-n"><span className="ck">&#10003;</span>Omni Brand</div><div className="cert-o">MarkPlus Institute</div></div>
              <span className="cert-y">2025</span>
            </div>
            <div className="cert-row">
              <div><div className="cert-n"><span className="ck">&#10003;</span>TOEFL — Skor 543</div><div className="cert-o">Tespedia</div></div>
              <span className="cert-y">2025</span>
            </div>
          </div>
        </div>

        <div className="edu fu">
          <div>
            <div className="edu-school">Sekolah Tinggi Ilmu Ekonomi Ekuitas</div>
            <div className="edu-meta">S1 Manajemen (Marketing) &nbsp;&middot;&nbsp; Bandung, Jawa Barat &nbsp;&middot;&nbsp; Sep 2021 – Agu 2025</div>
            <p className="edu-note">Mengikuti 20+ kegiatan kampus, aktif di Himpunan Mahasiswa Manajemen, dan menjalankan jasa freelance video editing & desain grafis selama kuliah.</p>
          </div>
          <div className="edu-gpa">
            <div className="n">3.55</div>
            <div className="l">IPK / 4.00</div>
          </div>
        </div>
      </div>
    </section>
  );
}
