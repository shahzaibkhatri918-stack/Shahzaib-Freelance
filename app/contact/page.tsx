import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import PageHero from "../../components/PageHero";
import { site } from "../../data/site";

export default function ContactPage() {
  return <div className="site"><Navbar /><main><PageHero label="Contact" title="Ready To Build Your Next Video?" text="Contact me for talking head editing, VSL videos, Facebook ads, podcast editing, reels, YouTube editing, corporate videos and event recap edits." /><section className="section fade-up"><div className="podcastPanel" style={{textAlign:"center"}}><h3>Start Your Project</h3><p><a href={`mailto:${site.email}`}>{site.email}</a><br /><a href={site.whatsapp} target="_blank" rel="noreferrer">{site.phoneDisplay}</a></p><div className="heroActions" style={{justifyContent:"center"}}><a className="btn" href={`mailto:${site.email}`}>Email Me</a><a className="btn outline" href={site.whatsapp} target="_blank" rel="noreferrer">WhatsApp Me</a></div></div></section></main><Footer /></div>;
}
