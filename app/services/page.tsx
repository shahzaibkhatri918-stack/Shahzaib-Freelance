import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import PageHero from "../../components/PageHero";
import ServiceOrbit from "../../components/ServiceOrbit";
import { services } from "../../data/site";

export default function ServicesPage() {
  return (
    <div className="site">
      <Navbar />
      <main>
        <PageHero label="Services" title="Professional Video Editing Services" text="Editing services for creators, coaches, brands, podcasts, businesses and social media teams." />
        <section className="orbitSection"><div className="orbitTitle"><span className="pill">Service Map</span><h2>Choose The <span className="yellow">Editing Service</span></h2><p>Premium motion service orbit for all editing categories.</p></div><ServiceOrbit /></section>
        <section className="section dark fade-up">
          <div className="grid">
            {services.map((service) => (
              <article className="serviceCard" key={service.title}>
                <span className="serviceLabel">{service.tag}</span>
                <h3>{service.title}</h3>
                <p>{service.text}</p>
              </article>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
