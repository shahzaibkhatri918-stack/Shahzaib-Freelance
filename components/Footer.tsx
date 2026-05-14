import { site } from "../data/site";
export default function Footer() {
  return (
    <footer className="footer">
      <p>© 2026 {site.name}</p>
      <p>{site.title}</p>
    </footer>
  );
}
