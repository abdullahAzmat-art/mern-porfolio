"use client";

import { useEffect } from "react";
import { initPortfolio } from "@/lib/interactions";

export default function SiteInteractions() {
  useEffect(() => {
    initPortfolio();

    if (process.env.NODE_ENV !== "production") return;
    if (!("serviceWorker" in navigator)) return;

    const register = () => {
      navigator.serviceWorker.register("/sw.js").catch(() => {
        // Registration is an enhancement; the site works without it.
      });
    };

    if (document.readyState === "complete") {
      register();
    } else {
      window.addEventListener("load", register, { once: true });
    }

    return () => {
      window.removeEventListener("load", register);
    };
  }, []);

  return null;
}
