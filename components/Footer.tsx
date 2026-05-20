import Link from "next/link";
import { site } from "../data/site";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footerGlow"></div>
      <div className="footerTop">
        <div>
          <span className="footerPill">Available For Projects</span>
          <h2>{site.name}</h2>
          <p>Premium video editing for creators, brands and businesses that want cinematic visuals, strong retention and clean storytelling.</p>
        </div>

        <div className="footerCta">
          <Link className="btn" href="/contact">Book a Project</Link>
          <a className="btn outline" href={`mailto:${site.email}`}>Email Me</a>
        </div>
      </div>

      <div className="footerGrid">
        <div>
          <h4>Services</h4>
          <Link href="/services">Talking Head Editing</Link>
          <Link href="/services">VSL Videos</Link>
          <Link href="/services">Facebook Ads</Link>
          <Link href="/services">Podcast Editing</Link>
        </div>

        <div>
          <h4>Navigation</h4>
          <Link href="/portfolio">Portfolio</Link>
          <Link href="/services">Services</Link>
          <Link href="/experience">Experience</Link>
          <Link href="/about">About Us</Link>
          <Link href="/contact">Contact</Link>
        </div>

        <div>
          <h4>Connect With Me</h4>
       <div className="socialRow">
  <a
    href={site.facebook}
    target="_blank"
    rel="noreferrer"
    aria-label="Facebook"
    title="Facebook"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="currentColor"
    >
      <path d="M24 12.073C24 5.405 18.627 0 12 0S0 5.405 0 12.073c0 6.019 4.388 11.009 10.125 11.927v-8.437H7.078v-3.49h3.047V9.41c0-3.017 1.792-4.684 4.533-4.684 1.313 0 2.686.235 2.686.235v2.962h-1.514c-1.491 0-1.956.928-1.956 1.88v2.27h3.328l-.532 3.49h-2.796V24C19.612 23.082 24 18.092 24 12.073z"/>
    </svg>
  </a>

  <a
    href={site.fiverr}
    target="_blank"
    rel="noreferrer"
    aria-label="Fiverr"
    title="Fiverr"
  >
    <span style={{ fontWeight: 700, fontSize: "16px" }}>Fi</span>
  </a>

  <a
    href={site.whatsapp}
    target="_blank"
    rel="noreferrer"
    aria-label="WhatsApp"
    title="WhatsApp"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 32 32"
      fill="currentColor"
    >
      <path d="M16.04 3C8.84 3 3 8.74 3 15.83c0 2.52.74 4.98 2.13 7.09L3 29l6.27-2.05a13.15 13.15 0 0 0 6.77 1.88c7.2 0 13.04-5.74 13.04-12.83C29.08 8.74 23.24 3 16.04 3zm0 23.52c-2.09 0-4.13-.57-5.91-1.65l-.42-.25-3.72 1.22 1.22-3.62-.27-.44a10.37 10.37 0 0 1-1.6-5.55c0-5.75 4.78-10.42 10.7-10.42 5.9 0 10.7 4.67 10.7 10.42 0 5.75-4.8 10.42-10.7 10.42zm5.87-7.81c-.32-.16-1.9-.93-2.2-1.03-.3-.11-.52-.16-.74.16-.21.31-.84 1.03-1.02 1.24-.19.21-.37.24-.69.08-.32-.16-1.35-.49-2.58-1.57-.96-.84-1.61-1.88-1.8-2.2-.18-.31-.02-.48.14-.63.15-.14.32-.37.48-.55.16-.19.21-.31.32-.52.1-.21.05-.39-.03-.55-.08-.16-.74-1.78-1.01-2.43-.27-.65-.54-.56-.74-.57h-.63c-.21 0-.55.08-.84.39-.29.31-1.11 1.08-1.11 2.63s1.14 3.04 1.3 3.25c.16.21 2.25 3.56 5.45 4.99.76.33 1.36.53 1.82.68.77.24 1.46.21 2.01.13.61-.09 1.9-.78 2.17-1.53.27-.75.27-1.39.19-1.53-.08-.14-.29-.21-.61-.37z"/>
    </svg>
  </a>
</div>
          <a href={`mailto:${site.email}`}>{site.email}</a>
          <a href={site.whatsapp} target="_blank" rel="noreferrer">{site.phoneDisplay}</a>
        </div>
      </div>

      <div className="footerBottom">
        <span>© 2026 {site.name}. All rights reserved.</span>
        <span>Professional Video Editor</span>
      </div>
    </footer>
  );
}
