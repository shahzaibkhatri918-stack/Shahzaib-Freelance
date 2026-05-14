import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import PageHero from "../../components/PageHero";
import { services } from "../../data/site";

export default function ServicesPage() {
  return (
    <div className="site">
      <Navbar />
      <main>
        <PageHero label="Services" title="Editing Services Built For Attention" text="From talking head content to VSLs, ads, podcasts, reels and corporate videos, every edit is designed to look premium and keep viewers watching." />
        <section className="section">
          <div className="grid">
            {services.map((service, index) => (
              <article className="card" key={service}>
                <span className="tag">0{index + 1}</span>
                <h3>{service}</h3>
                <p>Premium editing with strong pacing, clean visuals, sound design and professional polish.</p>
              </article>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
