import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import PageHero from "../../components/PageHero";
import { site } from "../../data/site";

export default function ContactPage() {
  return (
    <div className="site">
      <Navbar />

      <main>
        <PageHero
          label="Contact"
          title="Let’s Build Your Next Video"
          text="Share your project details and I’ll get back to you as soon as possible."
        />

        <section className="section fade-up">
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
            <div>
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
                  marginBottom: "28px",
                }}
              />

              <h2 style={{ color: "#111827", marginBottom: "12px" }}>
                Shahzaib Soomro
              </h2>

              <p style={{ color: "#4b5563", lineHeight: "1.7" }}>
                Professional Video Editor specializing in Talking Head videos,
                VSLs, Facebook Ads, Podcast edits, Reels and Corporate videos.
              </p>

              <p>
                <strong>Email:</strong>{" "}
                <a href={`mailto:${site.email}`}>{site.email}</a>
              </p>

              <p>
                <strong>WhatsApp:</strong>{" "}
                <a href={site.whatsapp} target="_blank" rel="noreferrer">
                  {site.phoneDisplay}
                </a>
              </p>
            </div>

            {/* Right Side Form */}
           <form
  action="https://formspree.io/f/xqejblwg"
  method="POST"
  onSubmit={() => {
    setTimeout(() => {
      window.location.href =
        "https://shahzaibsoomro.com/?success=true";
    }, 1000);
  }}
  style={{
    background: "#ffffff",
    padding: "34px",
    borderRadius: "24px",
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
