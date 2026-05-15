import { testimonials } from "../data/site";

export default function Testimonials() {
  return (
    <section className="section fade-up">
      <div className="sectionTitle">
        <span className="pill">Testimonials</span>
        <h2>
          What <span className="pink">Clients</span> Say
        </h2>
        <p>Six testimonial cards are ready. Replace images later inside public/testimonials.</p>
      </div>

      <div className="testimonialGrid">
        {testimonials.map((item) => (
          <article className="testimonialCard" key={item.name}>
            <div className="clientRow">
              <div className="avatar">
                <img
                  src={item.img}
                  alt={item.name}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    display: "block",
                    borderRadius: "50%",
                  }}
                />
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
