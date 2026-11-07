export default function Contact() {
  return (
    <section className="contact" id="contact">
      <div className="contact-glow" aria-hidden="true"></div>
      <div className="shell contact-grid">
        <div className="contact-copy">
          <div className="kicker reveal">
            <span className="kicker-num">06</span>
            <span className="kicker-label">Contact</span>
            <span className="kicker-tail" aria-hidden="true"></span>
          </div>
          <h2 className="contact-title" data-split>
            Let&apos;s build something <em>intelligent.</em>
          </h2>
          <p className="contact-lead reveal" style={{ "--d": "100ms" }}>
            I&apos;m open to freelance projects, collaborations, and full-time roles. Tell
            me what you&apos;re working on — I&apos;ll reply within a day.
          </p>

          <div className="email-block reveal" style={{ "--d": "140ms" }}>
            <span className="contact-label">Email me directly</span>
            <div className="email-row">
              <a href="mailto:hassanazmat079@gmail.com" className="email-link">
                hassanazmat079@gmail.com
              </a>
              <button
                className="copy-btn"
                id="copy-email"
                data-email="hassanazmat079@gmail.com"
                type="button"
                aria-label="Copy email address"
              >
                <svg className="icon" aria-hidden="true">
                  <use href="#i-copy"></use>
                </svg>
                <span>Copy</span>
              </button>
            </div>
          </div>

          <div className="contact-details reveal" style={{ "--d": "180ms" }}>
            <a href="tel:+923084685669" className="contact-detail">
              <span className="contact-icon">
                <svg className="icon" aria-hidden="true">
                  <use href="#i-phone"></use>
                </svg>
              </span>
              <span>
                <small>Phone</small>
                <strong>+92 308 4685669</strong>
              </span>
            </a>
            <div className="contact-detail">
              <span className="contact-icon">
                <svg className="icon" aria-hidden="true">
                  <use href="#i-pin"></use>
                </svg>
              </span>
              <span>
                <small>Based in</small>
                <strong>Pakistan · working worldwide</strong>
              </span>
            </div>
          </div>

          <div className="contact-socials reveal" style={{ "--d": "220ms" }}>
            <a
              href="https://github.com/abdullahAzmat-art"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <svg className="icon">
                <use href="#i-github"></use>
              </svg>
              <span>GitHub</span>
              <svg className="icon icon--sm" aria-hidden="true">
                <use href="#i-arrow-up"></use>
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
              <span>LinkedIn</span>
              <svg className="icon icon--sm" aria-hidden="true">
                <use href="#i-arrow-up"></use>
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
              <span>Instagram</span>
              <svg className="icon icon--sm" aria-hidden="true">
                <use href="#i-arrow-up"></use>
              </svg>
            </a>
          </div>
        </div>

        <div className="contact-card reveal" style={{ "--d": "120ms" }}>
          <div className="contact-card-head">
            <span className="contact-card-title">Start a conversation</span>
            <span className="contact-card-badge">
              <span className="live-dot"></span> Available
            </span>
          </div>
          <form id="contact-form" noValidate>
            <div className="form-row">
              <label className="field">
                <span>Your name</span>
                <input
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Jane Doe"
                  autoComplete="name"
                  required
                />
              </label>
              <label className="field">
                <span>Email</span>
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="jane@company.com"
                  autoComplete="email"
                  required
                />
              </label>
            </div>
            <label className="field">
              <span>What are you building?</span>
              <select name="type" id="type">
                <option>AI agent / RAG system</option>
                <option>Web application</option>
                <option>AI automation</option>
                <option>Something else</option>
              </select>
            </label>
            <label className="field">
              <span>Message</span>
              <textarea
                name="message"
                id="message"
                rows={4}
                placeholder="A short note about your project, timeline, and goals…"
                required
              />
            </label>
            <button className="btn btn--ember btn--full" type="submit" data-magnetic>
              Send message
              <svg className="icon" aria-hidden="true">
                <use href="#i-arrow"></use>
              </svg>
            </button>
            <p className="form-note">
              This opens your email app with everything pre-filled. Prefer email?{" "}
              <a href="mailto:hassanazmat079@gmail.com">Write to me directly</a>.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}
