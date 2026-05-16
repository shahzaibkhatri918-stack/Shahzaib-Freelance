import { testimonials } from "../data/site";

export default function Testimonials() {
  return (
    <section className="section fade-up">
      <div className="sectionTitle">
        <span className="pill">Testimonials</span>
        <h2>What <span className="pink">Clients</span> Say</h2>
        <p>Trusted by creators, business owners and brands who value premium editing and reliable delivery.</p>
      </div>

      <div className="testimonialGrid">
        {testimonials.map((item) => (
          <article className="testimonialCard" key={item.name}>
            <div className="clientRow">
              <div className="avatar">
                <img src={item.img} alt={item.name} />
              </div>
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
  );
}
