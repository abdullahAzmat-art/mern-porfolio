const SITE_URL = "https://abdullah-azmat-rho.vercel.app";

export const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": `${SITE_URL}/#person`,
      name: "Abdullah Azmat",
      url: `${SITE_URL}/`,
      image: `${SITE_URL}/assets/img/og-cover.png`,
      jobTitle: "AI Engineer & Full-Stack Developer",
      description:
        "AI engineer and full-stack developer in Pakistan building AI agents, RAG systems, automation, and modern web applications.",
      email: "mailto:hassanazmat079@gmail.com",
      telephone: "+923084685669",
      address: { "@type": "PostalAddress", addressCountry: "PK" },
      alumniOf: {
        "@type": "CollegeOrUniversity",
        name: "National University of Modern Languages (NUML)",
      },
      award: ["2nd place — HackaForge NUML 1.0", "2nd place — HackaForge NUML 3.0"],
      hasCredential: {
        "@type": "EducationalOccupationalCredential",
        name: "MERN Stack Development",
        credentialCategory: "Certificate",
        recognizedBy: { "@type": "Organization", name: "PNY Training" },
      },
      knowsAbout: [
        "Artificial Intelligence",
        "AI Agents",
        "Retrieval Augmented Generation",
        "LangChain",
        "LangGraph",
        "Python",
        "React",
        "Next.js",
        "Node.js",
        "MongoDB",
        "Full-Stack Development",
      ],
      sameAs: [
        "https://github.com/abdullahAzmat-art",
        "https://www.linkedin.com/in/abdullah-azmat-art/",
        "https://instagram.com/brav_eabdullah",
      ],
    },
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      url: `${SITE_URL}/`,
      name: "Abdullah Azmat — AI Engineer & Full-Stack Developer",
      description:
        "Portfolio of Abdullah Azmat, an AI engineer and full-stack developer building AI agents, RAG systems, and web applications.",
      inLanguage: "en",
      publisher: { "@id": `${SITE_URL}/#person` },
    },
    {
      "@type": "ProfilePage",
      "@id": `${SITE_URL}/#webpage`,
      url: `${SITE_URL}/`,
      name: "Abdullah Azmat — AI Engineer & Full-Stack Developer",
      description:
        "AI engineer and full-stack developer in Pakistan building AI agents, RAG systems, and high-performance web apps with Python, LangChain, React, and Node.js.",
      isPartOf: { "@id": `${SITE_URL}/#website` },
      about: { "@id": `${SITE_URL}/#person` },
      mainEntity: { "@id": `${SITE_URL}/#person` },
      primaryImageOfPage: {
        "@type": "ImageObject",
        url: `${SITE_URL}/assets/img/og-cover.png`,
        width: 1200,
        height: 630,
      },
      inLanguage: "en",
      dateCreated: "2026-01-01",
      dateModified: "2026-11-06",
    },
  ],
};
