export const metadata = {
  title: "Offline — Abdullah Azmat",
  robots: { index: false, follow: false },
};

export default function OfflinePage() {
  return (
    <main
      id="main"
      style={{
        minHeight: "100svh",
        display: "grid",
        placeItems: "center",
        padding: "clamp(24px, 6vw, 80px)",
      }}
    >
      <div style={{ width: "min(560px, 100%)" }}>
        <p className="kicker">
          <span className="kicker-num">Offline</span>
          <span className="kicker-tail" aria-hidden="true" />
        </p>
        <h1 className="section-title" style={{ margin: "20px 0 18px" }}>
          You&apos;re <em>offline.</em>
        </h1>
        <p className="section-intro" style={{ marginBottom: "30px" }}>
          This page hasn&apos;t been saved yet. Reconnect and the portfolio will load
          normally.
        </p>
        <a className="btn btn--ember" href="/">
          Back to the portfolio
        </a>
      </div>
    </main>
  );
}
