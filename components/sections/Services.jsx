const services = [
  {
    index: "01",
    title: "AI agents & RAG",
    copy: "Production-grade assistants that answer from your data, not the internet's imagination.",
    points: [
      "LLM agents with LangChain & LangGraph",
      "RAG pipelines with verified citations",
      "Document intelligence & semantic search",
      "Prompt engineering, evaluation & guardrails",
    ],
  },
  {
    index: "02",
    title: "Full-stack engineering",
    copy: "Modern, scalable web apps with clean architecture and interfaces people enjoy using.",
    points: [
      "MERN & Next.js applications",
      "REST APIs, auth & databases",
      "Responsive, accessible UI",
      "Deployment on Vercel & cloud",
    ],
    delay: "80ms",
  },
  {
    index: "03",
    title: "Automation & integration",
    copy: "Connect the tools you already use and let AI handle the busywork.",
    points: [
      "AI lead capture & qualification",
      "Workflow & task automation",
      "Third-party API integrations",
      "Custom internal dashboards",
    ],
    delay: "160ms",
  },
];

const steps = [
  { index: "01", title: "Discover", copy: "Understand the problem, the user, and what success looks like." },
  { index: "02", title: "Architect", copy: "Map the data, the flows, and the simplest reliable build." },
  { index: "03", title: "Build", copy: "Iterate in tight loops with clean code and visible progress." },
  { index: "04", title: "Ship", copy: "Deploy, measure, refine — and hand over something maintainable." },
];

export default function Services() {
  return (
    <section className="section services" id="services">
      <div className="shell">
        <header className="section-head">
          <div className="kicker reveal">
            <span className="kicker-num">03</span>
            <span className="kicker-label">Capabilities</span>
            <span className="kicker-tail" aria-hidden="true"></span>
          </div>
          <div className="section-head-row">
            <h2 className="section-title" data-split>
              What I <em>bring</em> to the table.
            </h2>
            <p className="section-intro reveal" style={{ "--d": "120ms" }}>
              From the first architecture sketch to the final deploy — I own the whole
              build.
            </p>
          </div>
        </header>

        <div className="service-list">
          {services.map((service) => (
            <article
              key={service.index}
              className="service-row reveal"
              style={service.delay ? { "--d": service.delay } : undefined}
            >
              <span className="service-index">{service.index}</span>
              <div className="service-main">
                <h3>{service.title}</h3>
                <p>{service.copy}</p>
              </div>
              <ul className="service-points">
                {service.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
              <span className="service-arrow" aria-hidden="true">
                <svg className="icon">
                  <use href="#i-arrow-up"></use>
                </svg>
              </span>
            </article>
          ))}
        </div>

        <div className="process reveal">
          <div className="process-head">
            <span className="process-label">How I work</span>
            <span className="process-note">A simple, transparent process — no surprises.</span>
          </div>
          <div className="process-steps">
            {steps.map((step) => (
              <div className="process-step" key={step.index}>
                <span>{step.index}</span>
                <h4>{step.title}</h4>
                <p>{step.copy}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
