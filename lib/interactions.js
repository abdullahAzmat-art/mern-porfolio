import { projects } from "@/data/projects";

/* ============================================================
   ABDULLAH AZMAT — PORTFOLIO INTERACTIONS
   Browser enhancements for the Next.js app.
   The markup is server-rendered, so everything here runs after
   hydration inside a single client island.
   ============================================================ */

let booted = false;

export function initPortfolio() {
  if (booted) return;
  booted = true;

  const $ = (selector, context = document) => context.querySelector(selector);
  const $$ = (selector, context = document) =>
    Array.from(context.querySelectorAll(selector));

  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const finePointer = window.matchMedia("(hover: hover) and (pointer: fine)").matches;

  const email = "hassanazmat079@gmail.com";
  const mailto = (subject) => `mailto:${email}?subject=${encodeURIComponent(subject)}`;

  const escapeHTML = (value) =>
    String(value).replace(/[&<>"']/g, (character) => {
      const map = {
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#39;",
      };
      return map[character];
    });



  /* ------------------------------------------------------------
     Header, scroll progress, active nav
     ------------------------------------------------------------ */
  const header = $("#site-header");
  const progress = $("#scroll-progress");
  let scrollTicking = false;

  function updateScrollUI() {
    const scrollTop = window.scrollY || document.documentElement.scrollTop;
    const scrollable = document.documentElement.scrollHeight - window.innerHeight;

    if (header) header.classList.toggle("is-scrolled", scrollTop > 20);
    if (progress) {
      const ratio = scrollable > 0 ? Math.min(scrollTop / scrollable, 1) : 0;
      progress.style.transform = `scaleX(${ratio})`;
    }
    scrollTicking = false;
  }

  window.addEventListener(
    "scroll",
    () => {
      if (!scrollTicking) {
        window.requestAnimationFrame(updateScrollUI);
        scrollTicking = true;
      }
    },
    { passive: true }
  );
  updateScrollUI();

  const sectionIds = [
    "work",
    "about",
    "services",
    "roadmap",
    "stack",
    "achievements",
    "contact",
  ];
  const navLinks = $$(".nav-link");

  if ("IntersectionObserver" in window) {
    const navObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const id = entry.target.id;
          navLinks.forEach((link) => {
            link.classList.toggle("is-active", link.getAttribute("href") === `#${id}`);
          });
        });
      },
      { rootMargin: "-42% 0px -52% 0px", threshold: 0 }
    );

    sectionIds.forEach((id) => {
      const section = document.getElementById(id);
      if (section) navObserver.observe(section);
    });
  }

  /* ------------------------------------------------------------
     Mobile menu
     ------------------------------------------------------------ */
  const navToggle = $("#nav-toggle");
  const mobileMenu = $("#mobile-menu");
  const menuLabel = navToggle ? $(".menu-label", navToggle) : null;

  function setMenu(open) {
    if (!navToggle || !mobileMenu) return;
    mobileMenu.classList.toggle("is-open", open);
    mobileMenu.setAttribute("aria-hidden", String(!open));
    mobileMenu.inert = !open;
    navToggle.classList.toggle("is-open", open);
    navToggle.setAttribute("aria-expanded", String(open));
    navToggle.setAttribute("aria-label", open ? "Close menu" : "Open menu");
    if (menuLabel) menuLabel.textContent = open ? "Close" : "Menu";
    document.body.classList.toggle("menu-open", open);
  }

  if (navToggle && mobileMenu) {
    navToggle.addEventListener("click", () => {
      setMenu(!mobileMenu.classList.contains("is-open"));
    });

    $$("a", mobileMenu).forEach((link) => {
      link.addEventListener("click", () => setMenu(false));
    });

    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape" && mobileMenu.classList.contains("is-open")) {
        setMenu(false);
        navToggle.focus();
      }
    });

    window.addEventListener("resize", () => {
      if (window.innerWidth > 1040) setMenu(false);
    });
  }

  /* ------------------------------------------------------------
     Reveal on scroll
     ------------------------------------------------------------ */
  const revealElements = $$(".reveal");

  if (reducedMotion || !("IntersectionObserver" in window)) {
    revealElements.forEach((element) => element.classList.add("is-visible"));
  } else {
    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("is-visible");
          revealObserver.unobserve(entry.target);
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -6% 0px" }
    );

    revealElements.forEach((element) => revealObserver.observe(element));
  }

  /* ------------------------------------------------------------
     Split-word headline reveals
     Words are only split when the heading approaches the viewport,
     so first load doesn't rewrite the whole document.
     ------------------------------------------------------------ */
  const splitTitles = $$("[data-split]");

  function prepareTitle(title) {
    if (title.dataset.splitReady) return;
    title.dataset.splitReady = "true";
    title.classList.add("split-title");
    let wordIndex = 0;

    const walker = document.createTreeWalker(title, NodeFilter.SHOW_TEXT, {
      acceptNode: (node) =>
        node.nodeValue.trim() ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_REJECT,
    });

    const textNodes = [];
    while (walker.nextNode()) textNodes.push(walker.currentNode);

    textNodes.forEach((node) => {
      const fragment = document.createDocumentFragment();

      node.nodeValue.split(/(\s+)/).forEach((part) => {
        if (!part) return;

        if (!part.trim()) {
          fragment.appendChild(document.createTextNode(" "));
          return;
        }

        const word = document.createElement("span");
        word.className = "word";

        const inner = document.createElement("span");
        inner.textContent = part;
        inner.style.setProperty("--word-delay", `${Math.min(wordIndex * 55, 620)}ms`);
        wordIndex += 1;

        word.appendChild(inner);
        fragment.appendChild(word);
      });

      node.replaceWith(fragment);
    });
  }

  if (!reducedMotion && splitTitles.length) {
    if ("IntersectionObserver" in window) {
      const splitObserver = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (!entry.isIntersecting) return;
            prepareTitle(entry.target);
            entry.target.classList.add("is-in");
            splitObserver.unobserve(entry.target);
          });
        },
        { threshold: 0.15, rootMargin: "0px 0px 200px 0px" }
      );

      splitTitles.forEach((title) => splitObserver.observe(title));
    } else {
      splitTitles.forEach((title) => {
        prepareTitle(title);
        title.classList.add("is-in");
      });
    }
  }

  /* ------------------------------------------------------------
     Animated stat counters
     ------------------------------------------------------------ */
  const counters = $$("[data-count]");

  function formatCount(value, decimals) {
    return decimals > 0 ? value.toFixed(decimals) : String(Math.round(value));
  }

  function runCounter(element) {
    const target = Number.parseFloat(element.dataset.count);
    const decimals = Number.parseInt(element.dataset.decimals || "0", 10);
    const suffix = element.dataset.suffix || "";

    if (!Number.isFinite(target)) return;

    if (reducedMotion) {
      element.textContent = formatCount(target, decimals) + suffix;
      return;
    }

    const duration = 1300;
    const started = performance.now();

    function frame(now) {
      const ratio = Math.min((now - started) / duration, 1);
      const eased = 1 - Math.pow(1 - ratio, 3);
      element.textContent = formatCount(target * eased, decimals) + suffix;

      if (ratio < 1) {
        window.requestAnimationFrame(frame);
      } else {
        element.textContent = formatCount(target, decimals) + suffix;
        element.classList.add("is-counted");
      }
    }

    window.requestAnimationFrame(frame);
  }

  if (counters.length) {
    if (!("IntersectionObserver" in window)) {
      counters.forEach(runCounter);
    } else {
      const counterObserver = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (!entry.isIntersecting) return;
            runCounter(entry.target);
            counterObserver.unobserve(entry.target);
          });
        },
        { threshold: 0.6 }
      );

      counters.forEach((counter) => counterObserver.observe(counter));
    }
  }

  /* ------------------------------------------------------------
     Custom cursor + magnetic buttons
     ------------------------------------------------------------ */
  if (finePointer && !reducedMotion) {
    const cursor = $("#cursor");
    const dot = cursor ? $(".cursor-dot", cursor) : null;
    const ring = cursor ? $(".cursor-ring", cursor) : null;

    if (cursor && dot && ring) {
      let mouseX = window.innerWidth / 2;
      let mouseY = window.innerHeight / 2;
      let ringX = mouseX;
      let ringY = mouseY;

      window.addEventListener(
        "pointermove",
        (event) => {
          mouseX = event.clientX;
          mouseY = event.clientY;

          if (!document.body.classList.contains("has-cursor")) {
            document.body.classList.add("has-cursor");
          }

          dot.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;
          ring.classList.toggle(
            "is-active",
            Boolean(event.target.closest("a, button, .filter, [data-magnetic]"))
          );
        },
        { passive: true }
      );

      const renderCursor = () => {
        ringX += (mouseX - ringX) * 0.16;
        ringY += (mouseY - ringY) * 0.16;
        ring.style.transform = `translate3d(${ringX}px, ${ringY}px, 0)`;
        window.requestAnimationFrame(renderCursor);
      };

      renderCursor();

      document.addEventListener("mouseleave", () => {
        document.body.classList.remove("has-cursor");
      });
    }

    $$("[data-magnetic]").forEach((element) => {
      element.addEventListener("pointermove", (event) => {
        const rect = element.getBoundingClientRect();
        const offsetX = (event.clientX - rect.left - rect.width / 2) * 0.14;
        const offsetY = (event.clientY - rect.top - rect.height / 2) * 0.2;
        element.style.transform = `translate(${offsetX.toFixed(2)}px, ${offsetY.toFixed(2)}px)`;
      });

      element.addEventListener("pointerleave", () => {
        element.style.transform = "";
      });
    });
  }

  /* ------------------------------------------------------------
     GSAP scroll enhancements (progressive)
     ------------------------------------------------------------ */
  function initMotion() {
    if (reducedMotion || !finePointer || !window.gsap || !window.ScrollTrigger) return;

    const gsap = window.gsap;
    gsap.registerPlugin(window.ScrollTrigger);

    $$("[data-parallax]").forEach((element) => {
      const depth = Number.parseFloat(element.dataset.parallax) || 0.1;
      const trigger = element.closest("section") || element;

      gsap.to(element, {
        y: () => window.innerHeight * depth,
        ease: "none",
        scrollTrigger: {
          trigger,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });
    });

    const heroPanel = $(".hero-panel");
    if (heroPanel) {
      gsap.to(heroPanel, {
        y: -34,
        ease: "none",
        scrollTrigger: {
          trigger: ".hero",
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });
    }

    const browser = $(".featured-media .browser");
    if (browser) {
      gsap.fromTo(
        browser,
        { y: 24 },
        {
          y: -24,
          ease: "none",
          scrollTrigger: {
            trigger: ".featured",
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          },
        }
      );
    }

    $$(".card-media").forEach((media) => {
      gsap.fromTo(
        media,
        { clipPath: "inset(9% 9% 9% 9%)" },
        {
          clipPath: "inset(0% 0% 0% 0%)",
          duration: 1.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: media,
            start: "top 90%",
            once: true,
          },
        }
      );
    });

    const refresh = () => window.ScrollTrigger.refresh();
    window.addEventListener("load", refresh);
    refresh();
    if (document.fonts && document.fonts.ready) {
      document.fonts.ready.then(refresh);
    }
  }

  /* Load GSAP only once the visitor starts using the page. The hero and
     section reveals are CSS/IntersectionObserver driven, so the first paint
     never waits on a third-party animation library. */
  let motionRequested = false;

  function loadMotion() {
    if (motionRequested || reducedMotion || !finePointer) return;
    motionRequested = true;

    if (window.gsap && window.ScrollTrigger) {
      initMotion();
      return;
    }

    const loadScript = (src, onDone) => {
      const script = document.createElement("script");
      script.src = src;
      script.async = true;
      script.onload = onDone;
      script.onerror = onDone;
      document.head.appendChild(script);
    };

    loadScript(
      "https://cdn.jsdelivr.net/npm/gsap@3.12.5/dist/gsap.min.js",
      () => loadScript("https://cdn.jsdelivr.net/npm/gsap@3.12.5/dist/ScrollTrigger.min.js", initMotion)
    );
  }

  ["scroll", "pointerdown", "keydown", "touchstart"].forEach((eventName) => {
    window.addEventListener(eventName, loadMotion, { once: true, passive: true });
  });

  // Support direct visits to a section anchor without an initial scroll gesture.
  if (window.scrollY > 80) window.setTimeout(loadMotion, 1200);

  /* ------------------------------------------------------------
     Project filtering
     ------------------------------------------------------------ */
  const filterButtons = $$(".filter");
  const projectCards = $$("[data-category]");
  const filterStatus = $("#filter-status");

  filterButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const filter = button.dataset.filter;

      filterButtons.forEach((item) => {
        const active = item === button;
        item.classList.toggle("is-active", active);
        item.setAttribute("aria-pressed", String(active));
      });

      let visible = 0;
      projectCards.forEach((card) => {
        const show = filter === "all" || card.dataset.category === filter;
        card.hidden = !show;
        card.classList.remove("card-pop");

        if (show) {
          visible += 1;
          card.classList.add("is-visible");
          void card.offsetWidth;
          card.classList.add("card-pop");
          card.addEventListener(
            "animationend",
            () => card.classList.remove("card-pop"),
            { once: true }
          );
        }
      });

      if (window.ScrollTrigger) window.ScrollTrigger.refresh();

      if (filterStatus) {
        filterStatus.textContent =
          filter === "all"
            ? `Showing all ${visible} projects.`
            : `Showing ${visible} ${button.textContent.replace(/\d+/g, "").trim()} project${
                visible === 1 ? "" : "s"
              }.`;
      }
    });
  });

  /* ------------------------------------------------------------
     Project dialog
     ------------------------------------------------------------ */
  const dialog = $("#project-dialog");
  const dialogClose = $("#dialog-close");
  let lastTrigger = null;

  function renderProject(project) {
    const image = $("#dialog-image");
    const title = $("#dialog-title");
    const category = $("#dialog-cat");
    const status = $("#dialog-status");
    const overview = $("#dialog-overview");
    const highlights = $("#dialog-highlights");
    const stack = $("#dialog-stack");
    const links = $("#dialog-links");

    if (image) {
      image.src = project.image;
      image.alt = project.alt;
    }
    if (title) title.textContent = project.title;
    if (category) category.textContent = project.category;
    if (status) {
      status.textContent = project.status;
      status.className = `status ${project.statusClass || ""}`.trim();
    }
    if (overview) overview.textContent = project.overview;

    if (highlights) {
      highlights.innerHTML = project.highlights
        .map(
          (item) => `
            <li>
              <svg class="icon" aria-hidden="true"><use href="#i-check"></use></svg>
              <span>${escapeHTML(item)}</span>
            </li>`
        )
        .join("");
    }

    if (stack) {
      stack.innerHTML = project.stack
        .map((item) => `<span class="chip">${escapeHTML(item)}</span>`)
        .join("");
    }

    if (links) {
      const note = project.note
        ? `<span class="dialog-note">${escapeHTML(project.note)}</span>`
        : "";

      const linkMarkup = project.links
        .map((link) => {
          const target = link.external
            ? ' target="_blank" rel="noopener noreferrer"'
            : "";
          const className = link.ghost ? "dialog-link dialog-link--ghost" : "dialog-link";
          return `<a class="${className}" href="${link.href}"${target}>${escapeHTML(
            link.label
          )} <svg class="icon" aria-hidden="true"><use href="${
            link.external ? "#i-arrow-up" : "#i-arrow"
          }"></use></svg></a>`;
        })
        .join("");

      links.innerHTML = note + linkMarkup;
    }
  }

  function openProject(id, trigger) {
    const project = projects[id];
    if (!project || !dialog) return;

    lastTrigger = trigger || document.activeElement;
    renderProject(project);

    if (typeof dialog.showModal === "function" && !dialog.open) {
      dialog.showModal();
    } else {
      dialog.setAttribute("open", "");
    }

    const scrollArea = $(".dialog-scroll", dialog);
    if (scrollArea) scrollArea.scrollTop = 0;
    document.body.classList.add("modal-open");
  }

  document.addEventListener("click", (event) => {
    const trigger = event.target.closest("[data-open-project]");
    if (!trigger) return;
    event.preventDefault();
    openProject(trigger.dataset.openProject, trigger);
  });

  if (dialog) {
    dialog.addEventListener("click", (event) => {
      if (event.target === dialog) dialog.close();
    });

    dialog.addEventListener("close", () => {
      document.body.classList.remove("modal-open");
      if (lastTrigger && typeof lastTrigger.focus === "function") {
        lastTrigger.focus({ preventScroll: true });
      }
    });
  }

  if (dialogClose) {
    dialogClose.addEventListener("click", () => {
      if (dialog) dialog.close();
    });
  }

  /* ------------------------------------------------------------
     Copy email
     ------------------------------------------------------------ */
  const copyButton = $("#copy-email");
  let copyTimer = null;

  function copyFallback(value) {
    const field = document.createElement("textarea");
    field.value = value;
    field.setAttribute("readonly", "");
    field.style.position = "fixed";
    field.style.opacity = "0";
    document.body.appendChild(field);
    field.select();
    field.setSelectionRange(0, value.length);

    let copied = false;
    try {
      copied = document.execCommand("copy");
    } catch (error) {
      copied = false;
    }

    field.remove();
    return copied;
  }

  function showCopied() {
    if (!copyButton) return;
    const label = $("span", copyButton);
    copyButton.classList.add("is-copied");
    if (label) label.textContent = "Copied!";
    window.clearTimeout(copyTimer);
    copyTimer = window.setTimeout(() => {
      copyButton.classList.remove("is-copied");
      if (label) label.textContent = "Copy";
    }, 1800);
  }

  if (copyButton) {
    copyButton.addEventListener("click", async () => {
      const value = copyButton.dataset.email || email;
      let copied = false;

      if (navigator.clipboard && window.isSecureContext) {
        try {
          await navigator.clipboard.writeText(value);
          copied = true;
        } catch (error) {
          copied = false;
        }
      }

      if (!copied) copied = copyFallback(value);
      if (copied) showCopied();
    });
  }

  /* ------------------------------------------------------------
     Contact form → mailto
     ------------------------------------------------------------ */
  const contactForm = $("#contact-form");

  if (contactForm) {
    contactForm.addEventListener("submit", (event) => {
      event.preventDefault();

      if (!contactForm.checkValidity()) {
        contactForm.reportValidity();
        return;
      }

      const data = new FormData(contactForm);
      const name = String(data.get("name") || "").trim();
      const sender = String(data.get("email") || "").trim();
      const type = String(data.get("type") || "Project enquiry").trim();
      const message = String(data.get("message") || "").trim();

      const subject = `Project enquiry — ${type} — ${name}`;
      const body = [
        "Hi Abdullah,",
        "",
        message,
        "",
        "—",
        `Name: ${name}`,
        `Email: ${sender}`,
        `Project: ${type}`,
      ].join("\n");

      window.location.href = `mailto:${email}?subject=${encodeURIComponent(
        subject
      )}&body=${encodeURIComponent(body)}`;
    });
  }

  /* ------------------------------------------------------------
     Year
     ------------------------------------------------------------ */
  const year = $("#year");
  if (year) year.textContent = String(new Date().getFullYear());

}
