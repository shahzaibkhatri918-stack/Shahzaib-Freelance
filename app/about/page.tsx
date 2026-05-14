import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import PageHero from "../../components/PageHero";
import { skills } from "../../data/site";

export default function AboutPage() {
  return (
    <div className="site">
      <Navbar />
      <main>
        <PageHero label="About" title="I Edit Videos That Feel Premium" text="I am Shahzaib Soomro, a professional freelance video editor working with local and international clients. My style is clean, modern, cinematic, fast-paced and focused on viewer retention." />
        <section className="section">
          <div className="twoCol">
            <div className="card"><span className="tag">Editing Style</span><h3>Clean, Modern & High Retention</h3><p>I create engaging edits with smooth transitions, sound design, color grading, motion graphics and strong pacing.</p></div>
            <div className="card"><span className="tag">Main Software</span><h3>DaVinci Resolve</h3><p>My main editing software is DaVinci Resolve for professional editing, color grading, audio polish and cinematic storytelling.</p><div className="skillWrap">{skills.map((skill) => <span className="skill" key={skill}>{skill}</span>)}</div></div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
