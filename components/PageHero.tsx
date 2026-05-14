type PageHeroProps = { label: string; title: string; text: string; };
export default function PageHero({ label, title, text }: PageHeroProps) {
  return (
    <section className="pageHero">
      <p className="miniLabel">{label}</p>
      <h1>{title}</h1>
      <p>{text}</p>
    </section>
  );
}
