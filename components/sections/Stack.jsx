const columns = [
  {
    letter: "A",
    title: "AI & LLMs",
    count: "07",
    items: [
      { name: "Python", tag: "core" },
      { name: "LangChain" },
      { name: "LangGraph" },
      { name: "RAG pipelines" },
      { name: "OpenAI API" },
      { name: "Vector databases" },
      { name: "Prompt engineering" },
    ],
  },
  {
    letter: "B",
    title: "Frontend",
    count: "06",
    delay: "60ms",
    items: [
      { name: "React", tag: "core" },
      { name: "Next.js" },
      { name: "TypeScript" },
      { name: "JavaScript" },
      { name: "Tailwind CSS" },
      { name: "HTML & CSS" },
    ],
  },
  {
    letter: "C",
    title: "Backend",
    count: "06",
    delay: "120ms",
    items: [
      { name: "Node.js", tag: "core" },
      { name: "Express" },
      { name: "MongoDB" },
      { name: "MySQL" },
      { name: "Supabase" },
      { name: "REST APIs" },
    ],
  },
  {
    letter: "D",
    title: "Foundations",
    count: "06",
    delay: "180ms",
    items: [
      { name: "C++" },
      { name: ".NET & C#" },
      { name: "Git & GitHub" },
      { name: "Vercel" },
      { name: "OOP & DSA" },
      { name: "DBMS" },
    ],
  },
];

const exploring = ["Multi-agent systems", "Fine-tuning", "MCP", "Vector search"];

export default function Stack() {
  return (
    <section className="section stack" id="stack">
      <span className="stack-word" aria-hidden="true">
        TOOLKIT
      </span>
      <div className="shell">
        <header className="section-head">
          <div className="kicker reveal">
            <span className="kicker-num">05</span>
            <span className="kicker-label">Toolkit</span>
            <span className="kicker-tail" aria-hidden="true"></span>
          </div>
          <div className="section-head-row">
            <h2 className="section-title" data-split>
              The stack behind the <em>work.</em>
            </h2>
            <p className="section-intro reveal" style={{ "--d": "120ms" }}>
              Tools I reach for to take an idea from a blank page to production.
            </p>
          </div>
        </header>

        <div className="stack-grid">
          {columns.map((column) => (
            <div
              className="stack-col reveal"
              key={column.letter}
              style={column.delay ? { "--d": column.delay } : undefined}
            >
              <div className="stack-head">
                <span className="stack-num">{column.letter}</span>
                <h3>{column.title}</h3>
                <span className="stack-count">{column.count}</span>
              </div>
              <ul className="tech-list">
                {column.items.map((item) => (
                  <li key={item.name}>
                    {item.name}
                    {item.tag ? <span className="tech-tag">{item.tag}</span> : null}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="stack-footer reveal">
          <span className="stack-footer-label">Currently exploring</span>
          <div className="chip-row">
            {exploring.map((item) => (
              <span className="chip chip--outline" key={item}>
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
