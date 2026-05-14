import Link from "next/link";
import { orbitServices } from "../data/site";

export default function ServiceOrbit() {
  const row1 = orbitServices.slice(0, 5);
  const row2 = orbitServices.slice(5, 10);
  const row3 = orbitServices.slice(10, 15);

  return (
    <div className="orbitWrap fade-up">
      <div className="orbitGlow"></div>
      <div className="orbitCenter">
        <strong>Premium Editing</strong>
        <span>click any service</span>
      </div>

      <div className="orbitRing ringOne">
        {row1.map((item, index) => (
          <Link href="/services" className={`orbitBadge badge${index + 1}`} key={item}>
            <span></span>{item}
          </Link>
        ))}
      </div>

      <div className="orbitRing ringTwo">
        {row2.map((item, index) => (
          <Link href="/services" className={`orbitBadge badge${index + 1}`} key={item}>
            <span></span>{item}
          </Link>
        ))}
      </div>

      <div className="orbitRing ringThree">
        {row3.map((item, index) => (
          <Link href="/services" className={`orbitBadge badge${index + 1}`} key={item}>
            <span></span>{item}
          </Link>
        ))}
      </div>
    </div>
  );
}
