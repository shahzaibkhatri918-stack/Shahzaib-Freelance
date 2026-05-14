import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import PageHero from "../../components/PageHero";
import { projects } from "../../data/site";

export default function PortfolioPage() {
  return (
    <div className="site">
      <Navbar />
      <main>
        <PageHero label="Portfolio" title="Selected Editing Work" text="This page is ready for your best projects. Replace the placeholders with real video thumbnails, YouTube embeds, or project links." />
        <section className="section">
          <div className="grid">
            {projects.map((project, index) => (
              <article className="card" key={project.title}>
                <div className="thumb">Project {index + 1}</div>
                <span className="tag">{project.type}</span>
                <h3>{project.title}</h3>
                <p>{project.text}</p>
              </article>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
