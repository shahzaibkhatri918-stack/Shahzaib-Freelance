import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import PageHero from "../../components/PageHero";
import Testimonials from "../../components/Testimonials";

export default function AboutPage() {
  return (
    <div className="site">
      <Navbar />
<main> <PageHero label="About Us" title="Professional Video Editor Focused on Results" text="I help creators, brands and businesses turn raw footage into cinematic, high-converting videos that capture attention and drive engagement." /> <section className="section fade-up"> <div
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
    Hi, I'm <strong>Shahzaib Soomro</strong>, a professional video editor from
    Pakistan specializing in premium video editing for creators, brands and
    businesses worldwide.
  </p>

  <p>
    I create Talking Head videos, VSLs, Facebook Ads, Podcast edits, Reels,
    Shorts and Corporate videos designed to increase engagement, improve
    retention and deliver cinematic visual quality.
  </p>

  <p>
    My editing workflow includes clean cuts, motion graphics, subtitles, sound
    design, color grading and conversion-focused.
  </p>

  {/* Reviews */}
  <div
    style={{
      display: "flex",
      gap: "30px",
      marginTop: "30px",
      marginBottom: "30px",
      flexWrap: "wrap",
    }}
  >
    <div>
      <h3
        style={{
          fontSize: "2rem",
          color: "#facc15",
          margin: 0,
          fontWeight: "700",
        }}
      >
        5★
      </h3>
      <p style={{ margin: 0, color: "#6b7280" }}>Client Rating</p>
    </div>

    <div>
      <h3
        style={{
          fontSize: "2rem",
          color: "#facc15",
          margin: 0,
          fontWeight: "700",
        }}
      >
        70+
      </h3>
      <p style={{ margin: 0, color: "#6b7280" }}>Projects Completed</p>
    </div>

    <div>
      <h3
        style={{
          fontSize: "2rem",
          color: "#facc15",
          margin: 0,
          fontWeight: "700",
        }}
      >
        50M+
      </h3>
      <p style={{ margin: 0, color: "#6b7280" }}>Views Generated</p>
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
      transition: "all 0.3s ease",
    }}
  >
    Book Project
  </a>
</div>          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

{/* Reviews */}
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
  <div
    style={{
      minWidth: "120px",
    }}
  >
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

  <div
    style={{
      minWidth: "120px",
    }}
  >
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

  <div
    style={{
      minWidth: "120px",
    }}
  >
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
