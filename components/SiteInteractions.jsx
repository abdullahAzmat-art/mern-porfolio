"use client";

import { useEffect } from "react";
import { initPortfolio } from "@/lib/interactions";

export default function SiteInteractions() {
  useEffect(() => {
    initPortfolio();
  }, []);

  return null;
}
