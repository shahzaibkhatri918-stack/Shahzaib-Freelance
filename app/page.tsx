import Link from "next/link";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ServiceOrbit from "../components/ServiceOrbit";
import { categories, projects, services, testimonials } from "../data/site";

export default function HomePage() {
  return (
    <div className="site">
      <Navbar />

      <main>
        <section className="hero fade-up">
          <div>
            <h1>
              Crafting Stories That <span className="yellow">Capture</span> & <span className="pink">Convert</span>
            </h1>
            <p className="heroText">
              Professional video editing for creators, brands and businesses. I turn raw footage into
              clean, cinematic and high-retention content that looks premium and keeps viewers watching.
            </p>

            <div className="heroStats">
              <div><strong>70+</strong><span>Projects Completed</span></div>
              <div><strong>50M+</strong><span>Potential Views Created</span></div>
            </div>

            <div className="heroActions">
              <Link className="btn" href="/portfolio">View Portfolio</Link>
              <Link className="btn outline" href="/contact">Start Project</Link>
            </div>
          </div>

          <div className="heroVisual">
            <img src="/hero.jpg" alt="Shahzaib Soomro portrait" />
            <div className="imagePlaceholder">Upload your image as public/hero.jpg</div>
            <div className="floatingBadge">DaVinci Resolve Editor</div>
          </div>
        </section>

        <section className="orbitSection">
          <div className="orbitTitle fade-up">
            <span className="pill">Editing Services</span>
            <h2>Services That <span className="yellow">Move</span> Around Your Brand</h2>
            <p>Tap any badge to open the Services page.</p>
          </div>
          <ServiceOrbit />
        </section>

        <section className="section fade-up">
          <div className="sectionTitle">
            <span className="pill">Featured Portfolio</span>
            <h2>Discover <span className="yellow">Editing Work</span></h2>
            <p>Explore project categories and replace placeholders with your own best videos and thumbnails.</p>
          </div>

          <div className="categoryRow">
            {categories.map((cat) => (
              <div className="category" key={cat}>
                <span>▣</span>
                <b>{cat}</b>
                <small>Projects</small>
              </div>
            ))}
          </div>

          <div className="grid">
            {projects.map((project, index) => (
              <article className="projectCard" key={project.title}>
                <div className="projectThumb">
                  <img src={project.img} alt={project.title} />
                  <span>Project {index + 1}</span>
                </div>
                <div className="projectInfo">
                  <span className="tag">{project.type}</span>
                  <h3>{project.title}</h3>
                  <p>Premium edit with clean visuals, strong pacing and professional delivery.</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="section dark fade-up">
          <div className="sectionTitle">
            <span className="pill">Creative Services</span>
            <h2>World-Class <span className="yellow">Video Editing</span></h2>
            <p>Professional editing services designed for attention, retention and conversion.</p>
          </div>

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

        <section className="section fade-up">
          <div className="sectionTitle">
            <span className="pill">Testimonials</span>
            <h2>What <span className="pink">Clients</span> Say</h2>
            <p>Six testimonial cards are ready. You can replace images later inside public/testimonials.</p>
          </div>

          <div className="testimonialGrid">
            {testimonials.map((item) => (
              <article className="testimonialCard" key={item.name}>
                <div className="clientRow">
                  <div className="avatar"><img src={item.img} alt={item.name} /></div>
                  <div>
                    <h3>{item.name}</h3>
                    <span className="tag">{item.role}</span>
                  </div>
                </div>
                <div className="stars">★★★★★</div>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
