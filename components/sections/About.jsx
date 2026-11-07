const timeline = [
  {
    year: "2023",
    tag: "Beginning",
    title: "Matriculation",
    copy: "Completed my matriculation while quietly dreaming beyond the medical path my family had planned.",
  },
  {
    year: "2024",
    tag: "Pre-medical",
    title: "FSc · Punjab College",
    copy: "Completed pre-medical, but the pull toward technology kept growing stronger.",
    delay: "60ms",
  },
  {
    year: "2024",
    tag: "The pivot",
    title: "The turning point",
    copy: "Enrolled in MERN stack development at PNY. The first time I shipped something to a screen, everything clicked.",
    delay: "120ms",
    key: true,
  },
  {
    year: "2024 — present",
    tag: "University",
    title: "BS Computer Science · NUML",
    copy: "Now in my 5th semester. OOP, DSA, DBMS — building strong fundamentals with a 3.2 GPA.",
    delay: "180ms",
  },
  {
    year: "Ongoing",
    tag: "Craft",
    title: "MERN + AI engineering",
    copy: "Shipping full-stack products while going deep into agents, RAG, and LLM application design.",
    delay: "240ms",
  },
  {
    year: "Today",
    tag: "Mission",
    title: "Turning pressure into purpose",
    copy: "One thoughtful, useful product at a time — with the resilience of someone who chose this path.",
    delay: "300ms",
  },
];

export default function About() {
  return (
    <section className="section about" id="about">
      <div className="shell">
        <div className="about-grid">
          <div className="about-sticky">
            <div className="kicker reveal">
              <span className="kicker-num">02</span>
              <span className="kicker-label">About</span>
              <span className="kicker-tail" aria-hidden="true"></span>
            </div>
            <h2 className="section-title" data-split>
              From pre-med to <em>product engineer.</em>
            </h2>
            <div className="about-sign reveal" style={{ "--d": "140ms" }}>
              <span className="about-sign-mark" aria-hidden="true">
                <svg className="icon">
                  <use href="#i-spark"></use>
                </svg>
              </span>
              <div>
                <strong>Abdullah Azmat</strong>
                <span>BS Computer Science · NUML</span>
              </div>
            </div>
          </div>

          <div className="about-body">
            <p className="lead reveal" style={{ "--d": "60ms" }}>
              My path wasn&apos;t linear — and that&apos;s my advantage. I started in
              pre-medical studies, followed curiosity into code, and found the craft I want
              to spend my life mastering: building software that thinks.
            </p>
            <p className="reveal" style={{ "--d": "100ms" }}>
              Today I&apos;m a 5th-semester computer science student at NUML, a certified
              MERN developer, and an AI engineer. I care about the details
              most people skip — clean architecture, grounded AI, and interfaces that feel
              effortless.
            </p>

            <blockquote className="quote-card reveal" style={{ "--d": "140ms" }}>
              <p>“Your passion is your power. Never stop learning, never stop building.”</p>
              <footer>— Abdullah Azmat</footer>
            </blockquote>

            <div className="about-facts reveal" style={{ "--d": "180ms" }}>
              <div>
                <span>University</span>
                <strong>NUML · BS CS</strong>
              </div>
              <div>
                <span>Location</span>
                <strong>Pakistan</strong>
              </div>
              <div>
                <span>Focus</span>
                <strong>AI &amp; full-stack</strong>
              </div>
              <div>
                <span>GPA (5th sem)</span>
                <strong>3.2 / 4.0</strong>
              </div>
            </div>
          </div>
        </div>

        <div className="timeline">
          {timeline.map((item) => (
            <div
              key={`${item.year}-${item.title}`}
              className={`timeline-item${item.key ? " is-key" : ""} reveal`}
              style={item.delay ? { "--d": item.delay } : undefined}
            >
              <span className="timeline-dot" aria-hidden="true"></span>
              <div className="timeline-year">{item.year}</div>
              <div className="timeline-copy">
                <span className="timeline-tag">{item.tag}</span>
                <h3>{item.title}</h3>
                <p>{item.copy}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
