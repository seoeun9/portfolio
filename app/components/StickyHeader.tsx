"use client";

import { useEffect, useState } from "react";

export function StickyHeader() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const updateHeader = () => setIsScrolled(window.scrollY > 24);
    updateHeader();
    window.addEventListener("scroll", updateHeader, { passive: true });
    return () => window.removeEventListener("scroll", updateHeader);
  }, []);

  return (
    <header className={`site-header ${isScrolled ? "is-scrolled" : ""}`}>
      <div className="site-header-inner">
        <span className="text-xl font-semibold text-black uppercase">JSE</span>
        <nav className="flex items-center gap-6 text-lg font-medium text-black">
          <a className="transition hover:text-[#6e4bd1]" href="#overview">
            Overview
          </a>
          <a className="transition hover:text-[#6e4bd1]" href="#projects">
            Projects
          </a>
          <a className="transition hover:text-[#6e4bd1]" href="#contact">
            Contact
          </a>
        </nav>
      </div>
    </header>
  );
}
