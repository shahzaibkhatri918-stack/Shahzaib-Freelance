import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import PageHero from "../../components/PageHero";

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
                color: "rgba(255,255,255,0.85)",
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
                storytelling.
              </p>

              <p>
                My goal is simple: deliver videos that look professional, keep
                viewers engaged and help clients grow their business.
              </p>

              <p>
                Whether you need a sales video, YouTube content, social media
                reels or branded advertisements, I’m ready to bring your vision
                to life.
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
