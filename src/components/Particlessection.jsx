import Particles, { initParticlesEngine } from "@tsparticles/react";
import { useEffect, useMemo, useState } from "react";
import { loadSlim } from "@tsparticles/slim";

const ParticlesComponent = ({ id }) => {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => setInit(true));
  }, []);

  const options = useMemo(() => ({
    fpsLimit: 120,
    interactivity: {
      events: {
        onHover: { enable: true, mode: "grab" },
        onClick: { enable: true, mode: "repulse" },
      },
      modes: {
        grab: { distance: 140 },
        repulse: { distance: 180 },
      },
    },
    particles: {
      color: { value: "#d1d5db" }, // light gray
      links: {
        enable: true,
        color: "#9ca3af",
        opacity: 0.25,
        distance: 150,
      },
      move: {
        enable: true,
        speed: 0.8,
        random: true,
      },
      number: {
        value: 80,
        density: { enable: true },
      },
      size: { value: { min: 1, max: 3 } },
      opacity: { value: 0.8 },
    },
    detectRetina: true,
  }), []);

  if (!init) return null;

  return (
    <Particles
      id={id}
      options={options}
      className="absolute inset-0 z-0 pointer-events-none"
    />
  );
};

export default ParticlesComponent;
