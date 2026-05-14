type Props = { label: string; title: string; text: string };
export default function PageHero({ label, title, text }: Props) {
  return <section className="pageHero fade-up"><span className="pill">{label}</span><h1>{title}</h1><p>{text}</p></section>;
}
