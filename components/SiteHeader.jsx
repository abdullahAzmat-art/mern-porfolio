export default function SiteHeader() {
  return (
    <>
      <header className="site-header" id="site-header">
        <div className="shell header-inner">
          <a className="brand" href="#home" aria-label="Abdullah Azmat — home">
            <span className="brand-mark" aria-hidden="true">
              <svg viewBox="0 0 28 28">
                <path
                  d="M4 22v-5M9.5 22V13M15 22V16M20.5 22V7"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.4"
                  strokeLinecap="round"
                />
                <circle cx="20.5" cy="3.4" r="1.8" fill="currentColor" />
              </svg>
            </span>
            <span className="brand-text">
              <strong>Abdullah Azmat</strong>
              <small>AI engineer · full-stack</small>
            </span>
          </a>

          <nav className="desk-nav" aria-label="Primary">
            <a className="nav-link" href="#work">
              <span>01</span>Work
            </a>
            <a className="nav-link" href="#about">
              <span>02</span>About
            </a>
            <a className="nav-link" href="#services">
              <span>03</span>Services
            </a>
            <a className="nav-link" href="#roadmap">
              <span>04</span>Roadmap
            </a>
            <a className="nav-link" href="#stack">
              <span>05</span>Stack
            </a>
            <a className="nav-link" href="#achievements">
              <span>06</span>Recognition
            </a>
            <a className="nav-link" href="#contact">
              <span>07</span>Contact
            </a>
          </nav>

          <div className="header-right">
            <a className="header-cta" href="#contact" data-magnetic>
              Start a project
              <svg className="icon" aria-hidden="true">
                <use href="#i-arrow-up"></use>
              </svg>
            </a>
          </div>

          <button
            className="menu-btn"
            id="nav-toggle"
            type="button"
            aria-expanded="false"
            aria-controls="mobile-menu"
            aria-label="Open menu"
          >
            <span className="menu-label">Menu</span>
            <span className="menu-icon" aria-hidden="true">
              <i></i>
              <i></i>
            </span>
          </button>
        </div>
      </header>

      <div className="mobile-menu" id="mobile-menu" aria-hidden="true" inert>
        <div className="mobile-menu-bg" aria-hidden="true"></div>
        <nav className="mobile-nav" aria-label="Mobile">
          <a href="#work" style={{ "--i": 0 }}>
            <span>01</span>Work
            <svg className="icon" aria-hidden="true">
              <use href="#i-arrow-up"></use>
            </svg>
          </a>
          <a href="#about" style={{ "--i": 1 }}>
            <span>02</span>About
            <svg className="icon" aria-hidden="true">
              <use href="#i-arrow-up"></use>
            </svg>
          </a>
          <a href="#services" style={{ "--i": 2 }}>
            <span>03</span>Services
            <svg className="icon" aria-hidden="true">
              <use href="#i-arrow-up"></use>
            </svg>
          </a>
          <a href="#roadmap" style={{ "--i": 3 }}>
            <span>04</span>Roadmap
            <svg className="icon" aria-hidden="true">
              <use href="#i-arrow-up"></use>
            </svg>
          </a>
          <a href="#stack" style={{ "--i": 4 }}>
            <span>05</span>Stack
            <svg className="icon" aria-hidden="true">
              <use href="#i-arrow-up"></use>
            </svg>
          </a>
          <a href="#achievements" style={{ "--i": 5 }}>
            <span>06</span>Recognition
            <svg className="icon" aria-hidden="true">
              <use href="#i-arrow-up"></use>
            </svg>
          </a>
          <a href="#contact" style={{ "--i": 6 }}>
            <span>07</span>Contact
            <svg className="icon" aria-hidden="true">
              <use href="#i-arrow-up"></use>
            </svg>
          </a>
        </nav>
        <div className="mobile-meta">
          <a className="mobile-email" href="mailto:hassanazmat079@gmail.com">
            hassanazmat079@gmail.com
          </a>
          <div className="socials">
            <a
              href="https://github.com/abdullahAzmat-art"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <svg className="icon">
                <use href="#i-github"></use>
              </svg>
            </a>
            <a
              href="https://www.linkedin.com/in/abdullah-azmat-art/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <svg className="icon">
                <use href="#i-linkedin"></use>
              </svg>
            </a>
            <a
              href="https://instagram.com/brav_eabdullah"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <svg className="icon">
                <use href="#i-instagram"></use>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
