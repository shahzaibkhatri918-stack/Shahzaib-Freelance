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
          <Link href="/contact">Contact</Link>
        </div>

        <div>
          <h4>Connect With Me</h4>
          <div className="socialRow">
            <a href={site.facebook} target="_blank" rel="noreferrer" aria-label="Facebook">
              <svg viewBox="0 0 24 24"><path d="M14 8h3V4h-3c-3.3 0-5 2-5 5v3H6v4h3v8h4v-8h3.4l.6-4H13V9c0-.7.3-1 1-1z"/></svg>
            </a>
            <a href={site.fiverr} target="_blank" rel="noreferrer" aria-label="Fiverr">
              <svg viewBox="0 0 24 24"><path d="M5 8h3V7c0-2.5 1.5-4 4.2-4H15v4h-2.2c-.7 0-.8.3-.8.9V8h4v4h-4v8H8v-8H5V8zm12 0h4v12h-4V8zm0-5h4v4h-4V3z"/></svg>
            </a>
            <a href={site.whatsapp} target="_blank" rel="noreferrer" aria-label="WhatsApp">
              <svg viewBox="0 0 24 24"><path d="M20.5 3.5A11.8 11.8 0 0 0 12.1 0C5.6 0 .3 5.3.3 11.8c0 2.1.6 4.1 1.6 5.9L0 24l6.5-1.7c1.7.9 3.6 1.4 5.6 1.4 6.5 0 11.8-5.3 11.8-11.8 0-3.2-1.2-6.1-3.4-8.4zM12.1 21.7c-1.8 0-3.5-.5-5-1.4l-.4-.2-3.8 1 1-3.7-.2-.4a9.8 9.8 0 1 1 8.4 4.7zm5.4-7.3c-.3-.2-1.8-.9-2.1-1-.3-.1-.5-.2-.7.2-.2.3-.8 1-.9 1.2-.2.2-.3.2-.6.1-.3-.2-1.2-.4-2.3-1.4-.9-.8-1.4-1.7-1.6-2-.2-.3 0-.5.1-.6.1-.1.3-.3.4-.5.1-.2.2-.3.3-.5.1-.2.1-.4 0-.5-.1-.2-.7-1.7-1-2.3-.3-.6-.5-.5-.7-.5h-.6c-.2 0-.5.1-.8.4-.3.3-1 1-1 2.4s1 2.8 1.2 3c.2.2 2 3.1 4.9 4.3.7.3 1.2.5 1.6.6.7.2 1.3.2 1.8.1.6-.1 1.8-.7 2-1.4.2-.7.2-1.3.2-1.4-.1-.1-.3-.2-.6-.4z"/></svg>
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
