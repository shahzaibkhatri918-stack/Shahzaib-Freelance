import Link from "next/link";
import { site } from "../data/site";

const links = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Services", href: "/services" },
  { label: "Experience", href: "/experience" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const parts = site.brand.split(" ");
  return (
    <header className="nav">
      <Link className="brand" href="/"><span>{parts[0]}</span> {parts[1]}</Link>
      <nav className="navLinks">
        {links.map((link) => <Link href={link.href} key={link.href}>{link.label}</Link>)}
      </nav>
      <Link className="navCta" href="/contact">Hire Me</Link>
    </header>
  );
}
