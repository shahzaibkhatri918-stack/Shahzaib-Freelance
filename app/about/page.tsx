import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import PageHero from "../../components/PageHero";
import { skills } from "../../data/site";

export default function AboutPage() {
  return (
    <div className="site"><Navbar /><main><PageHero label="About" title="Shahzaib Soomro — Professional Video Editor" text="I create clean, modern, professional, fast-paced and cinematic videos for businesses, brands, creators and international clients." /><section className="section fade-up"><div className="split"><div><h2 style={{fontFamily:"Georgia,serif",fontSize:"54px",margin:"0 0 20px"}}>Editing Style</h2><p className="sectionTitle p">My focus is strong hooks, smooth pacing, premium visuals, clear sound, clean subtitles and a final video that feels professional.</p><div className="skills">{skills.map((skill) => <span className="skill" key={skill}>{skill}</span>)}</div></div><div className="podcastPanel"><h3>Main Software</h3><p>DaVinci Resolve is my main software for editing, color grading, transitions, audio polish and cinematic storytelling.</p><div className="progress"><span></span></div></div></div></section></main><Footer /></div>
  );
}
