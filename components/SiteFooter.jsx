export default function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="shell footer-top">
        <a className="brand brand--footer" href="#home" aria-label="Abdullah Azmat — back to top">
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
        <nav className="footer-nav" aria-label="Footer">
          <a href="#work">Work</a>
          <a href="#about">About</a>
          <a href="#services">Services</a>
          <a href="#roadmap">Roadmap</a>
          <a href="#stack">Stack</a>
          <a href="#achievements">Recognition</a>
          <a href="#contact">Contact</a>
        </nav>
        <a className="back-top" href="#home">
          Back to top{" "}
          <svg className="icon" aria-hidden="true">
            <use href="#i-arrow-up"></use>
          </svg>
        </a>
      </div>

      <div className="footer-wordmark" aria-hidden="true">
        Abdullah Azmat
      </div>

      <div className="shell footer-bottom">
        <span>
          © <span id="year">2026</span> Abdullah Azmat. All rights reserved.
        </span>
        <span className="footer-note">Designed &amp; built with intent.</span>
      </div>
    </footer>
  );
}
