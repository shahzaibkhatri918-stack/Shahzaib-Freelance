import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import PageHero from "../../components/PageHero";

export default function ExperiencePage() {
  return (
    <div className="site">
      <Navbar />
      <main>
        <PageHero label="Experience" title="Freelance Video Editing Experience" text="Professional freelance video editor working with local and international clients, creating engaging and conversion-focused videos for businesses, brands and creators." />
        <section className="section">
          <div className="twoCol">
            <div className="card"><span className="tag">Clients</span><h3>Local & International</h3><p>I work with creators, businesses and brands that need clean, professional and engaging videos.</p></div>
            <div className="card"><span className="tag">Focus</span><h3>Retention & Conversion</h3><p>My editing focuses on strong hooks, smooth flow, cinematic visuals, sound design and high-quality delivery.</p></div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
