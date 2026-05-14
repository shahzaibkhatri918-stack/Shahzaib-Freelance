import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import PageHero from "../../components/PageHero";
import { projects, categories } from "../../data/site";

export default function PortfolioPage() {
  return (
    <div className="site">
      <Navbar />
      <main>
        <PageHero label="Portfolio" title="Selected Video Editing Projects" text="Upload your best project thumbnails and videos here. The layout is ready for talking head edits, VSL videos, ads, podcasts, reels and corporate work." />
        <section className="section fade-up">
          <div className="categoryRow">{categories.map((cat) => <div className="category" key={cat}><span>▣</span><b>{cat}</b><small>Projects</small></div>)}</div>
          <div className="grid">
            {projects.map((project, index) => (
              <article className="projectCard" key={project.title}>
                <div className="projectThumb"><img src={project.img} alt={project.title} /><span>Project {index + 1}</span></div>
                <div className="projectInfo"><span className="tag">{project.type}</span><h3>{project.title}</h3><p>Replace this card with your real project video or case study.</p></div>
              </article>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
