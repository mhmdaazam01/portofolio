import type { ReactNode } from 'react';

interface Metric {
  num: string;
  label: string;
  isDelta?: boolean;
}

interface Link {
  url: string;
  label: string;
}

interface Experience {
  id: string;
  company: string;
  role: string;
  period: string;
  location: string;
  scopes: string[];
  metrics: Metric[];
  note?: ReactNode;
  links?: Link[];
}

const experiences: Experience[] = [
  {
    id: "01",
    company: "PT Spend Time Group International",
    role: "Social Media Specialist",
    period: "Jan 2026 – Sekarang",
    location: "Bandung",
    scopes: [
      "Mengelola 14 akun media sosial end-to-end (Instagram, TikTok, YouTube, X, Threads, Facebook)",
      "Menyusun content plan & content calendar berbasis riset tren",
      "Mengarahkan video editor & copywriter agar konten sesuai strategi dan tone brand",
      "Publishing, maintenance, dan optimasi engagement di setiap platform",
      "Menganalisis performa konten dan menyusun report mingguan & bulanan",
      "Menjalankan kampanye iklan berbayar lewat Meta Ads & TikTok Ads"
    ],
    metrics: [
      { num: "14", label: "AKUN AKTIF" },
      { num: "6", label: "PLATFORM" }
    ],
    note: (
      <>
        Mengelola lintas platform secara bersamaan — dari <b>perencanaan konten</b> sampai eksekusi iklan berbayar untuk traffic website.
      </>
    ),
    links: []
  },
  {
    id: "02",
    company: "Yourbuddy",
    role: "Social Media Specialist",
    period: "Jul – Sep 2025 (3 bulan)",
    location: "Bandung",
    scopes: [
      "Mengelola akun Instagram dan TikTok Yourbuddy secara penuh",
      "Merancang dan memproduksi konten visual — carousel & video",
      "Riset tren dan best practice untuk pengembangan ide konten",
      "Menulis caption dan copywriting yang engaging",
      "Menganalisis metrik performa untuk evaluasi dan pengembangan strategi"
    ],
    metrics: [
      { num: "+4%", label: "ER · INSTAGRAM", isDelta: true },
      { num: "+153", label: "FOLLOWERS · IG", isDelta: true },
      { num: "+5.31%", label: "ER · TIKTOK", isDelta: true },
      { num: "+275", label: "PROFILE VISIT · TT", isDelta: true }
    ],
    links: [
      { url: "https://www.instagram.com/yourbuddy_in/", label: "instagram.com/yourbuddy_in ↗" },
      { url: "https://www.tiktok.com/@yourbuddy_in", label: "tiktok.com/@yourbuddy_in ↗" }
    ]
  },
  {
    id: "03",
    company: "DMR Custom",
    role: "Content Creator TikTok (@dhamarcustom)",
    period: "Feb – Apr 2025",
    location: "Bandung",
    scopes: [
      "Mengelola penuh akun TikTok DMR Custom",
      "Mengembangkan ide konten berbasis tren kendaraan listrik",
      "Merekam dan mengedit video dengan Adobe Premiere Pro & CapCut",
      "Menulis caption dan copywriting yang engaging",
      "Menganalisis performa konten untuk evaluasi strategi"
    ],
    metrics: [
      { num: "43", label: "VIDEO / BULAN" },
      { num: "330K+", label: "TOTAL TAYANGAN" },
      { num: "+2.48%", label: "ENGAGEMENT RATE", isDelta: true },
      { num: "234K", label: "VIEWS · TERBAIK" }
    ],
    links: [
      { url: "https://www.tiktok.com/@dhamarcustom", label: "tiktok.com/@dhamarcustom ↗" }
    ]
  },
  {
    id: "04",
    company: "Himpunan Mahasiswa Manajemen — STIE Ekuitas",
    role: "Staff Media & Public Relation, Organisasi Kampus",
    period: "Jan 2022 – Des 2024",
    location: "Bandung",
    scopes: [
      "Mengelola akun YouTube Himpunan Mahasiswa Manajemen",
      "Merancang dan memproduksi video kegiatan organisasi",
      "Mendesain thumbnail dan menulis copywriting tiap konten",
      "Menginisiasi program \"Mancast\" — podcast edukasi & diskusi mahasiswa"
    ],
    metrics: [
      { num: "1K+", label: "TOTAL VIEWS" },
      { num: "+4.22%", label: "ENGAGEMENT RATE", isDelta: true },
      { num: "+5.50%", label: "SUBSCRIBERS", isDelta: true },
      { num: "+4.3%", label: "IMPRESSION CTR", isDelta: true }
    ],
    links: [
      { url: "https://www.youtube.com/@hmmekuitasbdg", label: "youtube.com/@hmmekuitasbdg ↗" }
    ]
  }
];

export default function WorkExperience() {
  return (
    <section className="work" id="work">
      <div className="ctn">
        <span className="eyebrow">Pengalaman Kerja</span>
        <h2 className="sec-title">Empat peran, satu cara kerja yang sama.</h2>
        <p className="sec-sub">Riset tren, eksekusi konten, lalu ukur hasilnya — pendekatan yang sama saya ulang di setiap platform dan setiap brand.</p>

        <div className="work-list">
          {experiences.map((exp) => (
            <article key={exp.id} className="entry fu">
              <div className="entry-num">{exp.id}</div>
              <div>
                <div className="entry-head">
                  <h3 className="entry-co">{exp.company}</h3>
                  <div className="entry-role">{exp.role} &nbsp;&middot;&nbsp; {exp.period} &nbsp;&middot;&nbsp; {exp.location}</div>
                </div>
                <div className="entry-grid">
                  <ul className="scope">
                    {exp.scopes.map((scope, idx) => (
                      <li key={idx}>{scope}</li>
                    ))}
                  </ul>
                  <div>
                    <div className="metrics">
                      {exp.metrics.map((m, idx) => (
                        <div key={idx} className="metric">
                          <div className={`m-n ${m.isDelta ? 'delta' : ''}`}>{m.num}</div>
                          <div className="m-l">{m.label}</div>
                        </div>
                      ))}
                    </div>
                    
                    {exp.note && <p className="entry-note">{exp.note}</p>}

                    {exp.links && exp.links.length > 0 && (
                      <div className="entry-links">
                        {exp.links.map((link, idx) => (
                          <a key={idx} href={link.url} target="_blank" rel="noopener noreferrer">{link.label}</a>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
