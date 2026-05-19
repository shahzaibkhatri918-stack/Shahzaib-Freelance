import Link from "next/link";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ServiceOrbit from "../components/ServiceOrbit";
import PortfolioFilter from "../components/PortfolioFilter";
import Testimonials from "../components/Testimonials";
import { services } from "../data/site";

export default function HomePage() {
  return (
    <div className="site">
      <Navbar />
      <main>
        <section className="hero fade-up">
          <div>
            <h1>Transforming <span className="yellow">Vision</span> Into Unforgettable <span className="pink">Video</span></h1>
            <p className="heroText">Expert video editing for brands, creators and businesses seeking cinematic storytelling, clean pacing and premium impact.</p>
            <div className="heroStats"><div><strong>70+</strong><span>Projects Completed</span></div><div><strong>50M+</strong><span>Potential Views Created</span></div></div>
            <div className="heroActions"><Link className="btn" href="/portfolio">View Portfolio</Link><Link className="btn outline" href="/contact">Start Project</Link></div>
          </div>
         <div className="heroVisual">
  <video
    className="heroVideo"
    src="/hero-video.mp4"
    autoPlay
  muted
  loop
  playsInline
  controls
/>
  <div className="floatingBadge">Cinematic Video</div>
</div>
        </section>
        <section className="section fade-up"><div className="sectionTitle"><span className="pill">Featured Portfolio</span><h2>Discover <span className="yellow">Editing Work</span></h2><p>A curated showcase of premium video edits designed for creators, brands and businesses worldwide..</p></div><PortfolioFilter /></section>
        <section className="orbitSection"><div className="orbitTitle fade-up"><span className="pill">Motion Services</span><h2>Premium <span className="yellow">Editing Services</span> In Motion</h2><p>Explore my core editing services built to make every video look professional.</p></div><ServiceOrbit /></section>
        <section className="section dark fade-up"><div className="sectionTitle"><span className="pill">Creative Services</span><h2>World-Class <span className="yellow">Video Editing</span></h2><p>Professional editing services designed for attention, retention and conversion.</p></div><div className="serviceGrid">{services.map((service)=><article className="serviceCard" key={service.title}><div className="serviceIcon">{service.icon}</div><span className="serviceLabel">{service.tag}</span><h3>{service.title}</h3><p>{service.text}</p><ul>{service.points.map((p)=><li key={p}>{p}</li>)}</ul></article>)}</div></section>
        <Testimonials />
      </main>
      <Footer />
    </div>
  );
}
