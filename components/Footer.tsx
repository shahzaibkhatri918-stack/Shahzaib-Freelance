import Link from "next/link";
import { site } from "../data/site";

export default function Footer() {
  return (
    <footer className="footer fade-up">
      <div className="footerTop">
        <div>
          <h2>{site.name}</h2>
          <p>Professional video editing for creators, brands and businesses that want cleaner storytelling, higher retention and premium visuals.</p>
        </div>
        <div className="footerCta">
          <Link className="btn" href="/contact">Book a Project</Link>
          <a className="btn outline" href={`mailto:${site.email}`}>Email Me</a>
        </div>
      </div>

      <div className="footerGrid">
        <div>
          <h4>Services</h4>
          <p>Talking Head Editing</p><p>VSL Videos</p><p>Facebook Ads</p><p>Podcast Editing</p>
        </div>
        <div>
          <h4>Pages</h4>
          <Link href="/portfolio">Portfolio</Link><Link href="/services">Services</Link><Link href="/experience">Experience</Link><Link href="/contact">Contact</Link>
        </div>
        <div>
          <h4>Contact</h4>
          <p>{site.email}</p><p>{site.phone}</p><p>Available for freelance projects</p>
        </div>
      </div>

      <div className="footerBottom">
        <span>© 2026 {site.name}. All rights reserved.</span>
        <span>DaVinci Resolve Video Editor</span>
      </div>
    </footer>
  );
}
