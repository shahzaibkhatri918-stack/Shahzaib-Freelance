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
  <a
    href={site.facebook}
    target="_blank"
    rel="noreferrer"
    aria-label="Facebook"
  >
    <i className="fab fa-facebook-f"></i>
  </a>

  <a
    href={site.fiverr}
    target="_blank"
    rel="noreferrer"
    aria-label="Fiverr"
  >
    Fi
  </a>

  <a
    href={site.whatsapp}
    target="_blank"
    rel="noreferrer"
    aria-label="WhatsApp"
  >
    <i className="fab fa-whatsapp"></i>
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
