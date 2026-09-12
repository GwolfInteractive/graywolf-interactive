"use client";

import { useEffect } from "react";

function scrollToHash() {
  const id = decodeURIComponent(window.location.hash.replace(/^#/, ""));
  if (!id) return;
  const el = document.getElementById(id);
  if (!el) return;
  const header = document.getElementById("header");
  const offset = header?.offsetHeight ?? 72;
  const top = el.getBoundingClientRect().top + window.scrollY - offset;
  window.scrollTo({ top: Math.max(0, top), behavior: "smooth" });
}

export default function HashScroll() {
  useEffect(() => {
    const first = window.setTimeout(scrollToHash, 50);
    const retry = window.setTimeout(scrollToHash, 280);
    window.addEventListener("hashchange", scrollToHash);
    window.addEventListener("popstate", scrollToHash);
    return () => {
      window.clearTimeout(first);
      window.clearTimeout(retry);
      window.removeEventListener("hashchange", scrollToHash);
      window.removeEventListener("popstate", scrollToHash);
    };
  }, []);

  return null;
}
