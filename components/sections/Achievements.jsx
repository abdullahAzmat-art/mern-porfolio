const awards = [
  {
    badge: "Runner-up",
    icon: "#i-award",
    rank: (
      <>
        2<sup>nd</sup>
      </>
    ),
    rankLabel: "place",
    title: "HackaForge NUML 1.0",
    copy: "Placed 2nd in a competitive university hackathon — building under pressure with a team.",
  },
  {
    badge: "Runner-up",
    icon: "#i-award",
    rank: (
      <>
        2<sup>nd</sup>
      </>
    ),
    rankLabel: "place",
    title: "HackaForge NUML 3.0",
    copy: "A second runner-up finish — consistency and problem-solving under deadlines.",
    delay: "80ms",
  },
  {
    badge: "Certified",
    icon: "#i-check",
    rank: "MERN",
    rankLabel: "certified",
    title: "PNY Training",
    copy: "Completed a certified full-stack program covering MongoDB, Express, React, and Node.js.",
    delay: "160ms",
    ember: true,
    rankText: true,
  },
];

export default function Achievements() {
  return (
    <section className="section achievements" id="achievements">
      <div className="shell">
        <header className="section-head">
          <div className="kicker reveal">
            <span className="kicker-num">05</span>
            <span className="kicker-label">Recognition</span>
            <span className="kicker-tail" aria-hidden="true"></span>
          </div>
          <div className="section-head-row">
            <h2 className="section-title" data-split>
              Proof, not <em>promises.</em>
            </h2>
            <p className="section-intro reveal" style={{ "--d": "120ms" }}>
              Competition, certification, and consistent work — a few markers along the way.
            </p>
          </div>
        </header>

        <div className="award-grid">
          {awards.map((award) => (
            <article
              className={`award-card${award.ember ? " award-card--ember" : ""} reveal`}
              key={award.title}
              style={award.delay ? { "--d": award.delay } : undefined}
            >
              <div className="award-top">
                <span className="award-badge">{award.badge}</span>
                <span className="award-icon">
                  <svg className="icon" aria-hidden="true">
                    <use href={award.icon}></use>
                  </svg>
                </span>
              </div>
              <div className={`award-rank${award.rankText ? " award-rank--text" : ""}`}>
                {award.rank}
                <span>{award.rankLabel}</span>
              </div>
              <h3>{award.title}</h3>
              <p>{award.copy}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
