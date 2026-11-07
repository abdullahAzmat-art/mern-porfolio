export default function ProjectDialog() {
  return (
    <dialog className="project-dialog" id="project-dialog" aria-labelledby="dialog-title">
      <button
        className="dialog-close"
        id="dialog-close"
        type="button"
        aria-label="Close case study"
      >
        <svg className="icon" aria-hidden="true">
          <use href="#i-close"></use>
        </svg>
      </button>
      <div className="dialog-scroll">
        <div className="dialog-media">
          <img id="dialog-image" width="1200" height="800" alt="" decoding="async" />
        </div>
        <div className="dialog-body">
          <div className="dialog-kicker">
            <span id="dialog-cat"></span>
            <span className="status" id="dialog-status"></span>
          </div>
          <h2 id="dialog-title">Project case study</h2>
          <p className="dialog-overview" id="dialog-overview"></p>
          <h3 className="dialog-subtitle">What it does</h3>
          <ul className="dialog-highlights" id="dialog-highlights"></ul>
          <h3 className="dialog-subtitle">Stack</h3>
          <div className="chip-row" id="dialog-stack"></div>
          <div className="dialog-links" id="dialog-links"></div>
        </div>
      </div>
    </dialog>
  );
}
