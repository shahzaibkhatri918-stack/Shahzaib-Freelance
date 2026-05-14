import Link from "next/link";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import VideoFrame from "../components/VideoFrame";
import { projects } from "../data/site";

export default function HomePage() {
  return (
    <div className="site">
      <Navbar />
      <main>
        <section className="homeHero">
          <div>
            <p className="kicker"><span>Shahzaib</span> Edit</p>
            <h1>Transforming <span className="yellow">Vision</span> Into Unforgettable <span className="pink">Video</span></h1>
            <p className="heroText">Expert video editing for brands, creators, businesses and filmmakers seeking clean storytelling, high retention and global impact.</p>
            <div className="heroActions">
              <Link className="btn" href="/portfolio">View Portfolio</Link>
              <Link className="btn dark" href="/contact">Start Project</Link>
            </div>
          </div>
          <VideoFrame />
        </section>
        <section className="section">
          <h2>Featured Projects</h2>
          <p className="sectionIntro">Replace these cards with your real thumbnails and videos.</p>
          <div className="grid">
            {projects.slice(0, 3).map((project, index) => (
              <article className="card" key={project.title}>
                <div className="thumb">Video {index + 1}</div>
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
