// Import foto profil - sementara menggunakan hero.png
// Ganti dengan foto profil Anda nanti (profile.jpg, azzam.jpg, dll)
import profilePhoto from '../assets/hero.png';

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-inner">
        <div>
          <span className="eyebrow">Social Media Specialist & Content Creator</span>
          <h1>Hallo, Saya Azzam</h1>
          <p className="hero-desc">
            Saya Muhammad Azzam Ismail — lulusan S1 Manajemen STIE Ekuitas dengan pengalaman langsung mengelola media sosial.
            Menangani proses dari <b>perencanaan dan produksi konten</b> hingga <b>evaluasi performa</b>,
            dengan rekam jejak mengelola 14 akun media sosial dan menembus 330.000+ tayangan dari satu kampanye TikTok.
          </p>
          <div className="hero-ctas">
            <a href="#work" className="btn btn-p">Lihat Pengalaman &rarr;</a>
            <a href="https://bit.ly/portokaryasaya" target="_blank" rel="noopener noreferrer" className="btn btn-s">Portofolio Lengkap &#8599;</a>
          </div>
          <p className="hero-meta">
            <b>Lokasi</b> Bandung, Jawa Barat &nbsp;&middot;&nbsp;
            <b>Pendidikan</b> S1 Manajemen, STIE Ekuitas &nbsp;&middot;&nbsp;
            <b>Status</b> Tersedia untuk peluang penuh waktu
          </p>
        </div>
        
        {/* Foto profil */}
        <div className="hero-photo">
          <img src={profilePhoto} alt="Muhammad Azzam Ismail" />
        </div>
      </div>
    </section>
  );
}
