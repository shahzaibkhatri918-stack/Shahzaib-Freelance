import Link from "next/link";
import { site } from "../data/site";
const links = [
  { label: "Home", href: "/" }, { label: "Portfolio", href: "/portfolio" },
  { label: "Services", href: "/services" }, { label: "Experience", href: "/experience" },
  { label: "Contact", href: "/contact" },
];
export default function Navbar() {
  return <header className="nav fade-down">
    <Link className="brand" href="/">{site.name}</Link>
    <nav className="navLinks">{links.map((link)=><Link key={link.href} href={link.href}>{link.label}</Link>)}</nav>
    <Link className="navCta" href="/contact">Start Project</Link>
  </header>;
}
