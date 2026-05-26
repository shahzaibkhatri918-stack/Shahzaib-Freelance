"use client";

import Link from "next/link";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ServiceOrbit from "../components/ServiceOrbit";
import PortfolioFilter from "../components/PortfolioFilter";
import Testimonials from "../components/Testimonials";
import { services, site } from "../data/site";

export default function HomePage() {
  const success =
    typeof window !== "undefined" &&
    window.location.search.includes("success=true");

  return (
    <div className="site">
      <Navbar />
      <main>
        {success && (
  <div
    style={{
      background: "#facc15",
      color: "#000",
      padding: "14px 22px",
      borderRadius: "14px",
      margin: "20px auto",
      fontWeight: "700",
      textAlign: "center",
      maxWidth: "700px",
    }}
  >
    Thanks! Your project inquiry was submitted successfully.
    <br />
    <a
      href="/"
      style={{
        color: "#000",
        textDecoration: "underline",
        fontWeight: "800",
      }}
    >
      More Explore
    </a>
  </div>
)}
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
        <section className="section fade-up">
  <div
    style={{
      maxWidth: "1100px",
      margin: "0 auto",
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
      gap: "60px",
      alignItems: "center",
    }}
  >
    {/* Left Image */}
    <div style={{ textAlign: "center" }}>
      <img
        src="/Shahzaib Soomro.jpg"
        alt="Shahzaib Soomro"
        style={{
          width: "100%",
          maxWidth: "540px",
          borderRadius: "30px",
          border: "2px solid rgba(255, 214, 0, 0.35)",
          boxShadow: "0 30px 80px rgba(255, 214, 0, 0.15)",
        }}
      />
    </div>

    {/* Right Text */}
    <div>
      <span className="pill">About Us</span>

      <h2
        style={{
  fontSize: "clamp(35px, 5vw, 60px)",
  lineHeight: "0.95",
  margin: "22px 0",
  color: "#111827",
  fontFamily: "serif",
  maxWidth: "1000px",
        }}
      >
        Shahzaib Soomro
      </h2>

      <p
        style={{
          fontSize: "1.12rem",
          lineHeight: "1.8",
          color: "#374151",
          maxWidth: "620px",
        }}
      >
        I’m a professional video editor helping creators, brands and businesses
        turn raw footage into cinematic, high-retention videos that capture
        attention and drive real results.
      </p>

      <p
        style={{
          fontSize: "1.05rem",
          lineHeight: "1.8",
          color: "#4b5563",
          maxWidth: "620px",
        }}
      >
        From Talking Head edits and VSLs to ads, podcasts, reels and corporate
        videos, I focus on clean pacing, strong storytelling and premium visual
        quality.
      </p>

      <a
        href="#project-form"
        className="btn"
        style={{
          marginTop: "18px",
          display: "inline-block",
        }}
      >
        Book Project
      </a>
    </div>
  </div>
</section>
        <section className="ctaBanner fade-up">
  <div className="ctaBannerContent">

    <div className="ctaText">
      <span className="pill">Let’s Work Together</span>
       <h2>
        Ready To Turn Your Ideas Into
        <span className="yellow"> High-Converting Videos?</span>
      </h2>
    </div>

    <a href="#project-form" className="ctaBigBtn">
      Start Your Project
    </a>

  </div>
  <PortfolioFilter />
</section>

<section className="ctaBanner fade-up">
  <div className="ctaBannerContent">
    <div className="ctaText">
      <span className="pill">Let’s Work Together</span>

      <h2>
        Ready To Turn Your Ideas Into{" "}
        <span className="yellow">High-Converting Videos?</span>
      </h2>
    </div>

    <a href="#project-form" className="ctaBigBtn">
      Start Your Project
    </a>
  </div>
</section>

<section className="orbitSection">
  <div className="orbitTitle fade-up">
    <span className="pill">Motion Services</span>
    <h2>
      Premium <span className="yellow">Editing Services</span> In Motion
    </h2>
    <p>Explore my core editing services built to make every video look professional.</p>
  </div>

  <ServiceOrbit />
</section>
        <section className="section dark fade-up"><div className="sectionTitle"><span className="pill">Creative Services</span><h2>World-Class <span className="yellow">Video Editing</span></h2><p>Professional editing services designed for attention, retention and conversion.</p></div><div className="serviceGrid">{services.map((service)=><article className="serviceCard" key={service.title}><div className="serviceIcon">{service.icon}</div><span className="serviceLabel">{service.tag}</span><h3>{service.title}</h3><p>{service.text}</p><ul>{service.points.map((p)=><li key={p}>{p}</li>)}</ul></article>)}</div></section>
         <section id="project-form" className="section fade-up">
          <div
            style={{
              maxWidth: "1150px",
              margin: "0 auto",
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
              gap: "50px",
              alignItems: "center",
            }}
          >
        {/* Left Side */}
<div
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
            {/* Right Side Form */}
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

    window.location.href = "https://shahzaibsoomro.com/?success=true";
  }}
  style={{
    background: "#ffffff",
    padding: "34px",
    borderRadius: "24px",
    border: "1px solid rgba(0,0,0,0.08)",
    boxShadow: "0 25px 70px rgba(0,0,0,0.10)",
  }} >
            
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
        <Testimonials />
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
