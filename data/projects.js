const email = "hassanazmat079@gmail.com";
const mailto = (subject) => `mailto:${email}?subject=${encodeURIComponent(subject)}`;

export const CONTACT_EMAIL = email;

/* ------------------------------------------------------------
   Project case-study data
   ------------------------------------------------------------ */
export const projects = {
    lawfirm: {
      title: "Law Firm Intake & Client Management System",
      category: "AI platform · Featured",
      status: "Flagship build",
      statusClass: "",
      image: "/assets/img/lawfirm.webp",
      alt: "Law firm intake and client management dashboard",
      overview:
        "A full-stack system that modernises how law firms handle new client enquiries. It replaces scattered emails and delayed responses with a single, structured intake workflow powered by AI — capturing enquiries, qualifying leads, and routing them to the right person automatically.",
      note: "Client build · walkthrough available on request",
      highlights: [
        "Public client intake through structured online enquiry forms",
        "AI-assisted intake with guided, safe client conversations",
        "Lead management that organises enquiries into leads and conversations",
        "Smart staff dashboard with lead statuses, follow-ups and notifications",
        "Practice-area management with configurable rules, office hours and intake logic",
        "Secure, protected staff access for the firm's team",
      ],
      stack: ["React", "Node.js", "MongoDB", "Express", "LangChain", "OpenAI", "RAG"],
      links: [
        {
          label: "Request a walkthrough",
          href: mailto("Law firm intake system — walkthrough"),
          external: false,
          ghost: true,
        },
      ],
    },

    aiadgen: {
      title: "AI Ad Generator",
      category: "AI application",
      status: "Live",
      statusClass: "status--live",
      image: "/assets/img/covers/ai-ad-generator.png",
      alt: "AI Ad Generator — paste a link and generate ad creatives",
      overview:
        "An AI-powered ad generation tool built to simplify marketing content creation. Users paste a website URL and the platform analyses the product or service to generate high-quality advertising creatives — saving time and reducing the manual effort behind ad design and copywriting.",
      highlights: [
        "Paste a link and generate ad creatives automatically",
        "Product and service analysis from any website URL",
        "High-quality advertising content with minimal manual effort",
        "Helps businesses produce marketing content faster",
      ],
      stack: ["Next.js", "React", "OpenAI", "Vercel"],
      links: [
        {
          label: "Visit live site",
          href: "https://ai-ad-generator-cdtp.vercel.app/",
          external: true,
        },
      ],
    },

    legalintel: {
      title: "LegalIntel AI",
      category: "AI application",
      status: "In development",
      statusClass: "status--dev",
      image: "/assets/img/covers/legalintel.png",
      alt: "LegalIntel AI document intelligence interface",
      overview:
        "An AI document intelligence engine for legal teams. Upload contracts, commercial leases, and NDAs — then ask questions in plain English. Every answer is backed by exact page citations from the original document, keeping the output grounded and verifiable.",
      note: "In active development",
      highlights: [
        "Natural-language Q&A across contracts, leases and NDAs",
        "Answers backed by exact page and clause citations",
        "Clause-level risk analysis for legal review",
        "Document workspace designed for zero-hallucination output",
      ],
      stack: ["Next.js 14", "LangChain", "OpenAI API", "Tailwind CSS"],
      links: [
        {
          label: "Ask about this build",
          href: mailto("LegalIntel AI — project question"),
          external: false,
          ghost: true,
        },
      ],
    },

    royalvenue: {
      title: "Royal Venue",
      category: "Booking platform",
      status: "Live",
      statusClass: "status--live",
      image: "./assets/img/covers/royalvenue.png",
      alt: "Royal Venue marriage hall booking interface",
      overview:
        "A platform connecting customers with marriage hall managers. It brings availability checks, venue details, and reservation enquiries into one calm, visual booking flow — replacing phone calls and scattered messages.",
      highlights: [
        "Pre-booking flow for checking hall availability",
        "Detailed venue profiles with capacity and pricing context",
        "Real-time reservation enquiries for customers and managers",
        "Responsive experience designed for mobile-first browsing",
      ],
      stack: ["React", "Node.js", "MongoDB", "Express"],
      links: [
        {
          label: "Visit live site",
          href: "https://royal-venue.vercel.app/",
          external: true,
        },
        {
          label: "View code",
          href: "https://github.com/abdullahAzmat-art/Mariage-hall-booking-System",
          external: true,
          ghost: true,
        },
      ],
    },

    vortex: {
      title: "VORTX",
      category: "Web application",
      status: "Code available",
      statusClass: "status--dev",
      image: "/assets/img/covers/vortex.png",
      alt: "VORTX esports tournament platform interface",
      overview:
        "An online tournament hosting platform for competitive gaming. It supports multiple games with automated bracket generation, live match updates, and real-time leaderboards — built for speed and spectacle.",
      highlights: [
        "Automated tournament bracket generation",
        "Real-time leaderboards and match updates",
        "Multi-game tournament hosting",
        "WebSocket-powered live experience",
      ],
      stack: ["React", "Node.js", "MongoDB", "WebSocket"],
      links: [
        {
          label: "View code",
          href: "https://github.com/abdullahAzmat-art/vortex-esports",
          external: true,
          ghost: true,
        },
      ],
    },

    ayesha: {
      title: "Ayesha.a Collection",
      category: "E-commerce",
      status: "Code available",
      statusClass: "status--dev",
      image: "/assets/img/covers/ayesha.svg",
      alt: "Ayesha.a Collection boutique storefront",
      overview:
        "An elegant e-commerce platform for a boutique clothing brand. Curated collections, quiet-luxury styling, and a seamless shopping experience come together in a storefront designed to feel as considered as the clothes.",
      highlights: [
        "Curated collections with an editorial storefront",
        "Seamless product browsing and shopping flow",
        "Responsive, mobile-first shopping experience",
        "Supabase-backed product and order data",
      ],
      stack: ["React", "Node.js", "Express", "MongoDB", "Supabase"],
      links: [
        {
          label: "View code",
          href: "https://github.com/abdullahAzmat-art/Boutique-project-",
          external: true,
          ghost: true,
        },
      ],
    },

    
    campus: {
      title: "Campus Lost & Found",
      category: "Community platform",
      status: "In development",
      statusClass: "status--dev",
      image: "/assets/img/covers/campus.png",
      alt: "Campus Lost and Found community platform",
      overview:
        "A smart community platform for reporting, discovering, and recovering misplaced campus belongings. Location tagging and claim validation help the right item get back to the right person — without the chaos of group chats.",
      note: "University project · walkthrough available on request",
      highlights: [
        "Report and discover lost or found items",
        "Location tagging for faster recovery",
        "Item claim validation to reduce mismatches",
        "A clean, community-first browsing experience",
      ],
      stack: ["React", ".NET", "MySQL", "C#"],
      links: [
        {
          label: "Ask about this build",
          href: mailto("Campus Lost & Found — project question"),
          external: false,
          ghost: true,
        },
      ],
    },
  };

