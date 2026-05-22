"use client";

import { useState } from "react";
import Link from "next/link";
import { site } from "../data/site";

const links = [
  { label: "Home", href: "/" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Services", href: "/services" },
  { label: "Experience", href: "/experience" },
  { label: "About Us", href: "/about" },
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
        <button className="menuClose" onClick={() => setOpen(false)} aria-label="Close menu">
          <span></span>
        </button>

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
          <span className="waIcon">
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="M20.5 3.5A11.8 11.8 0 0 0 12.1 0C5.6 0 .3 5.3.3 11.8c0 2.1.6 4.1 1.6 5.9L0 24l6.5-1.7c1.7.9 3.6 1.4 5.6 1.4 6.5 0 11.8-5.3 11.8-11.8 0-3.2-1.2-6.1-3.4-8.4zM12.1 21.7c-1.8 0-3.5-.5-5-1.4l-.4-.2-3.8 1 1-3.7-.2-.4a9.8 9.8 0 1 1 8.4 4.7zm5.4-7.3c-.3-.2-1.8-.9-2.1-1-.3-.1-.5-.2-.7.2-.2.3-.8 1-.9 1.2-.2.2-.3.2-.6.1-.3-.2-1.2-.4-2.3-1.4-.9-.8-1.4-1.7-1.6-2-.2-.3 0-.5.1-.6.1-.1.3-.3.4-.5.1-.2.2-.3.3-.5.1-.2.1-.4 0-.5-.1-.2-.7-1.7-1-2.3-.3-.6-.5-.5-.7-.5h-.6c-.2 0-.5.1-.8.4-.3.3-1 1-1 2.4s1 2.8 1.2 3c.2.2 2 3.1 4.9 4.3.7.3 1.2.5 1.6.6.7.2 1.3.2 1.8.1.6-.1 1.8-.7 2-1.4.2-.7.2-1.3.2-1.4-.1-.1-.3-.2-.6-.4z"/>
            </svg>
          </span>
          WhatsApp
        </a>
      </div>

      {open && <button className="menuBackdrop" onClick={() => setOpen(false)} aria-label="Close menu overlay"></button>}
    </header>
  );
}
