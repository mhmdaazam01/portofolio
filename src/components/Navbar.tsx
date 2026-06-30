export default function Navbar() {
  return (
    <nav className="nav" aria-label="Navigasi utama">
      <div className="nav-inner">
        <a className="nav-logo" href="#top">
          <span className="mark" aria-hidden="true"></span>
          <span className="full">Muhammad Azzam Ismail</span>
          <span className="short">Azzam Ismail</span>
        </a>
        <div className="nav-links">
          <a href="#work">Pengalaman</a>
          <a href="#skills">Skill</a>
          <a href="#contact" className="nav-cta">Hubungi Saya</a>
        </div>
      </div>
    </nav>
  );
}
