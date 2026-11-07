import { Fragment } from "react";

const items = ["AI agents", "RAG systems", "Full-stack", "Automation", "Product design"];

export default function Marquee() {
  return (
    <div className="marquee" aria-label="Technologies I work with">
      <div className="marquee-track">
        <div className="marquee-group">
          {items.map((item) => (
            <Fragment key={`a-${item}`}>
              <span>{item}</span>
              <i>✦</i>
            </Fragment>
          ))}
        </div>
        <div className="marquee-group" aria-hidden="true">
          {items.map((item) => (
            <Fragment key={`b-${item}`}>
              <span>{item}</span>
              <i>✦</i>
            </Fragment>
          ))}
        </div>
      </div>
    </div>
  );
}
