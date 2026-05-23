"use client";

import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import ServiceOrbit from "../../components/ServiceOrbit";
import PortfolioFilter from "../../components/PortfolioFilter";
import { services } from "../../data/site";

export default function ServicesPage() {
  return (
    <div className="site">
      <Navbar />

      <main>
        <section className="hero fade-up">
  <div
    style={{
      maxWidth: "1150px",
      margin: "0 auto",
      display: "grid",
      gridTemplateColumns: "1fr 0.9fr",
      gap: "130px",
      alignItems: "center",
    }}
  >
    {/* Left Side Text */}
    <div>
      <span className="pill">Services</span>

      <h1>
        Professional <span className="yellow">Video Editing</span> Services
      </h1>

      <p className="heroText">
        Editing services for creators, coaches, brands, podcasts,
        businesses and social media teams.
      </p>

      <a href="#project-form" className="btn">
        Start Your Project
      </a>
    </div>

    {/* Right Side Image */}
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <img
        src="/Shahzaib Soomro.jpg"
        alt="Shahzaib Soomro"
        style={{
          width: "420px",
          height: "420px",
          objectFit: "cover",
          borderRadius: "30px",
          border: "2px solid rgba(255, 214, 0, 0.35)",
          boxShadow: "0 30px 80px rgba(255, 214, 0, 0.15)",
        }}
      />
    </div>
  </div>
</section>
        <section className="section fade-up">
          <div className="sectionTitle">
            <span className="pill">Featured Portfolio</span>
            <h2>
              Discover <span className="yellow">Editing Work</span>
            </h2>
            <p>
              A curated showcase of premium video edits designed for creators,
              brands and businesses worldwide.
            </p>
          </div>

          <PortfolioFilter />
        </section>

        <section className="orbitSection">
          <div className="orbitTitle">
            <span className="pill">Service Motion</span>
            <h2>
              Choose Your <span className="yellow">Editing Service</span>
            </h2>
            <p>
              Click any service badge to stay connected with the services page.
            </p>
          </div>

          <ServiceOrbit />
        </section>

        <section className="section dark fade-up">
          <div className="serviceGrid">
            {services.map((service) => (
              <article className="serviceCard" key={service.title}>
                <div className="serviceIcon">{service.icon}</div>
                <span className="serviceLabel">{service.tag}</span>
                <h3>{service.title}</h3>
                <p>{service.text}</p>
                <ul>
                  {service.points.map((p) => (
                    <li key={p}>{p}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section id="project-form" className="section fade-up">
          <div
            style={{
              maxWidth: "1150px",
              margin: "0 auto",
              display: "grid",
              gridTemplateColumns: "0.9fr 1.1fr",
              gap: "50px",
              alignItems: "center",
            }}
          >
            <div
              className="contactLeft"
              style={{
                textAlign: "center",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <img
                src="/Shahzaib Soomro.jpg"
                alt="Shahzaib Soomro"
                style={{
                  width: "100%",
                  maxWidth: "420px",
                  borderRadius: "28px",
                  border: "2px solid rgba(255, 214, 0, 0.35)",
                  boxShadow: "0 30px 80px rgba(255, 214, 0, 0.15)",
                  display: "block",
                  marginBottom: "24px",
                }}
              />

              <h2
                style={{
                  color: "#111827",
                  marginBottom: "12px",
                  fontSize: "42px",
                  fontWeight: "800",
                }}
              >
                Shahzaib Soomro
              </h2>

              <p
                style={{
                  color: "#4b5563",
                  lineHeight: "1.8",
                  maxWidth: "520px",
                  margin: "0 auto",
                  fontSize: "1.05rem",
                }}
              >
                Tell me about your project and let’s create something amazing.
              </p>
            </div>

            <form
              onSubmit={async (e) => {
                e.preventDefault();

                const form = e.currentTarget;
                const formData = new FormData(form);

                await fetch("https://formspree.io/f/xqejblwg", {
                  method: "POST",
                  body: formData,
                  headers: {
                    Accept: "application/json",
                  },
                });

                window.location.href =
                  "https://shahzaibsoomro.com/?success=true";
              }}
              style={{
                background: "#ffffff",
                padding: "34px",
                borderRadius: "24px",
                width: "100%",
                maxWidth: "560px",
                margin: "0 auto",
                border: "1px solid rgba(0,0,0,0.08)",
                boxShadow: "0 25px 70px rgba(0,0,0,0.10)",
              }}
            >
              <h2 style={{ color: "#111827", marginTop: 0 }}>
                Project Inquiry
              </h2>

              <input
                type="text"
                name="fullName"
                placeholder="Full Name"
                required
                style={inputStyle}
              />

              <input
                type="email"
                name="email"
                placeholder="Email Address"
                required
                style={inputStyle}
              />

              <select name="projectType" required style={inputStyle}>
                <option value="">Select Project Type</option>
                <option value="Ad Video">Ad Video</option>
                <option value="UGC Video">UGC Video</option>
                <option value="Event Videos">Event Videos</option>
                <option value="Corporate Video">Corporate Video</option>
                <option value="Talking Head Video">Talking Head Video</option>
                <option value="Podcast Editing">Podcast Editing</option>
                <option value="Documentary Video">Documentary Video</option>
                <option value="Other / Custom Project">
                  Other / Custom Project
                </option>
              </select>

              <textarea
                name="projectDetails"
                placeholder="Project Details"
                required
                rows={6}
                style={{
                  ...inputStyle,
                  resize: "vertical",
                  minHeight: "140px",
                }}
              />

              <button
                type="submit"
                style={{
                  background: "#facc15",
                  color: "#000",
                  padding: "13px 34px",
                  borderRadius: "12px",
                  border: "none",
                  fontWeight: "800",
                  cursor: "pointer",
                  boxShadow: "0 12px 30px rgba(250, 204, 21, 0.35)",
                }}
              >
                Submit
              </button>
            </form>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

const inputStyle = {
  width: "100%",
  padding: "14px 16px",
  marginBottom: "16px",
  borderRadius: "12px",
  border: "1px solid #d1d5db",
  outline: "none",
  fontSize: "15px",
  color: "#111827",
  background: "#f9fafb",
};
