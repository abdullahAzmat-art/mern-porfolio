export default function Work() {
  return (
    <section className="section work" id="work">
      <div className="shell">
        <header className="section-head">
          <div className="kicker reveal">
            <span className="kicker-num">01</span>
            <span className="kicker-label">Selected work</span>
            <span className="kicker-tail" aria-hidden="true"></span>
          </div>
          <div className="section-head-row">
            <h2 className="section-title" data-split>
              Products with <em>purpose.</em>
            </h2>
            <p className="section-intro reveal" style={{ "--d": "120ms" }}>
              A selection of AI platforms and full-stack products — from intelligent client
              intake to booking, commerce, and community apps.
            </p>
          </div>
        </header>

        <div className="filters reveal" role="group" aria-label="Filter projects">
          <button className="filter is-active" data-filter="all" aria-pressed="true">
            All work <span className="count">08</span>
          </button>
          <button className="filter" data-filter="ai" aria-pressed="false">
            AI &amp; ML <span className="count">03</span>
          </button>
          <button className="filter" data-filter="web" aria-pressed="false">
            Web apps <span className="count">02</span>
          </button>
          <button className="filter" data-filter="ecommerce" aria-pressed="false">
            E-commerce <span className="count">02</span>
          </button>
          <button className="filter" data-filter="booking" aria-pressed="false">
            Booking <span className="count">01</span>
          </button>
          <span className="sr-only" id="filter-status" role="status" aria-live="polite"></span>
        </div>

        {/* Featured */}
        <article className="featured reveal" data-category="ai">
          <div className="featured-body">
            <div className="featured-meta">
              <span className="pill pill--ember">
                <svg className="icon" aria-hidden="true">
                  <use href="#i-spark"></use>
                </svg>{" "}
                Featured
              </span>
              <span className="featured-year">AI platform · 2025</span>
            </div>
            <h3>Law Firm Intake &amp; Client Management System</h3>
            <p>
              An AI-powered front office for law firms. It replaces scattered emails with a
              structured intake flow — capturing enquiries, qualifying leads, and routing
              them to the right person automatically.
            </p>
            <ul className="check-list">
              <li>
                <svg className="icon" aria-hidden="true">
                  <use href="#i-check"></use>
                </svg>{" "}
                AI-assisted client intake
              </li>
              <li>
                <svg className="icon" aria-hidden="true">
                  <use href="#i-check"></use>
                </svg>{" "}
                Lead scoring &amp; routing
              </li>
              <li>
                <svg className="icon" aria-hidden="true">
                  <use href="#i-check"></use>
                </svg>{" "}
                Practice-area rules
              </li>
              <li>
                <svg className="icon" aria-hidden="true">
                  <use href="#i-check"></use>
                </svg>{" "}
                Secure staff dashboard
              </li>
            </ul>
            <div className="chip-row">
              <span className="chip">React</span>
              <span className="chip">Node.js</span>
              <span className="chip">MongoDB</span>
              <span className="chip">LangChain</span>
              <span className="chip">RAG</span>
            </div>
            <div className="featured-actions">
              <button className="btn btn--ember" data-open-project="lawfirm" type="button">
                Read case study
                <svg className="icon" aria-hidden="true">
                  <use href="#i-arrow"></use>
                </svg>
              </button>
              <span className="meta-note">Flagship build · client work</span>
            </div>
          </div>

          <div className="featured-media">
            <div className="browser">
              <div className="browser-bar">
                <span className="browser-dots" aria-hidden="true">
                  <i></i>
                  <i></i>
                  <i></i>
                </span>
                <span className="browser-url">sterling-hart.ai / intake</span>
                <span className="browser-lock" aria-hidden="true">
                  <svg className="icon">
                    <use href="#i-check"></use>
                  </svg>
                </span>
              </div>
              <img
                src="/assets/img/lawfirm.webp"
                srcSet="/assets/img/lawfirm-640.webp 640w, /assets/img/lawfirm.webp 1024w"
                sizes="(max-width: 720px) 100vw, 648px"
                alt="Law firm intake and client management dashboard"
                width="1024"
                height="525"
                loading="lazy"
                decoding="async"
              />
            </div>
            <div className="ai-float" aria-hidden="true">
              <div className="ai-float-head">
                <span className="live-dot"></span> AI intake{" "}
                <span className="ai-live">LIVE</span>
              </div>
              <p>New enquiry qualified</p>
              <div className="ai-meter">
                <span></span>
              </div>
              <div className="ai-float-row">
                <span>Lead score</span>
                <strong>87 / 100</strong>
              </div>
            </div>
            <span className="featured-corner" aria-hidden="true">
              00
            </span>
          </div>
        </article>

        <div className="project-grid">
          {/* AI Ad Generator */}
          <article className="project-card reveal" data-category="ai">
            <div className="card-media">
              <img
                src="/assets/img/covers/ai-ad-generator.png"
                alt="AI Ad Generator — paste a link and generate ad creatives"
                width="1213"
                height="565"
                loading="lazy"
                decoding="async"
              />
              <span className="status status--live">
                <span className="live-dot"></span> Live
              </span>
              <button
                className="media-open"
                data-open-project="aiadgen"
                aria-label="View AI Ad Generator case study"
                type="button"
              >
                <svg className="icon" aria-hidden="true">
                  <use href="#i-arrow-up"></use>
                </svg>
              </button>
            </div>
            <div className="card-body">
              <div className="card-cat">
                <span>AI application</span>
                <span className="card-dot" aria-hidden="true">
                  <svg className="icon">
                    <use href="#i-spark"></use>
                  </svg>
                </span>
              </div>
              <h3>
                <button data-open-project="aiadgen" type="button">
                  AI Ad Generator
                </button>
              </h3>
              <p>
                An AI-powered ad generation tool — paste a website link and get
                high-quality advertising creatives for your products and services
                with minimal manual effort.
              </p>
              <div className="chip-row">
                <span className="chip">Next.js</span>
                <span className="chip">OpenAI</span>
                <span className="chip">Vercel</span>
              </div>
              <div className="card-footer">
                <a
                  className="mini-link"
                  href="https://ai-ad-generator-cdtp.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Live demo{" "}
                  <svg className="icon" aria-hidden="true">
                    <use href="#i-arrow-up"></use>
                  </svg>
                </a>
                <button className="mini-link" data-open-project="aiadgen" type="button">
                  Case study{" "}
                  <svg className="icon" aria-hidden="true">
                    <use href="#i-arrow"></use>
                  </svg>
                </button>
              </div>
            </div>
          </article>

          {/* LegalIntel */}
          <article className="project-card reveal" data-category="ai">
            <div className="card-media">
              <img
                src="/assets/img/covers/legalintel.png"
                alt="LegalIntel AI document intelligence interface"
                width="1200"
                height="800"
                loading="lazy"
                decoding="async"
              />
              <span className="status status--dev">In development</span>
              <button
                className="media-open"
                data-open-project="legalintel"
                aria-label="View LegalIntel AI case study"
                type="button"
              >
                <svg className="icon" aria-hidden="true">
                  <use href="#i-arrow-up"></use>
                </svg>
              </button>
            </div>
            <div className="card-body">
              <div className="card-cat">
                <span>AI application</span>
                <span className="card-dot" aria-hidden="true">
                  <svg className="icon">
                    <use href="#i-spark"></use>
                  </svg>
                </span>
              </div>
              <h3>
                <button data-open-project="legalintel" type="button">
                  LegalIntel AI
                </button>
              </h3>
              <p>
                Document intelligence for legal teams — ask questions in plain English and
                get answers backed by exact page citations.
              </p>
              <div className="chip-row">
                <span className="chip">Next.js 14</span>
                <span className="chip">LangChain</span>
                <span className="chip">OpenAI</span>
              </div>
              <div className="card-footer">
                <button className="mini-link" data-open-project="legalintel" type="button">
                  Case study{" "}
                  <svg className="icon" aria-hidden="true">
                    <use href="#i-arrow"></use>
                  </svg>
                </button>
              </div>
            </div>
          </article>

          {/* Royal Venue */}
          <article className="project-card reveal" data-category="booking" style={{ "--d": "60ms" }}>
            <div className="card-media">
              <img
                src="/assets/img/covers/royalvenue.png"
                alt="Royal Venue marriage hall booking interface"
                width="1200"
                height="800"
                loading="lazy"
                decoding="async"
              />
              <span className="status status--live">
                <span className="live-dot"></span> Live
              </span>
              <button
                className="media-open"
                data-open-project="royalvenue"
                aria-label="View Royal Venue case study"
                type="button"
              >
                <svg className="icon" aria-hidden="true">
                  <use href="#i-arrow-up"></use>
                </svg>
              </button>
            </div>
            <div className="card-body">
              <div className="card-cat">
                <span>Booking platform</span>
                <span className="card-dot" aria-hidden="true">
                  <svg className="icon">
                    <use href="#i-spark"></use>
                  </svg>
                </span>
              </div>
              <h3>
                <button data-open-project="royalvenue" type="button">
                  Royal Venue
                </button>
              </h3>
              <p>
                A booking platform connecting couples with marriage halls — live
                availability, venue details, and real-time reservation enquiries.
              </p>
              <div className="chip-row">
                <span className="chip">React</span>
                <span className="chip">Node.js</span>
                <span className="chip">MongoDB</span>
              </div>
              <div className="card-footer">
                <a
                  className="mini-link"
                  href="https://royal-venue.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Live demo{" "}
                  <svg className="icon" aria-hidden="true">
                    <use href="#i-arrow-up"></use>
                  </svg>
                </a>
                <a
                  className="mini-link mini-link--icon"
                  href="https://github.com/abdullahAzmat-art/Mariage-hall-booking-System"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Royal Venue on GitHub"
                >
                  <svg className="icon" aria-hidden="true">
                    <use href="#i-github"></use>
                  </svg>
                </a>
                <button className="mini-link" data-open-project="royalvenue" type="button">
                  Case study{" "}
                  <svg className="icon" aria-hidden="true">
                    <use href="#i-arrow"></use>
                  </svg>
                </button>
              </div>
            </div>
          </article>

          {/* VORTX */}
          <article className="project-card reveal" data-category="web">
            <div className="card-media">
              <img
                src="/assets/img/covers/vortex.png"
                alt="VORTX esports tournament platform interface"
                width="1200"
                height="800"
                loading="lazy"
                decoding="async"
              />
              <span className="status status--dev">Code available</span>
              <button
                className="media-open"
                data-open-project="vortex"
                aria-label="View VORTX case study"
                type="button"
              >
                <svg className="icon" aria-hidden="true">
                  <use href="#i-arrow-up"></use>
                </svg>
              </button>
            </div>
            <div className="card-body">
              <div className="card-cat">
                <span>Web application</span>
                <span className="card-dot" aria-hidden="true">
                  <svg className="icon">
                    <use href="#i-spark"></use>
                  </svg>
                </span>
              </div>
              <h3>
                <button data-open-project="vortex" type="button">
                  VORTX
                </button>
              </h3>
              <p>
                A competitive gaming platform with automated brackets, live leaderboards,
                and multi-game tournament hosting.
              </p>
              <div className="chip-row">
                <span className="chip">React</span>
                <span className="chip">Node.js</span>
                <span className="chip">WebSocket</span>
              </div>
              <div className="card-footer">
                <a
                  className="mini-link mini-link--icon"
                  href="https://github.com/abdullahAzmat-art/vortex-esports"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="VORTX on GitHub"
                >
                  <svg className="icon" aria-hidden="true">
                    <use href="#i-github"></use>
                  </svg>
                </a>
                <button className="mini-link" data-open-project="vortex" type="button">
                  Case study{" "}
                  <svg className="icon" aria-hidden="true">
                    <use href="#i-arrow"></use>
                  </svg>
                </button>
              </div>
            </div>
          </article>

          {/* Ayesha */}
          <article
            className="project-card reveal"
            data-category="ecommerce"
            style={{ "--d": "60ms" }}
          >
            <div className="card-media">
              <img
                src="/assets/img/covers/ayesha.png"
                alt="Ayesha.a Collection boutique storefront"
                width="1200"
                height="800"
                loading="lazy"
                decoding="async"
              />
              <span className="status status--dev">Code available</span>
              <button
                className="media-open"
                data-open-project="ayesha"
                aria-label="View Ayesha.a Collection case study"
                type="button"
              >
                <svg className="icon" aria-hidden="true">
                  <use href="#i-arrow-up"></use>
                </svg>
              </button>
            </div>
            <div className="card-body">
              <div className="card-cat">
                <span>E-commerce</span>
                <span className="card-dot" aria-hidden="true">
                  <svg className="icon">
                    <use href="#i-spark"></use>
                  </svg>
                </span>
              </div>
              <h3>
                <button data-open-project="ayesha" type="button">
                  Ayesha.a Collection
                </button>
              </h3>
              <p>
                An elegant boutique storefront with curated collections, quiet-luxury
                styling, and a seamless shopping experience.
              </p>
              <div className="chip-row">
                <span className="chip">React</span>
                <span className="chip">Express</span>
                <span className="chip">Supabase</span>
              </div>
              <div className="card-footer">
                <a
                  className="mini-link mini-link--icon"
                  href="https://github.com/abdullahAzmat-art/Boutique-project-"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Ayesha.a Collection on GitHub"
                >
                  <svg className="icon" aria-hidden="true">
                    <use href="#i-github"></use>
                  </svg>
                </a>
                <button className="mini-link" data-open-project="ayesha" type="button">
                  Case study{" "}
                  <svg className="icon" aria-hidden="true">
                    <use href="#i-arrow"></use>
                  </svg>
                </button>
              </div>
            </div>
          </article>

         
          {/* Campus */}
          <article className="project-card reveal" data-category="web" style={{ "--d": "60ms" }}>
            <div className="card-media">
              <img
                src="/assets/img/covers/campus.png"
                alt="Campus Lost and Found community platform"
                width="1200"
                height="800"
                loading="lazy"
                decoding="async"
              />
              <span className="status status--dev">In development</span>
              <button
                className="media-open"
                data-open-project="campus"
                aria-label="View Campus Lost and Found case study"
                type="button"
              >
                <svg className="icon" aria-hidden="true">
                  <use href="#i-arrow-up"></use>
                </svg>
              </button>
            </div>
            <div className="card-body">
              <div className="card-cat">
                <span>Community platform</span>
                <span className="card-dot" aria-hidden="true">
                  <svg className="icon">
                    <use href="#i-spark"></use>
                  </svg>
                </span>
              </div>
              <h3>
                <button data-open-project="campus" type="button">
                  Campus Lost &amp; Found
                </button>
              </h3>
              <p>
                A campus community platform to report, discover, and recover misplaced
                belongings with location tagging and claim validation.
              </p>
              <div className="chip-row">
                <span className="chip">React</span>
                <span className="chip">.NET</span>
                <span className="chip">MySQL</span>
                <span className="chip">C#</span>
              </div>
              <div className="card-footer">
                <span className="mini-link is-muted">University project</span>
                <button className="mini-link" data-open-project="campus" type="button">
                  Case study{" "}
                  <svg className="icon" aria-hidden="true">
                    <use href="#i-arrow"></use>
                  </svg>
                </button>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
