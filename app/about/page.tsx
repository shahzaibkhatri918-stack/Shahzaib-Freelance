"use client";

import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import PageHero from "../../components/PageHero";
import Testimonials from "../../components/Testimonials";

export default function AboutPage() {
  return (
    <div className="site">
      <Navbar />

      <main>
        <PageHero
          label="About Us"
          title="Professional Video Editor Focused on Results"
          text="I help creators, brands and businesses turn raw footage into cinematic, high-converting videos that capture attention and drive engagement."
        />

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
            {/* Left Side - Image */}
            <div style={{ textAlign: "center" }}>
              <img
                src="/Shahzaib Soomro.jpg"
                alt="Shahzaib Soomro"
                style={{
                  width: "100%",
                  maxWidth: "420px",
                  borderRadius: "30px",
                  border: "2px solid rgba(255, 214, 0, 0.35)",
                  boxShadow: "0 30px 80px rgba(255, 214, 0, 0.15)",
                }}
              />
            </div>

            {/* Right Side - Text */}
            <div
              style={{
                fontSize: "1.15rem",
                lineHeight: "1.9",
                color: "#1f2937",
              }}
            >
              <p>
                Hi, I'm <strong>Shahzaib Soomro</strong>, a professional video
                editor from Pakistan specializing in premium video editing for
                creators, brands and businesses worldwide.
              </p>

              <p>
                I create Talking Head videos, VSLs, Facebook Ads, Podcast edits,
                Reels, Shorts and Corporate videos designed to increase
                engagement, improve retention and deliver cinematic visual
                quality.
              </p>

              <p>
                My editing workflow includes clean cuts, motion graphics,
                subtitles, sound design, color grading and conversion-focused
                editing.
              </p>

              {/* Stats */}
              <div
                style={{
                  display: "flex",
                  gap: "30px",
                  marginTop: "30px",
                  marginBottom: "30px",
                  flexWrap: "wrap",
                  alignItems: "center",
                }}
              >
                <div style={{ minWidth: "120px" }}>
                  <h3
                    style={{
                      fontSize: "2rem",
                      color: "#facc15",
                      margin: "0 0 5px 0",
                      fontWeight: "700",
                    }}
                  >
                    5★
                  </h3>
                  <p
                    style={{
                      margin: 0,
                      color: "#6b7280",
                      fontSize: "0.95rem",
                    }}
                  >
                    Client Rating
                  </p>
                </div>

                <div style={{ minWidth: "120px" }}>
                  <h3
                    style={{
                      fontSize: "2rem",
                      color: "#facc15",
                      margin: "0 0 5px 0",
                      fontWeight: "700",
                    }}
                  >
                    70+
                  </h3>
                  <p
                    style={{
                      margin: 0,
                      color: "#6b7280",
                      fontSize: "0.95rem",
                    }}
                  >
                    Projects Completed
                  </p>
                </div>

                <div style={{ minWidth: "120px" }}>
                  <h3
                    style={{
                      fontSize: "2rem",
                      color: "#facc15",
                      margin: "0 0 5px 0",
                      fontWeight: "700",
                    }}
                  >
                    50M+
                  </h3>
                  <p
                    style={{
                      margin: 0,
                      color: "#6b7280",
                      fontSize: "0.95rem",
                    }}
                  >
                    Views Generated
                  </p>
                </div>
              </div>

              {/* Book Project Button */}
              <a
                href="/contact"
                style={{
                  display: "inline-block",
                  background: "#facc15",
                  color: "#000",
                  padding: "14px 32px",
                  borderRadius: "12px",
                  fontWeight: "700",
                  textDecoration: "none",
                  boxShadow: "0 10px 30px rgba(250, 204, 21, 0.35)",
                }}
              >
                Book Project
              </a>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <Testimonials />
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
