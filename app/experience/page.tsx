import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import PageHero from "../../components/PageHero";

export default function ExperiencePage() {
  return (
    <div className="site"><Navbar /><main><PageHero label="Experience" title="Professional Journey" text="Building editing experience through freelance work, local clients, international clients and content-focused projects." /><section className="section fade-up"><div className="journeyWrap"><div className="journeyCard"><div className="date">2024 - Present</div><div><h3>Freelance Photo & Video Content Editor</h3><p>Creating engaging videos, reels, talking head edits, event recaps and conversion-focused content for brands and creators.</p></div></div><div className="journeyCard"><div className="date">Client Projects</div><div><h3>Local & International Clients</h3><p>Working with clients who need reliable editing, clean communication and professional delivery.</p></div></div><div className="journeyCard"><div className="date">Core Focus</div><div><h3>High Retention Editing</h3><p>Specialized in clean pacing, sound design, captions, b-roll, smooth transitions and polished final videos.</p></div></div></div></section></main><Footer /></div>
  );
}
