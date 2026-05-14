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
        <div><h4>Services</h4><p>Talking Head Editing</p><p>VSL Videos</p><p>Facebook Ads</p><p>Podcast Editing</p></div>
        <div><h4>Navigation</h4><Link href="/portfolio">Portfolio</Link><Link href="/services">Services</Link><Link href="/experience">Experience</Link><Link href="/contact">Contact</Link></div>
        <div><h4>Contact</h4><p>{site.email}</p><p>{site.phone}</p><p>DaVinci Resolve Editor</p></div>
      </div>
      <div className="footerBottom"><span>© 2026 {site.name}. All rights reserved.</span><span>Professional Video Editor</span></div>
    </footer>
  );
}
