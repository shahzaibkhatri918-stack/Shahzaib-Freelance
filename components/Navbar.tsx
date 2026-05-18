"use client";

import { useState } from "react";
import Link from "next/link";
import { site } from "../data/site";

const links = [
  { label: "Home", href: "/" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Services", href: "/services" },
  { label: "Experience", href: "/experience" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="nav fade-down">
      <Link className="brand" href="/" onClick={() => setOpen(false)}>
        {site.name}
      </Link>

      <nav className="navLinks">
        {links.map((link) => (
          <Link key={link.href} href={link.href}>{link.label}</Link>
        ))}
      </nav>

      <Link className="navCta" href="/contact">Start Project</Link>

      <button
        className={`menuBtn ${open ? "active" : ""}`}
        onClick={() => setOpen(!open)}
        aria-label="Open menu"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      <div className={`mobileMenu ${open ? "show" : ""}`}>
        <button className="menuClose" onClick={() => setOpen(false)} aria-label="Close menu">×</button>

        <div className="mobileMenuLinks">
          {links.map((link) => (
            <Link key={link.href} href={link.href} onClick={() => setOpen(false)}>
              {link.label}
            </Link>
          ))}
        </div>

        <a
          className="whatsappMenuBtn"
          href={site.whatsapp}
          target="_blank"
          rel="noreferrer"
        >
          <span className="waIcon">☎</span>
          WhatsApp
        </a>
      </div>

      {open && <button className="menuBackdrop" onClick={() => setOpen(false)} aria-label="Close menu overlay"></button>}
    </header>
  );
}
