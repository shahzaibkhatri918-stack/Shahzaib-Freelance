import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import PageHero from "../../components/PageHero";
import { site } from "../../data/site";

export default function ContactPage() {
  return (
    <div className="site">
      <Navbar />
      <main>
        <PageHero label="Contact" title="Let’s Create Your Next Video" text="Need a professional editor for talking head videos, VSL, Facebook ads, podcast editing, reels, YouTube or corporate videos? Contact me today." />
        <section className="section">
          <div className="contactBox">
            <h2>Available For Projects</h2>
            <p className="sectionIntro" style={{ margin: "0 auto 28px" }}>Email: {site.email}<br />Phone / WhatsApp: {site.phone}</p>
            <div className="heroActions" style={{ justifyContent: "center" }}>
              <a className="btn" href={`mailto:${site.email}`}>Email Me</a>
              <a className="btn dark" href={`tel:${site.phone}`}>Call / WhatsApp</a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
