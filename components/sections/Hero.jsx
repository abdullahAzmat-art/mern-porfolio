export default function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-atmosphere" aria-hidden="true">
        <div className="hero-glow hero-glow--a" data-parallax="0.18"></div>
        <div className="hero-glow hero-glow--b" data-parallax="-0.1"></div>
        <div className="hero-grid"></div>
        <div className="hero-scan"></div>
      </div>

      <div className="shell hero-inner">
        <div className="hero-top reveal">
          <span className="status-pill">
            <span className="pulse-dot"></span> Available for select projects
          </span>
          <span className="hero-loc">Pakistan · working worldwide</span>
          <span className="hero-index">Portfolio / 2026</span>
        </div>

        <h1 className="hero-title">
          <span className="sr-only">
            Abdullah Azmat — AI Engineer &amp; Full-Stack Developer.{" "}
          </span>
          <span className="hero-line">
            <span>Intelligence,</span>
          </span>
          <span className="hero-line">
            <span className="hero-outline">
              engineered<em>.</em>
            </span>
          </span>
        </h1>

        <div className="hero-bottom">
          <div className="hero-intro hero-fade">
            <p className="hero-kicker">AI engineer &amp; full-stack developer</p>
            <p className="hero-lead">
              I&apos;m Abdullah Azmat. I design and ship AI agents, RAG-powered tools, and
              high-performance web apps that solve real problems.
            </p>
            <div className="hero-actions">
              <a className="btn btn--ember" href="#work" data-magnetic>
                Selected work
                <svg className="icon" aria-hidden="true">
                  <use href="#i-arrow"></use>
                </svg>
              </a>
              <a
                className="btn btn--line"
                href="/assets/Abdullah-Azmat-Resume.pdf"
                download
                data-magnetic
              >
                <svg className="icon" aria-hidden="true">
                  <use href="#i-download"></use>
                </svg>
                Résumé
              </a>
            </div>
            <div className="hero-stats">
              <div className="stat">
                <strong data-count="2" data-suffix="×">
                  2×
                </strong>
                <span>
                  Hackathon
                  <br />
                  runner-up
                </span>
              </div>
              <div className="stat">
                <strong data-count="7" data-suffix="+">
                  7+
                </strong>
                <span>
                  Products
                  <br />
                  built
                </span>
              </div>
              <div className="stat">
                <strong data-count="3.2" data-decimals="1">
                  3.2
                </strong>
                <span>
                  GPA · 5th
                  <br />
                  semester
                </span>
              </div>
            </div>
          </div>

          <aside className="hero-panel hero-fade hero-fade--panel" aria-label="Profile summary">
            <div className="panel-top">
              <span className="panel-label">System profile</span>
              <span className="panel-live">
                <span className="live-dot"></span> online
              </span>
            </div>
            <dl className="panel-list">
              <div>
                <dt>Role</dt>
                <dd>AI Engineer</dd>
              </div>
              <div>
                <dt>Focus</dt>
                <dd>Agents · RAG · Full-stack</dd>
              </div>
              <div>
                <dt>Stack</dt>
                <dd>Python · React · Node</dd>
              </div>
              <div>
                <dt>Study</dt>
                <dd>BS CS · NUML · 5th sem</dd>
              </div>
            </dl>
            <div className="panel-eq" aria-hidden="true">
              <i style={{ "--i": 0, "--h": ".34" }}></i>
              <i style={{ "--i": 1, "--h": ".62" }}></i>
              <i style={{ "--i": 2, "--h": ".44" }}></i>
              <i style={{ "--i": 3, "--h": ".82" }}></i>
              <i style={{ "--i": 4, "--h": ".55" }}></i>
              <i style={{ "--i": 5, "--h": ".95" }}></i>
              <i style={{ "--i": 6, "--h": ".68" }}></i>
              <i style={{ "--i": 7, "--h": ".4" }}></i>
              <i style={{ "--i": 8, "--h": ".74" }}></i>
              <i style={{ "--i": 9, "--h": ".52" }}></i>
              <i style={{ "--i": 10, "--h": ".88" }}></i>
              <i style={{ "--i": 11, "--h": ".6" }}></i>
              <i style={{ "--i": 12, "--h": ".36" }}></i>
              <i style={{ "--i": 13, "--h": ".7" }}></i>
              <i style={{ "--i": 14, "--h": ".48" }}></i>
              <i style={{ "--i": 15, "--h": ".9" }}></i>
              <i style={{ "--i": 16, "--h": ".58" }}></i>
              <i style={{ "--i": 17, "--h": ".76" }}></i>
              <i style={{ "--i": 18, "--h": ".42" }}></i>
              <i style={{ "--i": 19, "--h": ".66" }}></i>
            </div>
            <div className="panel-foot">
              <span>Currently</span>
              <strong>Building an AI front office for law firms.</strong>
            </div>
          </aside>
        </div>

        <div className="hero-foot reveal" style={{ "--d": "260ms" }}>
          <a className="scroll-cue" href="#work">
            <span className="scroll-line" aria-hidden="true">
              <i></i>
            </span>
            Scroll to explore
          </a>
          <span className="hero-note">Open to freelance, collaborations &amp; full-time roles</span>
        </div>
      </div>
    </section>
  );
}
